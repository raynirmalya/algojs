const convexHullMonotoneChain = require("./convex-hull-monotone-chain");

const distanceSquared = (first, second) =>
    ((first.x - second.x) ** 2) + ((first.y - second.y) ** 2);

const areaTwice = (first, second, third) =>
    Math.abs(((second.x - first.x) * (third.y - first.y)) - ((second.y - first.y) * (third.x - first.x)));

const rotatingCalipersDiameter = (points) => {
    if (!Array.isArray(points) || points.length < 2) {
        throw new TypeError("rotatingCalipersDiameter expects at least two points.");
    }

    const hull = convexHullMonotoneChain(points);

    if (hull.length === 2) {
        return {
            distance: Math.sqrt(distanceSquared(hull[0], hull[1])),
            pair: hull,
        };
    }

    let best = { distance: 0, pair: [] };
    let j = 1;

    for (let i = 0; i < hull.length; i += 1) {
        const nextI = (i + 1) % hull.length;

        while (
            areaTwice(hull[i], hull[nextI], hull[(j + 1) % hull.length]) >
            areaTwice(hull[i], hull[nextI], hull[j])
        ) {
            j = (j + 1) % hull.length;
        }

        const currentDistance = distanceSquared(hull[i], hull[j]);

        if (currentDistance > best.distance) {
            best = {
                distance: currentDistance,
                pair: [hull[i], hull[j]],
            };
        }
    }

    return {
        distance: Math.sqrt(best.distance),
        pair: best.pair,
    };
};

module.exports = rotatingCalipersDiameter;
