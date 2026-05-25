const activitySelection = (activities) => {
    if (!Array.isArray(activities)) {
        throw new TypeError("activitySelection expects an array of activities.");
    }

    const sorted = activities.slice().sort((first, second) => first.end - second.end);
    const selected = [];
    let lastEnd = Number.NEGATIVE_INFINITY;

    sorted.forEach((activity) => {
        if (activity.start >= lastEnd) {
            selected.push(activity);
            lastEnd = activity.end;
        }
    });

    return selected;
};

module.exports = activitySelection;
