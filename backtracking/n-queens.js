const nQueens = (size) => {
    if (!Number.isInteger(size) || size < 0) {
        throw new TypeError("nQueens expects a non-negative integer board size.");
    }

    if (size === 0) {
        return {
            count: 0,
            solutions: [],
        };
    }

    const solutions = [];
    const columns = new Set();
    const diagonals = new Set();
    const antiDiagonals = new Set();
    const placement = new Array(size).fill(-1);

    const buildBoard = () => placement.map((column) => {
        const row = new Array(size).fill(".");
        row[column] = "Q";
        return row.join("");
    });

    const backtrack = (row) => {
        if (row === size) {
            solutions.push(buildBoard());
            return;
        }

        for (let column = 0; column < size; column += 1) {
            const diagonal = row - column;
            const antiDiagonal = row + column;

            if (columns.has(column) || diagonals.has(diagonal) || antiDiagonals.has(antiDiagonal)) {
                continue;
            }

            placement[row] = column;
            columns.add(column);
            diagonals.add(diagonal);
            antiDiagonals.add(antiDiagonal);

            backtrack(row + 1);

            antiDiagonals.delete(antiDiagonal);
            diagonals.delete(diagonal);
            columns.delete(column);
            placement[row] = -1;
        }
    };

    backtrack(0);

    return {
        count: solutions.length,
        solutions,
    };
};

module.exports = nQueens;
