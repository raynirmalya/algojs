const rodCutting = (prices, rodLength) => {
    if (!Array.isArray(prices) || prices.length === 0) {
        throw new TypeError("rodCutting expects a non-empty prices array.");
    }

    const length = rodLength === undefined ? prices.length : rodLength;
    const dp = new Array(length + 1).fill(0);
    const firstCut = new Array(length + 1).fill(0);

    for (let currentLength = 1; currentLength <= length; currentLength += 1) {
        for (let cut = 1; cut <= currentLength && cut <= prices.length; cut += 1) {
            const candidate = prices[cut - 1] + dp[currentLength - cut];

            if (candidate > dp[currentLength]) {
                dp[currentLength] = candidate;
                firstCut[currentLength] = cut;
            }
        }
    }

    const cuts = [];
    let remaining = length;

    while (remaining > 0) {
        cuts.push(firstCut[remaining]);
        remaining -= firstCut[remaining];
    }

    return {
        maxValue: dp[length],
        cuts,
    };
};

module.exports = rodCutting;
