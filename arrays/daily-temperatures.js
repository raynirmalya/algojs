const dailyTemperatures = (temperatures) => {
    if (!Array.isArray(temperatures)) {
        throw new TypeError("dailyTemperatures expects an array.");
    }

    const result = new Array(temperatures.length).fill(0);
    const stack = [];

    temperatures.forEach((temperature, index) => {
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperature) {
            const previous = stack.pop();
            result[previous] = index - previous;
        }

        stack.push(index);
    });

    return result;
};

module.exports = dailyTemperatures;
