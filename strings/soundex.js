const soundex = (text) => {
    if (typeof text !== "string") {
        throw new TypeError("soundex expects a string.");
    }

    if (text.length === 0) {
        return "";
    }

    const codes = {
        B: "1", F: "1", P: "1", V: "1",
        C: "2", G: "2", J: "2", K: "2", Q: "2", S: "2", X: "2", Z: "2",
        D: "3", T: "3",
        L: "4",
        M: "5", N: "5",
        R: "6",
    };

    const upper = text.toUpperCase();
    const first = upper[0];
    let result = first;
    let previousCode = codes[first] || "";

    for (let index = 1; index < upper.length && result.length < 4; index += 1) {
        const code = codes[upper[index]] || "0";

        if (code !== "0" && code !== previousCode) {
            result += code;
        }

        previousCode = code;
    }

    return (result + "000").slice(0, 4);
};

module.exports = soundex;
