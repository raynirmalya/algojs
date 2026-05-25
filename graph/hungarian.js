const hungarianAlgorithm = (costMatrix) => {
    if (!Array.isArray(costMatrix) || costMatrix.length === 0 || !costMatrix.every(Array.isArray)) {
        throw new TypeError("hungarianAlgorithm expects a non-empty 2D cost matrix.");
    }

    const rowCount = costMatrix.length;
    const columnCount = Math.max(...costMatrix.map((row) => row.length));
    const size = Math.max(rowCount, columnCount);
    const matrix = Array.from({ length: size + 1 }, () => new Array(size + 1).fill(0));

    for (let row = 0; row < rowCount; row += 1) {
        for (let column = 0; column < costMatrix[row].length; column += 1) {
            matrix[row + 1][column + 1] = costMatrix[row][column];
        }
    }

    const potentialRows = new Array(size + 1).fill(0);
    const potentialColumns = new Array(size + 1).fill(0);
    const matchedColumnByRow = new Array(size + 1).fill(0);
    const previousColumn = new Array(size + 1).fill(0);

    for (let row = 1; row <= size; row += 1) {
        matchedColumnByRow[0] = row;
        let currentColumn = 0;
        const minimum = new Array(size + 1).fill(Infinity);
        const used = new Array(size + 1).fill(false);

        do {
            used[currentColumn] = true;
            const currentRow = matchedColumnByRow[currentColumn];
            let delta = Infinity;
            let nextColumn = 0;

            for (let column = 1; column <= size; column += 1) {
                if (used[column]) {
                    continue;
                }

                const current = matrix[currentRow][column] - potentialRows[currentRow] - potentialColumns[column];

                if (current < minimum[column]) {
                    minimum[column] = current;
                    previousColumn[column] = currentColumn;
                }

                if (minimum[column] < delta) {
                    delta = minimum[column];
                    nextColumn = column;
                }
            }

            for (let column = 0; column <= size; column += 1) {
                if (used[column]) {
                    potentialRows[matchedColumnByRow[column]] += delta;
                    potentialColumns[column] -= delta;
                } else {
                    minimum[column] -= delta;
                }
            }

            currentColumn = nextColumn;
        } while (matchedColumnByRow[currentColumn] !== 0);

        do {
            const nextColumn = previousColumn[currentColumn];
            matchedColumnByRow[currentColumn] = matchedColumnByRow[nextColumn];
            currentColumn = nextColumn;
        } while (currentColumn !== 0);
    }

    const assignment = new Array(rowCount).fill(-1);

    for (let column = 1; column <= size; column += 1) {
        const row = matchedColumnByRow[column];

        if (row > 0 && row <= rowCount && column <= columnCount && column <= costMatrix[row - 1].length) {
            assignment[row - 1] = column - 1;
        }
    }

    const minCost = assignment.reduce((total, column, row) => (
        column === -1 ? total : total + costMatrix[row][column]
    ), 0);

    return {
        minCost,
        assignment,
    };
};

module.exports = hungarianAlgorithm;
