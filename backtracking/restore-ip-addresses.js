const restoreIpAddresses = (text) => {
    if (typeof text !== "string") {
        throw new TypeError("restoreIpAddresses expects a string.");
    }

    const addresses = [];
    const current = [];

    const valid = (segment) => segment.length > 0 && (segment === "0" || (segment[0] !== "0" && Number(segment) <= 255));

    const backtrack = (index) => {
        if (current.length === 4) {
            if (index === text.length) {
                addresses.push(current.join("."));
            }

            return;
        }

        for (let length = 1; length <= 3 && index + length <= text.length; length += 1) {
            const segment = text.slice(index, index + length);

            if (!valid(segment)) {
                continue;
            }

            current.push(segment);
            backtrack(index + length);
            current.pop();
        }
    };

    backtrack(0);
    return addresses;
};

module.exports = restoreIpAddresses;
