const toComplex = (value) =>
    typeof value === "number" ? { re: value, im: 0 } : { re: value.re || 0, im: value.im || 0 };

const add = (first, second) => ({
    re: first.re + second.re,
    im: first.im + second.im,
});

const subtract = (first, second) => ({
    re: first.re - second.re,
    im: first.im - second.im,
});

const multiply = (first, second) => ({
    re: (first.re * second.re) - (first.im * second.im),
    im: (first.re * second.im) + (first.im * second.re),
});

const scale = (value, factor) => ({
    re: value.re * factor,
    im: value.im * factor,
});

module.exports = {
    toComplex,
    add,
    subtract,
    multiply,
    scale,
};
