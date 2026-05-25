const ratInMaze = (maze) => {
    if (!Array.isArray(maze) || maze.length === 0 || !Array.isArray(maze[0])) {
        throw new TypeError("ratInMaze expects a non-empty grid.");
    }

    const rows = maze.length;
    const columns = maze[0].length;
    const visited = Array.from({ length: rows }, () => new Array(columns).fill(false));
    const path = [];
    const directions = [
        [1, 0, "D"],
        [0, 1, "R"],
        [-1, 0, "U"],
        [0, -1, "L"],
    ];

    const search = (row, column) => {
        if (
            row < 0 ||
            column < 0 ||
            row >= rows ||
            column >= columns ||
            maze[row][column] !== 1 ||
            visited[row][column]
        ) {
            return false;
        }

        if (row === rows - 1 && column === columns - 1) {
            return true;
        }

        visited[row][column] = true;

        for (const [rowDelta, columnDelta, move] of directions) {
            path.push(move);

            if (search(row + rowDelta, column + columnDelta)) {
                return true;
            }

            path.pop();
        }

        visited[row][column] = false;
        return false;
    };

    const found = search(0, 0);

    return {
        found,
        path: found ? path.join("") : "",
    };
};

module.exports = ratInMaze;
