const swap = require("./swap.js");
// import swap from './swap.js'
function isArraySorted(arr) {
    var sorted = true;
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            sorted = false;
            break;
        }
    }
    return sorted;
}
const combSort = (arr) => {
    let iterationCount = 0;
    let gap = arr.length - 2;
    let decreaseFactor = 1.25;
    while (!isArraySorted(arr)) {
        if (iterationCount > 0)
        gap = (gap == 1) ? gap : Math.floor(gap / decreaseFactor);
        let front = 0;
        let back = gap;
        while (back <= arr.length - 1) {
            if (arr[front] > arr[back]) {
                arr = swap(arr, front, back);
            }
            front += 1;
            back += 1;
        }
        iterationCount += 1;
    }
    return arr;
}
// export default combSort;
module.exports = combSort;