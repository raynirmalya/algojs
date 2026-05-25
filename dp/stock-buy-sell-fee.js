const stockBuySellFee = (prices, fee) => {
    if (!Array.isArray(prices) || typeof fee !== "number") {
        throw new TypeError("stockBuySellFee expects a price array and numeric fee.");
    }

    let hold = Number.NEGATIVE_INFINITY;
    let cash = 0;

    prices.forEach((price) => {
        hold = Math.max(hold, cash - price);
        cash = Math.max(cash, hold + price - fee);
    });

    return cash;
};

module.exports = stockBuySellFee;
