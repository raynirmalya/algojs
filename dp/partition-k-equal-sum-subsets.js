const partitionKEqualSumSubsets = (values, groups) => {
    if (!Array.isArray(values) || !Number.isInteger(groups) || groups <= 0) {
        throw new TypeError("partitionKEqualSumSubsets expects an array and a positive group count.");
    }

    const total = values.reduce((sum, value) => sum + value, 0);

    if (total % groups !== 0) {
        return false;
    }

    const target = total / groups;
    const sorted = values.slice().sort((first, second) => second - first);
    const buckets = new Array(groups).fill(0);

    const backtrack = (index) => {
        if (index === sorted.length) {
            return buckets.every((bucket) => bucket === target);
        }

        for (let bucket = 0; bucket < groups; bucket += 1) {
            if (buckets[bucket] + sorted[index] > target) {
                continue;
            }

            buckets[bucket] += sorted[index];

            if (backtrack(index + 1)) {
                return true;
            }

            buckets[bucket] -= sorted[index];

            if (buckets[bucket] === 0) {
                break;
            }
        }

        return false;
    };

    return backtrack(0);
};

module.exports = partitionKEqualSumSubsets;
