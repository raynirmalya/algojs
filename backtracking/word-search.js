const wordSearch = (board, word) => {
    if (!Array.isArray(board) || board.length === 0 || !Array.isArray(board[0]) || typeof word !== "string") {
        throw new TypeError("wordSearch expects a board and a string word.");
    }

    const rows = board.length;
    const columns = board[0].length;
    const visited = Array.from({ length: rows }, () => new Array(columns).fill(false));

    const search = (row, column, index) => {
        if (index === word.length) {
            return true;
        }

        if (
            row < 0 ||
            column < 0 ||
            row >= rows ||
            column >= columns ||
            visited[row][column] ||
            board[row][column] !== word[index]
        ) {
            return false;
        }

        visited[row][column] = true;

        const found =
            search(row + 1, column, index + 1) ||
            search(row - 1, column, index + 1) ||
            search(row, column + 1, index + 1) ||
            search(row, column - 1, index + 1);

        visited[row][column] = false;
        return found;
    };

    for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
            if (search(row, column, 0)) {
                return true;
            }
        }
    }

    return false;
};

module.exports = wordSearch;
