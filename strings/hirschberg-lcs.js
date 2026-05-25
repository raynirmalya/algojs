const lcsLengths = (firstText, secondText) => {
    let previous = new Array(secondText.length + 1).fill(0);

    for (let row = 1; row <= firstText.length; row += 1) {
        const current = new Array(secondText.length + 1).fill(0);

        for (let column = 1; column <= secondText.length; column += 1) {
            if (firstText[row - 1] === secondText[column - 1]) {
                current[column] = previous[column - 1] + 1;
            } else {
                current[column] = Math.max(previous[column], current[column - 1]);
            }
        }

        previous = current;
    }

    return previous;
};

const hirschbergSequence = (firstText, secondText) => {
    if (firstText.length === 0 || secondText.length === 0) {
        return "";
    }

    if (firstText.length === 1) {
        return secondText.includes(firstText) ? firstText : "";
    }

    const split = Math.floor(firstText.length / 2);
    const left = firstText.slice(0, split);
    const right = firstText.slice(split);
    const leftLengths = lcsLengths(left, secondText);
    const rightLengths = lcsLengths(
        right.split("").reverse().join(""),
        secondText.split("").reverse().join("")
    );

    let bestIndex = 0;
    let bestScore = -1;

    for (let index = 0; index <= secondText.length; index += 1) {
        const score = leftLengths[index] + rightLengths[secondText.length - index];

        if (score > bestScore) {
            bestScore = score;
            bestIndex = index;
        }
    }

    return (
        hirschbergSequence(left, secondText.slice(0, bestIndex)) +
        hirschbergSequence(right, secondText.slice(bestIndex))
    );
};

const hirschbergLCS = (firstText, secondText) => {
    const sequence = hirschbergSequence(firstText, secondText);

    return {
        length: sequence.length,
        sequence,
    };
};

module.exports = hirschbergLCS;
