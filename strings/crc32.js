const table = (() => {
    const values = [];

    for (let value = 0; value < 256; value += 1) {
        let current = value;

        for (let bit = 0; bit < 8; bit += 1) {
            current = (current & 1) ? (0xEDB88320 ^ (current >>> 1)) : (current >>> 1);
        }

        values.push(current >>> 0);
    }

    return values;
})();

const crc32 = (text) => {
    if (typeof text !== "string") {
        throw new TypeError("crc32 expects a string.");
    }

    let crc = 0xFFFFFFFF;

    text.split("").forEach((character) => {
        const index = (crc ^ character.charCodeAt(0)) & 0xFF;
        crc = (crc >>> 8) ^ table[index];
    });

    return (crc ^ 0xFFFFFFFF) >>> 0;
};

module.exports = crc32;
