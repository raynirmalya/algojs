const smithWaterman = (firstText, secondText, options) => {
    const settings = options || {};
    const match = settings.match || 2;
    const mismatch = settings.mismatch || -1;
    const gap = settings.gap || -1;
    const rows = firstText.length + 1;
    const columns = secondText.length + 1;
    const score = Array.from({ length: rows }, () => new Array(columns).fill(0));

    let bestScore = 0;
    let bestRow = 0;
    let bestColumn = 0;

    for (let row = 1; row < rows; row += 1) {
        for (let column = 1; column < columns; column += 1) {
            const diagonal = score[row - 1][column - 1] + (firstText[row - 1] === secondText[column - 1] ? match : mismatch);
            const up = score[row - 1][column] + gap;
            const left = score[row][column - 1] + gap;
            score[row][column] = Math.max(0, diagonal, up, left);

            if (score[row][column] > bestScore) {
                bestScore = score[row][column];
                bestRow = row;
                bestColumn = column;
            }
        }
    }

    const alignmentFirst = [];
    const alignmentSecond = [];
    let row = bestRow;
    let column = bestColumn;

    while (row > 0 && column > 0 && score[row][column] > 0) {
        const current = score[row][column];
        const diagonalScore = score[row - 1][column - 1] + (firstText[row - 1] === secondText[column - 1] ? match : mismatch);

        if (current === diagonalScore) {
            alignmentFirst.push(firstText[row - 1]);
            alignmentSecond.push(secondText[column - 1]);
            row -= 1;
            column -= 1;
        } else if (current === score[row - 1][column] + gap) {
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
        score: bestScore,
        alignmentA: alignmentFirst.reverse().join(""),
        alignmentB: alignmentSecond.reverse().join(""),
    };
};

module.exports = smithWaterman;
