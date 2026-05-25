const stockBuySellKTransactions = (prices, transactions) => {
    if (!Array.isArray(prices) || !Number.isInteger(transactions) || transactions < 0) {
        throw new TypeError("stockBuySellKTransactions expects a price array and non-negative transaction count.");
    }

    if (transactions === 0 || prices.length === 0) {
        return 0;
    }

    if (transactions >= Math.floor(prices.length / 2)) {
        let profit = 0;

        for (let index = 1; index < prices.length; index += 1) {
            profit += Math.max(0, prices[index] - prices[index - 1]);
        }

        return profit;
    }

    const dp = Array.from({ length: transactions + 1 }, () => new Array(prices.length).fill(0));

    for (let count = 1; count <= transactions; count += 1) {
        let best = -prices[0];

        for (let day = 1; day < prices.length; day += 1) {
            dp[count][day] = Math.max(dp[count][day - 1], prices[day] + best);
            best = Math.max(best, dp[count - 1][day] - prices[day]);
        }
    }

    return dp[transactions][prices.length - 1];
};

module.exports = stockBuySellKTransactions;
