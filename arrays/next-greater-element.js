const nextGreaterElement = (values) => {
    if (!Array.isArray(values)) {
        throw new TypeError("nextGreaterElement expects an array.");
    }

    const result = new Array(values.length).fill(-1);
    const stack = [];

    values.forEach((value, index) => {
        while (stack.length > 0 && values[stack[stack.length - 1]] < value) {
            result[stack.pop()] = value;
        }

        stack.push(index);
    });

    return result;
};

module.exports = nextGreaterElement;
