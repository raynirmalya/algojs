class PolynomialHash {
    constructor(text, options) {
        if (typeof text !== "string") {
            throw new TypeError("PolynomialHash expects a string.");
        }

        const settings = options || {};
        this.text = text;
        this.base = settings.base || 911382323;
        this.modulus = settings.modulus || 1000000007;
        this.prefix = new Array(text.length + 1).fill(0);
        this.powers = new Array(text.length + 1).fill(1);

        for (let index = 0; index < text.length; index += 1) {
            this.prefix[index + 1] =
                (this.prefix[index] * this.base + text.charCodeAt(index)) % this.modulus;
            this.powers[index + 1] = (this.powers[index] * this.base) % this.modulus;
        }
    }

    hash() {
        return this.prefix[this.text.length];
    }

    substringHash(start, end) {
        if (start < 0 || end < start || end > this.text.length) {
            throw new RangeError("Invalid PolynomialHash substring range.");
        }

        const raw =
            this.prefix[end] - (this.prefix[start] * this.powers[end - start]) % this.modulus;

        return (raw + this.modulus) % this.modulus;
    }

    static compute(text, options) {
        return new PolynomialHash(text, options).hash();
    }
}

module.exports = PolynomialHash;
