const longestPalindromicSubsequence = (text) => {
    const length = text.length;

    if (length === 0) {
        return {
            length: 0,
            sequence: "",
        };
    }

    const dp = Array.from({ length }, () => new Array(length).fill(0));

    for (let index = 0; index < length; index += 1) {
        dp[index][index] = 1;
    }

    for (let size = 2; size <= length; size += 1) {
        for (let left = 0; left <= length - size; left += 1) {
            const right = left + size - 1;

            if (text[left] === text[right]) {
                dp[left][right] = size === 2 ? 2 : dp[left + 1][right - 1] + 2;
            } else {
                dp[left][right] = Math.max(dp[left + 1][right], dp[left][right - 1]);
            }
        }
    }

    const front = [];
    const back = [];
    let left = 0;
    let right = length - 1;

    while (left <= right) {
        if (left === right) {
            front.push(text[left]);
            break;
        }

        if (text[left] === text[right]) {
            front.push(text[left]);
            back.push(text[right]);
            left += 1;
            right -= 1;
        } else if (dp[left + 1][right] >= dp[left][right - 1]) {
            left += 1;
        } else {
            right -= 1;
        }
    }

    return {
        length: dp[0][length - 1],
        sequence: front.join("") + back.reverse().join(""),
    };
};

module.exports = longestPalindromicSubsequence;
