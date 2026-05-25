const segmentedSieve = (start, end) => {
    if (!Number.isInteger(start) || !Number.isInteger(end) || start > end) {
        throw new TypeError("segmentedSieve expects integer bounds with start <= end.");
    }

    const left = Math.max(2, start);
    const right = end;

    if (right < 2) {
        return [];
    }

    const limit = Math.floor(Math.sqrt(right));
    const basePrimes = [];
    const isPrimeBase = new Array(limit + 1).fill(true);

    for (let value = 2; value <= limit; value += 1) {
        if (!isPrimeBase[value]) {
            continue;
        }

        basePrimes.push(value);

        for (let multiple = value * value; multiple <= limit; multiple += value) {
            isPrimeBase[multiple] = false;
        }
    }

    const segment = new Array(right - left + 1).fill(true);

    basePrimes.forEach((prime) => {
        let multiple = Math.max(prime * prime, Math.ceil(left / prime) * prime);

        while (multiple <= right) {
            segment[multiple - left] = false;
            multiple += prime;
        }
    });

    const primes = [];

    for (let index = 0; index < segment.length; index += 1) {
        if (segment[index]) {
            primes.push(left + index);
        }
    }

    return primes;
};

module.exports = segmentedSieve;
