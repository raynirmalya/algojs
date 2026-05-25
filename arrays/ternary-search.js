const ternarySearch = (values, target) => {
    if (!Array.isArray(values)) {
        throw new TypeError("ternarySearch expects a sorted array.");
    }

    let left = 0;
    let right = values.length - 1;

    while (left <= right) {
        const third = Math.floor((right - left) / 3);
        const middleLeft = left + third;
        const middleRight = right - third;

        if (values[middleLeft] === target) {
            return middleLeft;
        }

        if (values[middleRight] === target) {
            return middleRight;
        }

        if (target < values[middleLeft]) {
            right = middleLeft - 1;
        } else if (target > values[middleRight]) {
            left = middleRight + 1;
        } else {
            left = middleLeft + 1;
            right = middleRight - 1;
        }
    }

    return -1;
};

module.exports = ternarySearch;
