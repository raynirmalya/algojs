const boothMinimalRotation = (text) => {
    if (typeof text !== "string") {
        throw new TypeError("boothMinimalRotation expects a string.");
    }

    if (text.length === 0) {
        return {
            index: 0,
            rotation: "",
        };
    }

    const doubled = text + text;
    let first = 0;
    let second = 1;
    let offset = 0;

    while (first < text.length && second < text.length && offset < text.length) {
        const left = doubled[first + offset];
        const right = doubled[second + offset];

        if (left === right) {
            offset += 1;
            continue;
        }

        if (left > right) {
            first = first + offset + 1;

            if (first <= second) {
                first = second + 1;
            }
        } else {
            second = second + offset + 1;

            if (second <= first) {
                second = first + 1;
            }
        }

        offset = 0;
    }

    const index = Math.min(first, second);

    return {
        index,
        rotation: doubled.slice(index, index + text.length),
    };
};

module.exports = boothMinimalRotation;
