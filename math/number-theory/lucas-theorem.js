const binomialModPrime = (n, k, prime) => {
    if (k > n) {
        return 0;
    }

    const dp = new Array(k + 1).fill(0);
    dp[0] = 1;

    for (let row = 1; row <= n; row += 1) {
        const limit = Math.min(row, k);

        for (let column = limit; column > 0; column -= 1) {
            dp[column] = (dp[column] + dp[column - 1]) % prime;
        }
    }

    return dp[k];
};

const lucasTheorem = (n, k, prime) => {
    if (!Number.isInteger(n) || !Number.isInteger(k) || !Number.isInteger(prime) || n < 0 || k < 0 || prime <= 1) {
        throw new TypeError("lucasTheorem expects non-negative integers and a prime modulus.");
    }

    if (k > n) {
        return 0;
    }

    let result = 1;
    let currentN = n;
    let currentK = k;

    while (currentN > 0 || currentK > 0) {
        const ni = currentN % prime;
        const ki = currentK % prime;

        if (ki > ni) {
            return 0;
        }

        result = (result * binomialModPrime(ni, ki, prime)) % prime;
        currentN = Math.floor(currentN / prime);
        currentK = Math.floor(currentK / prime);
    }

    return result;
};

module.exports = lucasTheorem;
