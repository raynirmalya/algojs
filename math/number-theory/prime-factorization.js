const primeFactorization = (value) => {
    if (!Number.isInteger(value) || value < 2) {
        return [];
    }

    let remaining = value;
    const factors = [];

    for (let divisor = 2; divisor * divisor <= remaining; divisor += divisor === 2 ? 1 : 2) {
        if (remaining % divisor !== 0) {
            continue;
        }

        let exponent = 0;

        while (remaining % divisor === 0) {
            remaining /= divisor;
            exponent += 1;
        }

        factors.push({
            prime: divisor,
            exponent,
        });
    }

    if (remaining > 1) {
        factors.push({
            prime: remaining,
            exponent: 1,
        });
    }

    return factors;
};

module.exports = primeFactorization;
