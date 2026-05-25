const extendedEuclidean = (firstValue, secondValue) => {
    if (!Number.isInteger(firstValue) || !Number.isInteger(secondValue)) {
        throw new TypeError("extendedEuclidean expects integer inputs.");
    }

    let oldRemainder = firstValue;
    let remainder = secondValue;
    let oldS = 1;
    let s = 0;
    let oldT = 0;
    let t = 1;

    while (remainder !== 0) {
        const quotient = Math.trunc(oldRemainder / remainder);

        const nextRemainder = oldRemainder - (quotient * remainder);
        oldRemainder = remainder;
        remainder = nextRemainder;

        const nextS = oldS - (quotient * s);
        oldS = s;
        s = nextS;

        const nextT = oldT - (quotient * t);
        oldT = t;
        t = nextT;
    }

    if (oldRemainder < 0) {
        oldRemainder *= -1;
        oldS *= -1;
        oldT *= -1;
    }

    return {
        gcd: oldRemainder,
        x: oldS,
        y: oldT,
    };
};

module.exports = extendedEuclidean;
