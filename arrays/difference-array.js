class DifferenceArray {
    constructor(values) {
        if (!Array.isArray(values)) {
            throw new TypeError("DifferenceArray expects an array of values.");
        }

        this.values = values.slice();
        this.difference = new Array(this.values.length).fill(0);

        if (this.values.length > 0) {
            this.difference[0] = this.values[0];

            for (let index = 1; index < this.values.length; index += 1) {
                this.difference[index] = this.values[index] - this.values[index - 1];
            }
        }
    }

    rangeIncrement(left, right, delta) {
        if (
            left < 0 ||
            right < 0 ||
            left > right ||
            right >= this.values.length ||
            typeof delta !== "number"
        ) {
            throw new RangeError("Invalid DifferenceArray update.");
        }

        this.difference[left] += delta;

        if (right + 1 < this.difference.length) {
            this.difference[right + 1] -= delta;
        }

        return this.build();
    }

    build() {
        const built = new Array(this.difference.length).fill(0);

        if (built.length === 0) {
            return built;
        }

        built[0] = this.difference[0];

        for (let index = 1; index < built.length; index += 1) {
            built[index] = built[index - 1] + this.difference[index];
        }

        this.values = built.slice();
        return built;
    }
}

module.exports = DifferenceArray;
