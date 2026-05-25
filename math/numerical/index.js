const newtonRaphson = require("./newton-raphson");
const secantMethod = require("./secant-method");
const bisectionMethod = require("./bisection-method");
const trapezoidalRule = require("./trapezoidal-rule");
const simpsonRule = require("./simpson-rule");
const goldenSectionSearch = require("./golden-section-search");

module.exports = {
    newtonRaphson,
    secantMethod,
    bisectionMethod,
    trapezoidalRule,
    simpsonRule,
    goldenSectionSearch,
};
