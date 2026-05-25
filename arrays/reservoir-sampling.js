const reservoirSampling = (values, sampleSize, random = Math.random) => {
    if (!Array.isArray(values) || !Number.isInteger(sampleSize) || sampleSize < 0 || typeof random !== "function") {
        throw new TypeError("reservoirSampling expects an array, a non-negative sample size, and an optional random function.");
    }

    if (sampleSize === 0) {
        return [];
    }

    if (sampleSize >= values.length) {
        return values.slice();
    }

    const reservoir = values.slice(0, sampleSize);

    for (let index = sampleSize; index < values.length; index += 1) {
        const choice = Math.floor(random() * (index + 1));

        if (choice < sampleSize) {
            reservoir[choice] = values[index];
        }
    }

    return reservoir;
};

module.exports = reservoirSampling;
