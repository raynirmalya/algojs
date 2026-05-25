const knightTour = (size, startRow, startColumn) => {
    if (!Number.isInteger(size) || size <= 0) {
        throw new TypeError("knightTour expects a positive board size.");
    }

    const moves = [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1],
    ];
    const board = Array.from({ length: size }, () => new Array(size).fill(-1));
    const path = [];
    const startR = startRow === undefined ? 0 : startRow;
    const startC = startColumn === undefined ? 0 : startColumn;

    const valid = (row, column) =>
        row >= 0 && column >= 0 && row < size && column < size && board[row][column] === -1;

    const onwardMoves = (row, column) =>
        moves.filter(([rowDelta, columnDelta]) => valid(row + rowDelta, column + columnDelta)).length;

    const tour = (row, column, step) => {
        board[row][column] = step;
        path.push([row, column]);

        if (step === size * size - 1) {
            return true;
        }

        const ordered = moves
            .map(([rowDelta, columnDelta]) => [row + rowDelta, column + columnDelta])
            .filter(([nextRow, nextColumn]) => valid(nextRow, nextColumn))
            .sort((first, second) => onwardMoves(first[0], first[1]) - onwardMoves(second[0], second[1]));

        for (const [nextRow, nextColumn] of ordered) {
            if (tour(nextRow, nextColumn, step + 1)) {
                return true;
            }
        }

        board[row][column] = -1;
        path.pop();
        return false;
    };

    const found = tour(startR, startC, 0);

    return {
        found,
        board: found ? board : null,
        path: found ? path : [],
    };
};

module.exports = knightTour;
