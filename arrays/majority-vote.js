const majorityVote = (values) => {
    if (!Array.isArray(values)) {
        throw new TypeError("majorityVote expects an array.");
    }

    let candidate = null;
    let balance = 0;

    values.forEach((value) => {
        if (balance === 0) {
            candidate = value;
            balance = 1;
            return;
        }

        balance += value === candidate ? 1 : -1;
    });

    if (candidate === null) {
        return null;
    }

    const occurrences = values.reduce((count, value) => count + (value === candidate ? 1 : 0), 0);
    return occurrences > values.length / 2 ? candidate : null;
};

module.exports = majorityVote;
