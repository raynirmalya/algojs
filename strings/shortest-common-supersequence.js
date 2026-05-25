const shortestCommonSupersequence = (firstText, secondText) => {
    const rows = firstText.length + 1;
    const columns = secondText.length + 1;
    const dp = Array.from({ length: rows }, () => new Array(columns).fill(0));

    for (let row = 1; row < rows; row += 1) {
        for (let column = 1; column < columns; column += 1) {
            if (firstText[row - 1] === secondText[column - 1]) {
                dp[row][column] = dp[row - 1][column - 1] + 1;
            } else {
                dp[row][column] = Math.max(dp[row - 1][column], dp[row][column - 1]);
            }
        }
    }

    const sequence = [];
    let row = firstText.length;
    let column = secondText.length;

    while (row > 0 && column > 0) {
        if (firstText[row - 1] === secondText[column - 1]) {
            sequence.push(firstText[row - 1]);
            row -= 1;
            column -= 1;
        } else if (dp[row - 1][column] >= dp[row][column - 1]) {
            sequence.push(firstText[row - 1]);
            row -= 1;
        } else {
            sequence.push(secondText[column - 1]);
            column -= 1;
        }
    }

    while (row > 0) {
        sequence.push(firstText[row - 1]);
        row -= 1;
    }

    while (column > 0) {
        sequence.push(secondText[column - 1]);
        column -= 1;
    }

    sequence.reverse();

    return {
        length: sequence.length,
        sequence: sequence.join(""),
    };
};

module.exports = shortestCommonSupersequence;
