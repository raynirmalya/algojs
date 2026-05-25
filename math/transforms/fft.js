const { toComplex, add, subtract, multiply } = require("./complex");

const fft = (values) => {
    if (!Array.isArray(values)) {
        throw new TypeError("fft expects an array.");
    }

    const size = values.length;

    if (size === 1) {
        return [toComplex(values[0])];
    }

    const even = fft(values.filter((_, index) => index % 2 === 0));
    const odd = fft(values.filter((_, index) => index % 2 === 1));
    const result = new Array(size);

    for (let index = 0; index < size / 2; index += 1) {
        const angle = (-2 * Math.PI * index) / size;
        const twiddle = { re: Math.cos(angle), im: Math.sin(angle) };
        const oddTerm = multiply(twiddle, odd[index]);
        result[index] = add(even[index], oddTerm);
        result[index + size / 2] = subtract(even[index], oddTerm);
    }

    return result;
};

module.exports = fft;
