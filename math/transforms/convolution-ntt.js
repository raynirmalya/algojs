const ntt = require("./ntt");

const modMultiply = (first, second, modulus) =>
    Number((BigInt(first) * BigInt(second)) % BigInt(modulus));

const nextPowerOfTwo = (value) => {
    let size = 1;

    while (size < value) {
        size <<= 1;
    }

    return size;
};

const convolutionNTT = (first, second, modulus, primitiveRoot) => {
    if (!Array.isArray(first) || !Array.isArray(second)) {
        throw new TypeError("convolutionNTT expects two arrays.");
    }

    const size = nextPowerOfTwo(first.length + second.length - 1);
    const paddedFirst = first.concat(new Array(size - first.length).fill(0));
    const paddedSecond = second.concat(new Array(size - second.length).fill(0));
    const transformedFirst = ntt(paddedFirst, false, modulus, primitiveRoot);
    const transformedSecond = ntt(paddedSecond, false, modulus, primitiveRoot);
    const mod = modulus || 998244353;
    const multiplied = transformedFirst.map((value, index) => modMultiply(value, transformedSecond[index], mod));
    return ntt(multiplied, true, modulus, primitiveRoot).slice(0, first.length + second.length - 1);
};

module.exports = convolutionNTT;
