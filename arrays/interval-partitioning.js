const intervalPartitioning = (intervals) => {
    if (!Array.isArray(intervals)) {
        throw new TypeError("intervalPartitioning expects an array of intervals.");
    }

    const sorted = intervals
        .map((interval) => ({ ...interval }))
        .sort((first, second) => first.start - second.start || first.end - second.end);
    const rooms = [];

    sorted.forEach((interval) => {
        let placed = false;

        for (let roomIndex = 0; roomIndex < rooms.length; roomIndex += 1) {
            const room = rooms[roomIndex];
            const last = room[room.length - 1];

            if (last.end <= interval.start) {
                room.push(interval);
                interval.room = roomIndex;
                placed = true;
                break;
            }
        }

        if (!placed) {
            interval.room = rooms.length;
            rooms.push([interval]);
        }
    });

    return {
        roomCount: rooms.length,
        rooms,
    };
};

module.exports = intervalPartitioning;
