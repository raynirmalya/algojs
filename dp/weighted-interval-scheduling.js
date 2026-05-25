const weightedIntervalScheduling = (intervals) => {
    if (!Array.isArray(intervals)) {
        throw new TypeError("weightedIntervalScheduling expects an array of intervals.");
    }

    const items = intervals
        .map((interval, index) => ({ ...interval, originalIndex: index }))
        .sort((first, second) => first.end - second.end);

    const previousCompatible = new Array(items.length).fill(-1);

    for (let index = 0; index < items.length; index += 1) {
        let left = 0;
        let right = index - 1;
        let answer = -1;

        while (left <= right) {
            const middle = Math.floor((left + right) / 2);

            if (items[middle].end <= items[index].start) {
                answer = middle;
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }

        previousCompatible[index] = answer;
    }

    const dp = new Array(items.length).fill(0);

    for (let index = 0; index < items.length; index += 1) {
        const include =
            items[index].weight + (previousCompatible[index] >= 0 ? dp[previousCompatible[index]] : 0);
        const exclude = index > 0 ? dp[index - 1] : 0;
        dp[index] = Math.max(include, exclude);
    }

    const selectedIntervals = [];
    let index = items.length - 1;

    while (index >= 0) {
        const include =
            items[index].weight + (previousCompatible[index] >= 0 ? dp[previousCompatible[index]] : 0);
        const exclude = index > 0 ? dp[index - 1] : 0;

        if (include >= exclude) {
            selectedIntervals.push(items[index]);
            index = previousCompatible[index];
        } else {
            index -= 1;
        }
    }

    selectedIntervals.reverse();

    return {
        maxWeight: items.length === 0 ? 0 : dp[items.length - 1],
        selectedIntervals,
    };
};

module.exports = weightedIntervalScheduling;
