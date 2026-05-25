const duvalLyndonFactorization = (text) => {
    if (typeof text !== "string") {
        throw new TypeError("duvalLyndonFactorization expects a string.");
    }

    const factors = [];
    let index = 0;

    while (index < text.length) {
        let left = index;
        let right = index + 1;
        let cursor = index;

        while (right < text.length && text[cursor] <= text[right]) {
            if (text[cursor] < text[right]) {
                cursor = left;
            } else {
                cursor += 1;
            }

            right += 1;
        }

        const factorLength = right - cursor;

        while (left <= cursor) {
            factors.push(text.slice(left, left + factorLength));
            left += factorLength;
        }

        index = left;
    }

    return factors;
};

module.exports = duvalLyndonFactorization;
