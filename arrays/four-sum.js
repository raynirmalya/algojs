const fourSum = (values, target) => {
    if (!Array.isArray(values)) {
        throw new TypeError("fourSum expects an array.");
    }

    const sorted = values.slice().sort((first, second) => first - second);
    const results = [];

    for (let first = 0; first < sorted.length - 3; first += 1) {
        if (first > 0 && sorted[first] === sorted[first - 1]) {
            continue;
        }

        for (let second = first + 1; second < sorted.length - 2; second += 1) {
            if (second > first + 1 && sorted[second] === sorted[second - 1]) {
                continue;
            }

            let left = second + 1;
            let right = sorted.length - 1;

            while (left < right) {
                const sum = sorted[first] + sorted[second] + sorted[left] + sorted[right];

                if (sum === target) {
                    results.push([sorted[first], sorted[second], sorted[left], sorted[right]]);
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
    }

    return results;
};

module.exports = fourSum;
