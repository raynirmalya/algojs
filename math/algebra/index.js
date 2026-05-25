const karatsubaMultiplication = require("./karatsuba-multiplication");
const gaussianElimination = require("./gaussian-elimination");
const hornerMethod = require("./horner-method");
const matrixDeterminant = require("./matrix-determinant");
const matrixInverse = require("./matrix-inverse");
const luDecomposition = require("./lu-decomposition");
const choleskyDecomposition = require("./cholesky-decomposition");
const lagrangeInterpolation = require("./lagrange-interpolation");
const matrixExponentiation = require("./matrix-exponentiation");
const strassenMatrixMultiplication = require("./strassen-matrix-multiplication");
const gramSchmidt = require("./gram-schmidt");
const qrDecomposition = require("./qr-decomposition");
const polynomialLongDivision = require("./polynomial-long-division");
const newtonInterpolation = require("./newton-interpolation");

module.exports = {
    karatsubaMultiplication,
    gaussianElimination,
    hornerMethod,
    matrixDeterminant,
    matrixInverse,
    luDecomposition,
    choleskyDecomposition,
    lagrangeInterpolation,
    matrixExponentiation,
    strassenMatrixMultiplication,
    gramSchmidt,
    qrDecomposition,
    polynomialLongDivision,
    newtonInterpolation,
};
