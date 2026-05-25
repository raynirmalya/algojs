const orientation = (first, second, third) => {
    const value = (second.y - first.y) * (third.x - second.x) - (second.x - first.x) * (third.y - second.y);

    if (Math.abs(value) < 1e-12) {
        return 0;
    }

    return value > 0 ? 1 : 2;
};

const onSegment = (first, second, third) =>
    second.x <= Math.max(first.x, third.x) &&
    second.x >= Math.min(first.x, third.x) &&
    second.y <= Math.max(first.y, third.y) &&
    second.y >= Math.min(first.y, third.y);

const lineSegmentIntersection = (firstStart, firstEnd, secondStart, secondEnd) => {
    const o1 = orientation(firstStart, firstEnd, secondStart);
    const o2 = orientation(firstStart, firstEnd, secondEnd);
    const o3 = orientation(secondStart, secondEnd, firstStart);
    const o4 = orientation(secondStart, secondEnd, firstEnd);

    const intersects =
        (o1 !== o2 && o3 !== o4) ||
        (o1 === 0 && onSegment(firstStart, secondStart, firstEnd)) ||
        (o2 === 0 && onSegment(firstStart, secondEnd, firstEnd)) ||
        (o3 === 0 && onSegment(secondStart, firstStart, secondEnd)) ||
        (o4 === 0 && onSegment(secondStart, firstEnd, secondEnd));

    return { intersects };
};

module.exports = lineSegmentIntersection;
