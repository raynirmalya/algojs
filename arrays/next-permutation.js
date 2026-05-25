const nextPermutation = (values) => {
    if (!Array.isArray(values)) {
        throw new TypeError("nextPermutation expects an array.");
    }

    const permutation = values.slice();
    let pivot = permutation.length - 2;

    while (pivot >= 0 && permutation[pivot] >= permutation[pivot + 1]) {
        pivot -= 1;
    }

    if (pivot < 0) {
        return {
            hasNext: false,
            permutation: permutation.reverse(),
        };
    }

    let successor = permutation.length - 1;

    while (permutation[successor] <= permutation[pivot]) {
        successor -= 1;
    }

    [permutation[pivot], permutation[successor]] = [permutation[successor], permutation[pivot]];

    let left = pivot + 1;
    let right = permutation.length - 1;

    while (left < right) {
        [permutation[left], permutation[right]] = [permutation[right], permutation[left]];
        left += 1;
        right -= 1;
    }

    return {
        hasNext: true,
        permutation,
    };
};

module.exports = nextPermutation;
