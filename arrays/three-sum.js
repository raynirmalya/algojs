const threeSum = (values, target) => {
    if (!Array.isArray(values)) {
        throw new TypeError("threeSum expects an array.");
    }

    const sorted = values.slice().sort((first, second) => first - second);
    const results = [];

    for (let index = 0; index < sorted.length - 2; index += 1) {
        if (index > 0 && sorted[index] === sorted[index - 1]) {
            continue;
        }

        let left = index + 1;
        let right = sorted.length - 1;

        while (left < right) {
            const sum = sorted[index] + sorted[left] + sorted[right];

            if (sum === target) {
                results.push([sorted[index], sorted[left], sorted[right]]);
                left += 1;
                right -= 1;

                while (left < right && sorted[left] === sorted[left - 1]) {
                    left += 1;
                }

                while (left < right && sorted[right] === sorted[right + 1]) {
                    right -= 1;
                }
            } else if (sum < target) {
                left += 1;
            } else {
                right -= 1;
            }
        }
    }

    return results;
};

module.exports = threeSum;
