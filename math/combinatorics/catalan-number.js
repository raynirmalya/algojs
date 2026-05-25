const binomialCoefficient = require("./binomial-coefficient");

const catalanNumber = (n) => {
    if (!Number.isInteger(n) || n < 0) {
        throw new TypeError("catalanNumber expects a non-negative integer.");
    }

    return binomialCoefficient(2 * n, n) / (n + 1);
};

module.exports = catalanNumber;
