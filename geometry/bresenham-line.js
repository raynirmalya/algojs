const bresenhamLine = (x0, y0, x1, y1) => {
    if (![x0, y0, x1, y1].every(Number.isInteger)) {
        throw new TypeError("bresenhamLine expects integer coordinates.");
    }

    const points = [];
    const deltaX = Math.abs(x1 - x0);
    const deltaY = Math.abs(y1 - y0);
    const stepX = x0 < x1 ? 1 : -1;
    const stepY = y0 < y1 ? 1 : -1;
    let error = deltaX - deltaY;
    let currentX = x0;
    let currentY = y0;

    while (true) {
        points.push({ x: currentX, y: currentY });

        if (currentX === x1 && currentY === y1) {
            break;
        }

        const doubled = error * 2;

        if (doubled > -deltaY) {
            error -= deltaY;
            currentX += stepX;
        }

        if (doubled < deltaX) {
            error += deltaX;
            currentY += stepY;
        }
    }

    return points;
};

module.exports = bresenhamLine;
