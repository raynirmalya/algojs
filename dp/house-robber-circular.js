const houseRobber = require("./house-robber");

const houseRobberCircular = (values) => {
    if (values.length <= 1) {
        return values[0] || 0;
    }

    return Math.max(
        houseRobber(values.slice(0, values.length - 1)),
        houseRobber(values.slice(1))
    );
};

module.exports = houseRobberCircular;
