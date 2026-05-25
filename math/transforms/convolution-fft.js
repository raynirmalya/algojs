const fft = require("./fft");
const ifft = require("./ifft");
const { multiply } = require("./complex");

const nextPowerOfTwo = (value) => {
    let size = 1;

    while (size < value) {
        size <<= 1;
    }

    return size;
};

const convolutionFFT = (first, second) => {
    if (!Array.isArray(first) || !Array.isArray(second)) {
        throw new TypeError("convolutionFFT expects two arrays.");
    }

    const size = nextPowerOfTwo(first.length + second.length - 1);
    const paddedFirst = first.concat(new Array(size - first.length).fill(0));
    const paddedSecond = second.concat(new Array(size - second.length).fill(0));
    const transformedFirst = fft(paddedFirst);
    const transformedSecond = fft(paddedSecond);
    const multiplied = transformedFirst.map((value, index) => multiply(value, transformedSecond[index]));
    const result = ifft(multiplied);

    return result.slice(0, first.length + second.length - 1).map((value) => Math.round(value.re));
};

module.exports = convolutionFFT;
