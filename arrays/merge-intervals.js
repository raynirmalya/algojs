const mergeIntervals = (intervals) => {
    if (!Array.isArray(intervals)) {
        throw new TypeError("mergeIntervals expects an array of intervals.");
    }

    if (intervals.length === 0) {
        return [];
    }

    const sorted = intervals
        .map((interval) => ({ start: interval.start, end: interval.end }))
        .sort((first, second) => first.start - second.start || first.end - second.end);
    const merged = [sorted[0]];

    for (let index = 1; index < sorted.length; index += 1) {
        const current = sorted[index];
        const last = merged[merged.length - 1];

        if (current.start <= last.end) {
            last.end = Math.max(last.end, current.end);
        } else {
            merged.push(current);
        }
    }

    return merged;
};

module.exports = mergeIntervals;
