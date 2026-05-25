class FenwickTree2D {
    constructor(rows, columns) {
        if (!Number.isInteger(rows) || !Number.isInteger(columns) || rows <= 0 || columns <= 0) {
            throw new TypeError("FenwickTree2D expects positive row and column counts.");
        }

        this.rows = rows;
        this.columns = columns;
        this.tree = Array.from({ length: rows + 1 }, () => new Array(columns + 1).fill(0));
        this.values = Array.from({ length: rows }, () => new Array(columns).fill(0));
    }

    update(row, column, delta) {
        this.assertCell(row, column);
        this.values[row][column] += delta;

        for (let currentRow = row + 1; currentRow <= this.rows; currentRow += currentRow & -currentRow) {
            for (let currentColumn = column + 1; currentColumn <= this.columns; currentColumn += currentColumn & -currentColumn) {
                this.tree[currentRow][currentColumn] += delta;
            }
        }

        return this.prefixQuery(row, column);
    }

    set(row, column, value) {
        this.assertCell(row, column);
        return this.update(row, column, value - this.values[row][column]);
    }

    prefixQuery(row, column) {
        this.assertCell(row, column);
        let sum = 0;

        for (let currentRow = row + 1; currentRow > 0; currentRow -= currentRow & -currentRow) {
            for (let currentColumn = column + 1; currentColumn > 0; currentColumn -= currentColumn & -currentColumn) {
                sum += this.tree[currentRow][currentColumn];
            }
        }

        return sum;
    }

    rangeQuery(top, left, bottom, right) {
        if (top > bottom || left > right) {
            throw new RangeError("Invalid FenwickTree2D range.");
        }

        const total = this.prefixQuery(bottom, right);
        const above = top === 0 ? 0 : this.prefixQuery(top - 1, right);
        const before = left === 0 ? 0 : this.prefixQuery(bottom, left - 1);
        const overlap = top === 0 || left === 0 ? 0 : this.prefixQuery(top - 1, left - 1);
        return total - above - before + overlap;
    }

    assertCell(row, column) {
        if (!Number.isInteger(row) || !Number.isInteger(column) || row < 0 || column < 0 || row >= this.rows || column >= this.columns) {
            throw new RangeError("FenwickTree2D cell is out of bounds.");
        }
    }
}

module.exports = FenwickTree2D;
