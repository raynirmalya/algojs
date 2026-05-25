const millerRabin = require("./miller-rabin");

const gcdBigInt = (firstValue, secondValue) => {
    let a = firstValue < 0n ? -firstValue : firstValue;
    let b = secondValue < 0n ? -secondValue : secondValue;

    while (b !== 0n) {
        const temp = a % b;
        a = b;
        b = temp;
    }

    return a;
};

const pollardsRho = (value) => {
    const n = BigInt(value);

    if (n < 2n) {
        throw new RangeError("pollardsRho expects an integer greater than 1.");
    }

    if (n % 2n === 0n) {
        return 2n;
    }

    if (millerRabin(n)) {
        return n;
    }

    const iterate = (x, c) => ((x * x) + c) % n;

    for (let constant = 1n; constant <= 10n; constant += 1n) {
        let x = 2n;
        let y = 2n;
        let divisor = 1n;

        while (divisor === 1n) {
            x = iterate(x, constant);
            y = iterate(iterate(y, constant), constant);
            divisor = gcdBigInt(x - y, n);
        }

        if (divisor !== n) {
            return divisor;
        }
    }

    return n;
};

module.exports = pollardsRho;
