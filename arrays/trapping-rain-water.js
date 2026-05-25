const trappingRainWater = (heights) => {
    if (!Array.isArray(heights)) {
        throw new TypeError("trappingRainWater expects an array.");
    }

    let left = 0;
    let right = heights.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let trapped = 0;

    while (left < right) {
        if (heights[left] < heights[right]) {
            leftMax = Math.max(leftMax, heights[left]);
            trapped += leftMax - heights[left];
            left += 1;
        } else {
            rightMax = Math.max(rightMax, heights[right]);
            trapped += rightMax - heights[right];
            right -= 1;
        }
    }

    return trapped;
};

module.exports = trappingRainWater;
