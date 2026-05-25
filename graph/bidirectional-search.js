const { assertGraph, normalizeNeighbors } = require("./utils");

const buildPath = (meeting, parentFromStart, parentFromGoal) => {
    const left = [];
    let current = meeting;

    while (current !== null) {
        left.push(current);
        current = parentFromStart.get(current);
    }

    left.reverse();

    const right = [];
    current = parentFromGoal.get(meeting);

    while (current !== null) {
        right.push(current);
        current = parentFromGoal.get(current);
    }

    return left.concat(right);
};

const expandFrontier = (graph, frontier, visitedSelf, visitedOther, parentsSelf) => {
    const nextFrontier = [];

    frontier.forEach((vertex) => {
        normalizeNeighbors(graph.neighbors(vertex)).forEach((neighbor) => {
            if (visitedSelf.has(neighbor)) {
                return;
            }

            visitedSelf.add(neighbor);
            parentsSelf.set(neighbor, vertex);
            nextFrontier.push(neighbor);

            if (visitedOther.has(neighbor)) {
                nextFrontier.meeting = neighbor;
            }
        });
    });

    return nextFrontier;
};

const bidirectionalSearch = (graph, startVertex, goalVertex) => {
    assertGraph(graph, "bidirectionalSearch");

    if (!graph.hasVertex(startVertex) || !graph.hasVertex(goalVertex)) {
        return {
            found: false,
            path: [],
        };
    }

    if (startVertex === goalVertex) {
        return {
            found: true,
            path: [startVertex],
        };
    }

    let frontierStart = [startVertex];
    let frontierGoal = [goalVertex];
    const visitedStart = new Set([startVertex]);
    const visitedGoal = new Set([goalVertex]);
    const parentFromStart = new Map([[startVertex, null]]);
    const parentFromGoal = new Map([[goalVertex, null]]);

    while (frontierStart.length > 0 && frontierGoal.length > 0) {
        const expandedStart = expandFrontier(
            graph,
            frontierStart,
            visitedStart,
            visitedGoal,
            parentFromStart
        );

        if (expandedStart.meeting) {
            return {
                found: true,
                path: buildPath(expandedStart.meeting, parentFromStart, parentFromGoal),
            };
        }

        frontierStart = expandedStart;

        const expandedGoal = expandFrontier(
            graph,
            frontierGoal,
            visitedGoal,
            visitedStart,
            parentFromGoal
        );

        if (expandedGoal.meeting) {
            return {
                found: true,
                path: buildPath(expandedGoal.meeting, parentFromStart, parentFromGoal),
            };
        }

        frontierGoal = expandedGoal;
    }

    return {
        found: false,
        path: [],
    };
};

module.exports = bidirectionalSearch;
