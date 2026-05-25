const coinChange = (coins, amount) => {
    if (!Array.isArray(coins)) {
        throw new TypeError("coinChange expects an array of coin denominations.");
    }

    const dp = new Array(amount + 1).fill(Infinity);
    const previousCoin = new Array(amount + 1).fill(-1);
    dp[0] = 0;

    for (let value = 1; value <= amount; value += 1) {
        for (const coin of coins) {
            if (coin <= value && dp[value - coin] + 1 < dp[value]) {
                dp[value] = dp[value - coin] + 1;
                previousCoin[value] = coin;
            }
        }
    }

    if (dp[amount] === Infinity) {
        return {
            minCoins: -1,
            combination: [],
        };
    }

    const combination = [];
    let currentAmount = amount;

    while (currentAmount > 0) {
        const coin = previousCoin[currentAmount];
        combination.push(coin);
        currentAmount -= coin;
    }

    return {
        minCoins: dp[amount],
        combination,
    };
};

module.exports = coinChange;
