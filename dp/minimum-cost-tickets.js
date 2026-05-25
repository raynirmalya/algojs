const minimumCostTickets = (days, costs) => {
    if (!Array.isArray(days) || !Array.isArray(costs) || costs.length !== 3) {
        throw new TypeError("minimumCostTickets expects a travel days array and three ticket costs.");
    }

    const durations = [1, 7, 30];
    const daySet = new Set(days);
    const lastDay = days[days.length - 1] || 0;
    const dp = new Array(lastDay + 1).fill(0);

    for (let day = 1; day <= lastDay; day += 1) {
        if (!daySet.has(day)) {
            dp[day] = dp[day - 1];
            continue;
        }

        dp[day] = Math.min(
            dp[Math.max(0, day - durations[0])] + costs[0],
            dp[Math.max(0, day - durations[1])] + costs[1],
            dp[Math.max(0, day - durations[2])] + costs[2]
        );
    }

    return dp[lastDay];
};

module.exports = minimumCostTickets;
