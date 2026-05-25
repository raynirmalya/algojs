const decodeWays = (digits) => {
    if (digits.length === 0) {
        return 0;
    }

    const dp = new Array(digits.length + 1).fill(0);
    dp[0] = 1;
    dp[1] = digits[0] === "0" ? 0 : 1;

    for (let index = 2; index <= digits.length; index += 1) {
        const oneDigit = Number(digits.slice(index - 1, index));
        const twoDigits = Number(digits.slice(index - 2, index));

        if (oneDigit >= 1) {
            dp[index] += dp[index - 1];
        }

        if (twoDigits >= 10 && twoDigits <= 26) {
            dp[index] += dp[index - 2];
        }
    }

    return dp[digits.length];
};

module.exports = decodeWays;
