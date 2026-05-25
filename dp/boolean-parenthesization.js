const booleanParenthesization = (symbols, operators) => {
    if (typeof symbols !== "string" || typeof operators !== "string" || symbols.length !== operators.length + 1) {
        throw new TypeError("booleanParenthesization expects symbols and operators strings.");
    }

    const length = symbols.length;
    const trueDp = Array.from({ length }, () => new Array(length).fill(0));
    const falseDp = Array.from({ length }, () => new Array(length).fill(0));

    for (let index = 0; index < length; index += 1) {
        trueDp[index][index] = symbols[index] === "T" ? 1 : 0;
        falseDp[index][index] = symbols[index] === "F" ? 1 : 0;
    }

    for (let size = 2; size <= length; size += 1) {
        for (let left = 0; left <= length - size; left += 1) {
            const right = left + size - 1;

            for (let split = left; split < right; split += 1) {
                const operator = operators[split];
                const leftTrue = trueDp[left][split];
                const leftFalse = falseDp[left][split];
                const rightTrue = trueDp[split + 1][right];
                const rightFalse = falseDp[split + 1][right];

                if (operator === "&") {
                    trueDp[left][right] += leftTrue * rightTrue;
                    falseDp[left][right] +=
                        (leftTrue * rightFalse) +
                        (leftFalse * rightTrue) +
                        (leftFalse * rightFalse);
                } else if (operator === "|") {
                    trueDp[left][right] +=
                        (leftTrue * rightTrue) +
                        (leftTrue * rightFalse) +
                        (leftFalse * rightTrue);
                    falseDp[left][right] += leftFalse * rightFalse;
                } else if (operator === "^") {
                    trueDp[left][right] +=
                        (leftTrue * rightFalse) +
                        (leftFalse * rightTrue);
                    falseDp[left][right] +=
                        (leftTrue * rightTrue) +
                        (leftFalse * rightFalse);
                }
            }
        }
    }

    return trueDp[0][length - 1];
};

module.exports = booleanParenthesization;
