const extendedEuclidean = require("./extended-euclidean");

const normalizeCongruences = (congruencesOrRemainders, moduli) => {
    if (Array.isArray(congruencesOrRemainders) && congruencesOrRemainders.length > 0) {
        if (typeof congruencesOrRemainders[0] === "object") {
            return congruencesOrRemainders.map((congruence) => ({
                remainder: congruence.remainder,
                modulus: congruence.modulus,
            }));
        }

        if (Array.isArray(moduli) && congruencesOrRemainders.length === moduli.length) {
            return congruencesOrRemainders.map((remainder, index) => ({
                remainder,
                modulus: moduli[index],
            }));
        }
    }

    throw new TypeError("chineseRemainderTheorem expects congruence objects or remainder/modulus arrays.");
};

const chineseRemainderTheorem = (congruencesOrRemainders, moduli) => {
    const congruences = normalizeCongruences(congruencesOrRemainders, moduli);
    let solution = 0;
    let modulus = 1;

    for (const congruence of congruences) {
        if (!Number.isInteger(congruence.remainder) || !Number.isInteger(congruence.modulus) || congruence.modulus <= 0) {
            throw new TypeError("Each congruence must contain an integer remainder and a positive modulus.");
        }

        const gcdResult = extendedEuclidean(modulus, congruence.modulus);
        const difference = congruence.remainder - solution;

        if (difference % gcdResult.gcd !== 0) {
            return null;
        }

        const lcm = (modulus / gcdResult.gcd) * congruence.modulus;
        const multiplier = ((difference / gcdResult.gcd) * gcdResult.x) % (congruence.modulus / gcdResult.gcd);

        solution += modulus * multiplier;
        solution = ((solution % lcm) + lcm) % lcm;
        modulus = lcm;
    }

    return {
        solution,
        modulus,
    };
};

module.exports = chineseRemainderTheorem;
