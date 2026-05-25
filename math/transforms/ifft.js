const fft = require("./fft");
const { scale } = require("./complex");

const conjugate = (value) => ({ re: value.re, im: -value.im });

const ifft = (values) => {
    if (!Array.isArray(values)) {
        throw new TypeError("ifft expects an array.");
    }

    const conjugated = values.map(conjugate);
    const transformed = fft(conjugated).map(conjugate);
    return transformed.map((value) => scale(value, 1 / values.length));
};

module.exports = ifft;
