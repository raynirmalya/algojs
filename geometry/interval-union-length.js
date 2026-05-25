const intervalUnionLength = (intervals) => {
    if (!Array.isArray(intervals)) {
        throw new TypeError("intervalUnionLength expects an array of intervals.");
    }

    if (intervals.length === 0) {
        return 0;
    }

    const sorted = intervals.slice().sort((first, second) => first.start - second.start || first.end - second.end);
    let total = 0;
    let start = sorted[0].start;
    let end = sorted[0].end;

    for (let index = 1; index < sorted.length; index += 1) {
        if (sorted[index].start <= end) {
            end = Math.max(end, sorted[index].end);
        } else {
            total += end - start;
            start = sorted[index].start;
            end = sorted[index].end;
        }
    }

    return total + (end - start);
};

module.exports = intervalUnionLength;
