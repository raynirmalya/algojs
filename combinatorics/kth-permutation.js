const factorial = (value) => {
    let result = 1;

    for (let number = 2; number <= value; number += 1) {
        result *= number;
    }

    return result;
};

const kthPermutation = (values, rank) => {
    if (!Array.isArray(values) || !Number.isInteger(rank) || rank <= 0) {
        throw new TypeError("kthPermutation expects an array and a positive integer rank.");
    }

    const available = values.slice();
    const total = factorial(available.length);

    if (rank > total) {
        throw new RangeError("kthPermutation rank is out of range.");
    }

    const permutation = [];
    let index = rank - 1;

    for (let remaining = available.length; remaining > 0; remaining -= 1) {
        const blockSize = factorial(remaining - 1);
        const choice = Math.floor(index / blockSize);
        permutation.push(available.splice(choice, 1)[0]);
        index %= blockSize;
    }

    return permutation;
};

module.exports = kthPermutation;
