const linearSieve = (limit) => {
    if (!Number.isInteger(limit) || limit < 0) {
        throw new TypeError("linearSieve expects a non-negative integer.");
    }

    const smallestPrimeFactor = new Array(limit + 1).fill(0);
    const primes = [];

    for (let value = 2; value <= limit; value += 1) {
        if (smallestPrimeFactor[value] === 0) {
            smallestPrimeFactor[value] = value;
            primes.push(value);
        }

        for (let index = 0; index < primes.length; index += 1) {
            const prime = primes[index];
            const composite = value * prime;

            if (prime > smallestPrimeFactor[value] || composite > limit) {
                break;
            }

            smallestPrimeFactor[composite] = prime;
        }
    }

    return {
        primes,
        smallestPrimeFactor,
    };
};

module.exports = linearSieve;
