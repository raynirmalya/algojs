const needlemanWunsch = (firstText, secondText, options) => {
    const settings = options || {};
    const match = settings.match || 1;
    const mismatch = settings.mismatch || -1;
    const gap = settings.gap || -1;
    const rows = firstText.length + 1;
    const columns = secondText.length + 1;
    const score = Array.from({ length: rows }, () => new Array(columns).fill(0));

    for (let row = 1; row < rows; row += 1) {
        score[row][0] = row * gap;
    }

    for (let column = 1; column < columns; column += 1) {
        score[0][column] = column * gap;
    }

    for (let row = 1; row < rows; row += 1) {
        for (let column = 1; column < columns; column += 1) {
            score[row][column] = Math.max(
                score[row - 1][column - 1] + (firstText[row - 1] === secondText[column - 1] ? match : mismatch),
                score[row - 1][column] + gap,
                score[row][column - 1] + gap
            );
        }
    }

    const alignmentFirst = [];
    const alignmentSecond = [];
    let row = firstText.length;
    let column = secondText.length;

    while (row > 0 || column > 0) {
        if (
            row > 0 &&
            column > 0 &&
            score[row][column] === score[row - 1][column - 1] + (firstText[row - 1] === secondText[column - 1] ? match : mismatch)
        ) {
            alignmentFirst.push(firstText[row - 1]);
            alignmentSecond.push(secondText[column - 1]);
            row -= 1;
            column -= 1;
        } else if (row > 0 && score[row][column] === score[row - 1][column] + gap) {
            alignmentFirst.push(firstText[row - 1]);
            alignmentSecond.push("-");
            row -= 1;
        } else {
            alignmentFirst.push("-");
            alignmentSecond.push(secondText[column - 1]);
            column -= 1;
        }
    }

    return {
        score: score[firstText.length][secondText.length],
        alignmentA: alignmentFirst.reverse().join(""),
        alignmentB: alignmentSecond.reverse().join(""),
    };
};

module.exports = needlemanWunsch;
