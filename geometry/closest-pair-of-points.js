const distance = (first, second) => Math.hypot(first.x - second.x, first.y - second.y);

const bruteForce = (points) => {
    let best = { distance: Infinity, pair: [] };

    for (let first = 0; first < points.length; first += 1) {
        for (let second = first + 1; second < points.length; second += 1) {
            const current = distance(points[first], points[second]);

            if (current < best.distance) {
                best = { distance: current, pair: [points[first], points[second]] };
            }
        }
    }

    return best;
};

const closestPairOfPoints = (points) => {
    if (!Array.isArray(points) || points.length < 2) {
        throw new TypeError("closestPairOfPoints expects at least two points.");
    }

    const byX = points.slice().sort((first, second) => first.x - second.x || first.y - second.y);

    const solve = (sorted) => {
        if (sorted.length <= 3) {
            return bruteForce(sorted);
        }

        const middle = Math.floor(sorted.length / 2);
        const left = solve(sorted.slice(0, middle));
        const right = solve(sorted.slice(middle));
        let best = left.distance < right.distance ? left : right;
        const midX = sorted[middle].x;
        const strip = sorted.filter((point) => Math.abs(point.x - midX) < best.distance).sort((first, second) => first.y - second.y);

        for (let first = 0; first < strip.length; first += 1) {
            for (let second = first + 1; second < strip.length && strip[second].y - strip[first].y < best.distance; second += 1) {
                const current = distance(strip[first], strip[second]);

                if (current < best.distance) {
                    best = { distance: current, pair: [strip[first], strip[second]] };
                }
            }
        }

        return best;
    };

    return solve(byX);
};

module.exports = closestPairOfPoints;
