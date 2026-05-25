const sieveOfEratosthenes = (limit) => {
    if (!Number.isInteger(limit) || limit < 0) {
        throw new TypeError("sieveOfEratosthenes expects a non-negative integer.");
    }

    if (limit < 2) {
        return [];
    }

    const isPrime = new Array(limit + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;

    for (let value = 2; value * value <= limit; value += 1) {
        if (!isPrime[value]) {
            continue;
        }

        for (let multiple = value * value; multiple <= limit; multiple += value) {
            isPrime[multiple] = false;
        }
    }

    const primes = [];

    for (let value = 2; value <= limit; value += 1) {
        if (isPrime[value]) {
            primes.push(value);
        }
    }

    return primes;
};

module.exports = sieveOfEratosthenes;
