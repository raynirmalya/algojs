const minimumCostClimbingStairs = (costs) => {
    let first = 0;
    let second = 0;

    for (let index = 2; index <= costs.length; index += 1) {
        const current = Math.min(second + costs[index - 1], first + costs[index - 2]);
        first = second;
        second = current;
    }

    return second;
};

module.exports = minimumCostClimbingStairs;
