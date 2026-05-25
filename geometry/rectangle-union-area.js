const rectangleUnionArea = (rectangles) => {
    if (!Array.isArray(rectangles)) {
        throw new TypeError("rectangleUnionArea expects an array of rectangles.");
    }

    const events = [];

    rectangles.forEach(({ x1, y1, x2, y2 }) => {
        events.push({ x: x1, type: 1, y1, y2 });
        events.push({ x: x2, type: -1, y1, y2 });
    });

    events.sort((first, second) => first.x - second.x);
    let previousX = events.length > 0 ? events[0].x : 0;
    let area = 0;
    const active = [];

    const unionLength = () => {
        if (active.length === 0) {
            return 0;
        }

        const intervals = active.slice().sort((first, second) => first.y1 - second.y1);
        let length = 0;
        let start = intervals[0].y1;
        let end = intervals[0].y2;

        for (let index = 1; index < intervals.length; index += 1) {
            if (intervals[index].y1 <= end) {
                end = Math.max(end, intervals[index].y2);
            } else {
                length += end - start;
                start = intervals[index].y1;
                end = intervals[index].y2;
            }
        }

        return length + (end - start);
    };

    events.forEach((event) => {
        area += unionLength() * (event.x - previousX);
        previousX = event.x;

        if (event.type === 1) {
            active.push(event);
        } else {
            const index = active.findIndex((entry) => entry.y1 === event.y1 && entry.y2 === event.y2);
            if (index >= 0) {
                active.splice(index, 1);
            }
        }
    });

    return area;
};

module.exports = rectangleUnionArea;
