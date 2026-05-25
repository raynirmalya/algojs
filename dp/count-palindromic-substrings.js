const expandAroundCenter = (text, left, right) => {
    let count = 0;

    while (left >= 0 && right < text.length && text[left] === text[right]) {
        count += 1;
        left -= 1;
        right += 1;
    }

    return count;
};

const countPalindromicSubstrings = (text) => {
    if (typeof text !== "string") {
        throw new TypeError("countPalindromicSubstrings expects a string.");
    }

    let count = 0;

    for (let index = 0; index < text.length; index += 1) {
        count += expandAroundCenter(text, index, index);
        count += expandAroundCenter(text, index, index + 1);
    }

    return count;
};

module.exports = countPalindromicSubstrings;
