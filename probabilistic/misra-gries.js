const misraGries = (values, capacity) => {
    if (!Array.isArray(values) || !Number.isInteger(capacity) || capacity < 2) {
        throw new TypeError("misraGries expects an array and a capacity of at least 2.");
    }

    const counters = new Map();

    values.forEach((value) => {
        if (counters.has(value)) {
            counters.set(value, counters.get(value) + 1);
            return;
        }

        if (counters.size < capacity - 1) {
            counters.set(value, 1);
            return;
        }

        Array.from(counters.keys()).forEach((key) => {
            const next = counters.get(key) - 1;

            if (next === 0) {
                counters.delete(key);
            } else {
                counters.set(key, next);
            }
        });
    });

    return counters;
};

module.exports = misraGries;
