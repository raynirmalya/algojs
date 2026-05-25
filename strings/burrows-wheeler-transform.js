const burrowsWheelerTransform = (text) => {
    if (typeof text !== "string") {
        throw new TypeError("burrowsWheelerTransform expects a string.");
    }

    const rotations = [];

    for (let index = 0; index < text.length; index += 1) {
        rotations.push({
            index,
            rotation: text.slice(index) + text.slice(0, index),
        });
    }

    rotations.sort((first, second) => first.rotation.localeCompare(second.rotation));

    return {
        transformed: rotations.map((entry) => entry.rotation[text.length - 1]).join(""),
        index: rotations.findIndex((entry) => entry.index === 0),
    };
};

module.exports = burrowsWheelerTransform;
