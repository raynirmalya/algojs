const inferDimensions = (point, dimensions) => {
    if (Array.isArray(dimensions) && dimensions.length > 0) {
        return dimensions.slice();
    }

    if (Array.isArray(point)) {
        return Array.from({ length: point.length }, (_, index) => index);
    }

    return Object.keys(point);
};

class KDNode {
    constructor(point, axis) {
        this.point = point;
        this.axis = axis;
        this.left = null;
        this.right = null;
    }
}

class KDTree {
    constructor(points, dimensions) {
        const pointList = Array.isArray(points) ? points.slice() : [];
        this.dimensions = pointList.length > 0 ? inferDimensions(pointList[0], dimensions) : (Array.isArray(dimensions) ? dimensions.slice() : []);
        this.root = this.build(pointList, 0);
        this.count = pointList.length;
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.count === 0;
    }

    insert(point) {
        if (this.dimensions.length === 0) {
            this.dimensions = inferDimensions(point, this.dimensions);
        }

        this.root = this.insertNode(this.root, point, 0);
        this.count += 1;
        return this;
    }

    nearestNeighbor(target) {
        if (!this.root) {
            return null;
        }

        const best = this.nearest(this.root, target, {
            point: null,
            distance: Infinity,
        });

        return {
            point: best.point,
            distance: Math.sqrt(best.distance),
        };
    }

    rangeSearch(minPoint, maxPoint) {
        const result = [];
        this.collectRange(this.root, minPoint, maxPoint, result);
        return result;
    }

    build(points, depth) {
        if (points.length === 0) {
            return null;
        }

        const axis = depth % this.dimensions.length;
        const dimension = this.dimensions[axis];
        const sortedPoints = points.slice().sort((first, second) => this.coordinate(first, dimension) - this.coordinate(second, dimension));
        const middle = Math.floor(sortedPoints.length / 2);
        const node = new KDNode(sortedPoints[middle], axis);

        node.left = this.build(sortedPoints.slice(0, middle), depth + 1);
        node.right = this.build(sortedPoints.slice(middle + 1), depth + 1);

        return node;
    }

    insertNode(node, point, depth) {
        if (!node) {
            return new KDNode(point, depth % this.dimensions.length);
        }

        const dimension = this.dimensions[node.axis];

        if (this.coordinate(point, dimension) < this.coordinate(node.point, dimension)) {
            node.left = this.insertNode(node.left, point, depth + 1);
        } else {
            node.right = this.insertNode(node.right, point, depth + 1);
        }

        return node;
    }

    nearest(node, target, best) {
        if (!node) {
            return best;
        }

        const nodeDistance = this.distanceSquared(node.point, target);
        let bestMatch = nodeDistance < best.distance
            ? { point: node.point, distance: nodeDistance }
            : best;

        const dimension = this.dimensions[node.axis];
        const delta = this.coordinate(target, dimension) - this.coordinate(node.point, dimension);
        const primary = delta < 0 ? node.left : node.right;
        const secondary = delta < 0 ? node.right : node.left;

        bestMatch = this.nearest(primary, target, bestMatch);

        if ((delta * delta) < bestMatch.distance) {
            bestMatch = this.nearest(secondary, target, bestMatch);
        }

        return bestMatch;
    }

    collectRange(node, minPoint, maxPoint, result) {
        if (!node) {
            return;
        }

        if (this.inRange(node.point, minPoint, maxPoint)) {
            result.push(node.point);
        }

        const dimension = this.dimensions[node.axis];
        const pointValue = this.coordinate(node.point, dimension);

        if (this.coordinate(minPoint, dimension) <= pointValue) {
            this.collectRange(node.left, minPoint, maxPoint, result);
        }

        if (this.coordinate(maxPoint, dimension) >= pointValue) {
            this.collectRange(node.right, minPoint, maxPoint, result);
        }
    }

    coordinate(point, dimension) {
        return Array.isArray(point) ? point[dimension] : point[dimension];
    }

    distanceSquared(firstPoint, secondPoint) {
        return this.dimensions.reduce((total, dimension) => {
            const delta = this.coordinate(firstPoint, dimension) - this.coordinate(secondPoint, dimension);
            return total + (delta * delta);
        }, 0);
    }

    inRange(point, minPoint, maxPoint) {
        return this.dimensions.every((dimension) => {
            const value = this.coordinate(point, dimension);
            return value >= this.coordinate(minPoint, dimension) && value <= this.coordinate(maxPoint, dimension);
        });
    }
}

module.exports = KDTree;
