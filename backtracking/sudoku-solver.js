const validateBoard = (board) => {
    return Array.isArray(board)
        && board.length === 9
        && board.every((row) => Array.isArray(row) && row.length === 9);
};

const sudokuSolver = (board) => {
    if (!validateBoard(board)) {
        throw new TypeError("sudokuSolver expects a 9x9 board.");
    }

    const grid = board.map((row) => row.slice());
    const rows = Array.from({ length: 9 }, () => new Set());
    const columns = Array.from({ length: 9 }, () => new Set());
    const boxes = Array.from({ length: 9 }, () => new Set());
    const empties = [];

    const getBox = (row, column) => Math.floor(row / 3) * 3 + Math.floor(column / 3);

    for (let row = 0; row < 9; row += 1) {
        for (let column = 0; column < 9; column += 1) {
            const value = grid[row][column];

            if (value === 0) {
                empties.push([row, column]);
                continue;
            }

            rows[row].add(value);
            columns[column].add(value);
            boxes[getBox(row, column)].add(value);
        }
    }

    const solve = (index) => {
        if (index === empties.length) {
            return true;
        }

        let bestIndex = index;
        let bestCandidates = null;

        for (let pointer = index; pointer < empties.length; pointer += 1) {
            const [row, column] = empties[pointer];
            const box = getBox(row, column);
            const candidates = [];

            for (let digit = 1; digit <= 9; digit += 1) {
                if (!rows[row].has(digit) && !columns[column].has(digit) && !boxes[box].has(digit)) {
                    candidates.push(digit);
                }
            }

            if (bestCandidates === null || candidates.length < bestCandidates.length) {
                bestCandidates = candidates;
                bestIndex = pointer;
            }

            if (bestCandidates.length <= 1) {
                break;
            }
        }

        if (!bestCandidates || bestCandidates.length === 0) {
            return false;
        }

        [empties[index], empties[bestIndex]] = [empties[bestIndex], empties[index]];

        const [row, column] = empties[index];
        const box = getBox(row, column);

        for (const digit of bestCandidates) {
            if (rows[row].has(digit) || columns[column].has(digit) || boxes[box].has(digit)) {
                continue;
            }

            grid[row][column] = digit;
            rows[row].add(digit);
            columns[column].add(digit);
            boxes[box].add(digit);

            if (solve(index + 1)) {
                return true;
            }

            boxes[box].delete(digit);
            columns[column].delete(digit);
            rows[row].delete(digit);
            grid[row][column] = 0;
        }

        return false;
    };

    return solve(0) ? grid : null;
};

module.exports = sudokuSolver;
