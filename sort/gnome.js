const swap = require("./swap.js");

const gnomeSort = (arr)=>{
    let index = 0, n = arr.length; 
    while (index < n) { 
        if (index == 0) { 
            index++; 
        }
        if (arr[index] >= arr[index - 1]) {
            index++; 
        } else { 
            arr = swap(arr, index, index - 1); 
            index--; 
        } 
    } 
    return arr;
}

module.exports = gnomeSort;