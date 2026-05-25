const dot = (first, second) => first.reduce((sum, value, index) => sum + (value * second[index]), 0);

const scale = (vector, factor) => vector.map((value) => value * factor);
const subtract = (first, second) => first.map((value, index) => value - second[index]);
const norm = (vector) => Math.sqrt(dot(vector, vector));

const gramSchmidt = (vectors) => {
    if (!Array.isArray(vectors) || vectors.length === 0) {
        throw new TypeError("gramSchmidt expects a non-empty array of vectors.");
    }

    const orthonormal = [];

    vectors.forEach((vector) => {
        let current = vector.slice();

        orthonormal.forEach((basis) => {
            const projectionScale = dot(current, basis);
            current = subtract(current, scale(basis, projectionScale));
        });

        const length = norm(current);

        if (length > 1e-12) {
            orthonormal.push(scale(current, 1 / length));
        }
    });

    return orthonormal;
};

module.exports = gramSchmidt;
