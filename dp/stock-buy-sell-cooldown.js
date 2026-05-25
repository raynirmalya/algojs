const stockBuySellCooldown = (prices) => {
    if (!Array.isArray(prices)) {
        throw new TypeError("stockBuySellCooldown expects an array.");
    }

    let hold = Number.NEGATIVE_INFINITY;
    let sold = 0;
    let rest = 0;

    prices.forEach((price) => {
        const previousSold = sold;
        sold = hold + price;
        hold = Math.max(hold, rest - price);
        rest = Math.max(rest, previousSold);
    });

    return Math.max(sold, rest);
};

module.exports = stockBuySellCooldown;
