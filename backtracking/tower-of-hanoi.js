const towerOfHanoi = (disks, from, to, auxiliary) => {
    if (!Number.isInteger(disks) || disks < 0) {
        throw new TypeError("towerOfHanoi expects a non-negative integer number of disks.");
    }

    const source = from || "A";
    const destination = to || "C";
    const spare = auxiliary || "B";
    const moves = [];

    const move = (count, start, end, extra) => {
        if (count === 0) {
            return;
        }

        move(count - 1, start, extra, end);
        moves.push([start, end]);
        move(count - 1, extra, end, start);
    };

    move(disks, source, destination, spare);
    return moves;
};

module.exports = towerOfHanoi;
