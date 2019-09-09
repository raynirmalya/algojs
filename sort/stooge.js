const swap = require("./swap.js");
// import swap from './swap.js'
const stoogeSort = (arr, i, j)=> {
    if (j === undefined) {
        j = arr.length - 1;
    }
 
    if (i === undefined) {
        i = 0;
    }
 
    if (arr[j] < arr[i]) {
       arr = swap(arr, i, j);
    }
 
    if (j - i > 1) {
        var t = Math.floor((j - i + 1) / 3);
        stoogeSort(arr, i, j-t);
        stoogeSort(arr, i+t, j);
        stoogeSort(arr, i, j-t);
    }
    return arr;
}
// export default stoogeSort;
module.exports = stoogeSort;