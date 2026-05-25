const skylineProblem = (buildings) => {
    if (!Array.isArray(buildings)) {
        throw new TypeError("skylineProblem expects an array of buildings.");
    }

    const events = [];

    buildings.forEach(({ left, right, height }) => {
        events.push({ x: left, height: -height });
        events.push({ x: right, height });
    });

    events.sort((first, second) => first.x - second.x || first.height - second.height);

    const heights = new Map([[0, 1]]);
    const active = [0];
    const result = [];

    const currentMax = () => Math.max(...heights.keys());

    events.forEach(({ x, height }) => {
        const previous = currentMax();

        if (height < 0) {
            heights.set(-height, (heights.get(-height) || 0) + 1);
        } else {
            const count = heights.get(height) - 1;
            if (count === 0) {
                heights.delete(height);
            } else {
                heights.set(height, count);
            }
        }

        const next = currentMax();

        if (previous !== next) {
            result.push([x, next]);
        }
    });

    return result;
};

module.exports = skylineProblem;
