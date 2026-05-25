const powerSet = (values) => {
    if (!Array.isArray(values)) {
        throw new TypeError("powerSet expects an array.");
    }

    const subsets = [[]];

    values.forEach((value) => {
        const additions = subsets.map((subset) => subset.concat([value]));
        subsets.push(...additions);
    });

    return subsets;
};

module.exports = powerSet;
