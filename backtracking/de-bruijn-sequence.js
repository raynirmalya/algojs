const deBruijnSequence = (alphabet, order) => {
    if (!Array.isArray(alphabet) || !Number.isInteger(order) || order <= 0) {
        throw new TypeError("deBruijnSequence expects an alphabet array and positive order.");
    }

    const symbols = alphabet.map(String);
    const a = new Array(symbols.length * order).fill(0);
    const sequence = [];

    const db = (depth, period) => {
        if (depth > order) {
            if (order % period === 0) {
                for (let index = 1; index <= period; index += 1) {
                    sequence.push(symbols[a[index]]);
                }
            }

            return;
        }

        a[depth] = a[depth - period];
        db(depth + 1, period);

        for (let index = a[depth - period] + 1; index < symbols.length; index += 1) {
            a[depth] = index;
            db(depth + 1, depth);
        }
    };

    db(1, 1);
    return sequence.join("") + symbols[0].repeat(order - 1);
};

module.exports = deBruijnSequence;
