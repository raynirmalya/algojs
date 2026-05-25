const longestCommonSubsequence = (firstSequence, secondSequence) => {
    const isStringInput = typeof firstSequence === "string" && typeof secondSequence === "string";
    const firstValues = isStringInput ? firstSequence.split("") : firstSequence;
    const secondValues = isStringInput ? secondSequence.split("") : secondSequence;
    const dp = Array.from({ length: firstValues.length + 1 }, () =>
        new Array(secondValues.length + 1).fill(0)
    );

    for (let firstIndex = 1; firstIndex <= firstValues.length; firstIndex += 1) {
        for (let secondIndex = 1; secondIndex <= secondValues.length; secondIndex += 1) {
            if (firstValues[firstIndex - 1] === secondValues[secondIndex - 1]) {
                dp[firstIndex][secondIndex] = dp[firstIndex - 1][secondIndex - 1] + 1;
            } else {
                dp[firstIndex][secondIndex] = Math.max(
                    dp[firstIndex - 1][secondIndex],
                    dp[firstIndex][secondIndex - 1]
                );
            }
        }
    }

    const sequence = [];
    let firstIndex = firstValues.length;
    let secondIndex = secondValues.length;

    while (firstIndex > 0 && secondIndex > 0) {
        if (firstValues[firstIndex - 1] === secondValues[secondIndex - 1]) {
            sequence.push(firstValues[firstIndex - 1]);
            firstIndex -= 1;
            secondIndex -= 1;
        } else if (dp[firstIndex - 1][secondIndex] >= dp[firstIndex][secondIndex - 1]) {
            firstIndex -= 1;
        } else {
            secondIndex -= 1;
        }
    }

    sequence.reverse();

    return {
        length: dp[firstValues.length][secondValues.length],
        sequence: isStringInput ? sequence.join("") : sequence,
    };
};

module.exports = longestCommonSubsequence;
