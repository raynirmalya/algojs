const eggDropping = (eggs, floors) => {
    if (!Number.isInteger(eggs) || !Number.isInteger(floors) || eggs < 1 || floors < 0) {
        throw new TypeError("eggDropping expects positive egg count and non-negative floor count.");
    }

    const dp = new Array(eggs + 1).fill(0);
    let moves = 0;

    while (dp[eggs] < floors) {
        moves += 1;

        for (let egg = eggs; egg >= 1; egg -= 1) {
            dp[egg] = dp[egg] + dp[egg - 1] + 1;
        }
    }

    return {
        minMoves: moves,
    };
};

module.exports = eggDropping;
