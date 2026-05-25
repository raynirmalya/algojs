const rabinKarp = (text, pattern) => {
    if (pattern.length === 0) {
        return [0];
    }

    if (pattern.length > text.length) {
        return [];
    }

    const base = 256;
    const modulus = 1000000007;
    const patternLength = pattern.length;
    let highestBasePower = 1;
    let patternHash = 0;
    let windowHash = 0;
    const matches = [];

    for (let index = 0; index < patternLength - 1; index += 1) {
        highestBasePower = (highestBasePower * base) % modulus;
    }

    for (let index = 0; index < patternLength; index += 1) {
        patternHash = ((patternHash * base) + pattern.charCodeAt(index)) % modulus;
        windowHash = ((windowHash * base) + text.charCodeAt(index)) % modulus;
    }

    for (let index = 0; index <= text.length - patternLength; index += 1) {
        if (patternHash === windowHash) {
            const candidate = text.slice(index, index + patternLength);

            if (candidate === pattern) {
                matches.push(index);
            }
        }

        if (index < text.length - patternLength) {
            const leftChar = text.charCodeAt(index);
            const rightChar = text.charCodeAt(index + patternLength);

            windowHash =
                (((windowHash - (leftChar * highestBasePower) % modulus + modulus) * base) + rightChar) %
                modulus;
        }
    }

    return matches;
};

module.exports = rabinKarp;
