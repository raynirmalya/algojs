class RollingHash {
    constructor(text, base, modulus) {
        this.text = text || "";
        this.base = Number.isInteger(base) ? base : 257;
        this.modulus = Number.isInteger(modulus) ? modulus : 1000000007;
        this.prefix = [0];
        this.powers = [1];

        for (let index = 0; index < this.text.length; index += 1) {
            this.prefix[index + 1] =
                ((this.prefix[index] * this.base) + this.text.charCodeAt(index)) % this.modulus;
            this.powers[index + 1] = (this.powers[index] * this.base) % this.modulus;
        }
    }

    hash() {
        return this.prefix[this.text.length];
    }

    substringHash(start, end) {
        if (start < 0 || end < start || end > this.text.length) {
            throw new RangeError("RollingHash substring range is invalid.");
        }

        return (
            (this.prefix[end] - (this.prefix[start] * this.powers[end - start]) % this.modulus + this.modulus) %
            this.modulus
        );
    }

    static compute(text, base, modulus) {
        return new RollingHash(text, base, modulus).hash();
    }
}

module.exports = RollingHash;
