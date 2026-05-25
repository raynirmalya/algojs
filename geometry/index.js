const shoelaceArea = require("./shoelace-area");
const pointInPolygon = require("./point-in-polygon");
const convexHullMonotoneChain = require("./convex-hull-monotone-chain");
const lineSegmentIntersection = require("./line-segment-intersection");
const bresenhamLine = require("./bresenham-line");
const grahamScan = require("./graham-scan");
const closestPairOfPoints = require("./closest-pair-of-points");
const polygonCentroid = require("./polygon-centroid");
const ramerDouglasPeucker = require("./ramer-douglas-peucker");
const midpointCircle = require("./midpoint-circle");
const deCasteljauBezier = require("./de-casteljau-bezier");
const skylineProblem = require("./skyline-problem");
const rectangleUnionArea = require("./rectangle-union-area");
const intervalUnionLength = require("./interval-union-length");
const rotatingCalipersDiameter = require("./rotating-calipers-diameter");

module.exports = {
    shoelaceArea,
    pointInPolygon,
    convexHullMonotoneChain,
    lineSegmentIntersection,
    bresenhamLine,
    grahamScan,
    closestPairOfPoints,
    polygonCentroid,
    ramerDouglasPeucker,
    midpointCircle,
    deCasteljauBezier,
    skylineProblem,
    rectangleUnionArea,
    intervalUnionLength,
    rotatingCalipersDiameter,
};
