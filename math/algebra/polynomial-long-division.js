const trim = (coefficients) => {
    const result = coefficients.slice();

    while (result.length > 1 && Math.abs(result[0]) < 1e-12) {
        result.shift();
    }

    return result;
};

const polynomialLongDivision = (dividend, divisor) => {
    if (!Array.isArray(dividend) || !Array.isArray(divisor) || divisor.length === 0) {
        throw new TypeError("polynomialLongDivision expects dividend and divisor coefficient arrays.");
    }

    let remainder = trim(dividend);
    const normalizedDivisor = trim(divisor);
    const quotient = new Array(Math.max(0, remainder.length - normalizedDivisor.length + 1)).fill(0);

    while (remainder.length >= normalizedDivisor.length) {
        const coefficient = remainder[0] / normalizedDivisor[0];
        const degreeOffset = remainder.length - normalizedDivisor.length;
        quotient[quotient.length - degreeOffset - 1] = coefficient;

        const subtraction = normalizedDivisor
            .map((value) => value * coefficient)
            .concat(new Array(degreeOffset).fill(0));

        remainder = trim(remainder.map((value, index) => value - subtraction[index]));
    }

    return {
        quotient,
        remainder: remainder.length === 0 ? [0] : remainder,
    };
};

module.exports = polynomialLongDivision;
