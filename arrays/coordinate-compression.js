const coordinateCompression = (values) => {
    if (!Array.isArray(values)) {
        throw new TypeError("coordinateCompression expects an array.");
    }

    const uniqueValues = Array.from(new Set(values)).sort((first, second) => first - second);
    const mapping = new Map(uniqueValues.map((value, index) => [value, index]));

    return {
        compressed: values.map((value) => mapping.get(value)),
        mapping,
        uniqueValues,
    };
};

module.exports = coordinateCompression;
