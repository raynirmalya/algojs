const assignmentBitmaskDP = (costs) => {
    if (!Array.isArray(costs) || costs.length === 0 || costs.some((row) => !Array.isArray(row) || row.length !== costs.length)) {
        throw new TypeError("assignmentBitmaskDP expects a non-empty square cost matrix.");
    }

    const size = costs.length;
    const totalMasks = 1 << size;
    const dp = new Array(totalMasks).fill(Infinity);
    const parent = new Array(totalMasks).fill(-1);
    dp[0] = 0;

    for (let mask = 0; mask < totalMasks; mask += 1) {
        const worker = mask.toString(2).split("0").join("").length;

        for (let job = 0; job < size; job += 1) {
            if (mask & (1 << job)) {
                continue;
            }

            const nextMask = mask | (1 << job);
            const candidate = dp[mask] + costs[worker][job];

            if (candidate < dp[nextMask]) {
                dp[nextMask] = candidate;
                parent[nextMask] = job;
            }
        }
    }

    const assignment = new Array(size).fill(-1);
    let mask = totalMasks - 1;

    for (let worker = size - 1; worker >= 0; worker -= 1) {
        assignment[worker] = parent[mask];
        mask ^= 1 << assignment[worker];
    }

    return {
        minCost: dp[totalMasks - 1],
        assignment,
    };
};

module.exports = assignmentBitmaskDP;
