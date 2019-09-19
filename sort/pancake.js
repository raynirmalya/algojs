const swap = require("./swap.js");

const pancakeSort = (arr)=>{
    for (let i = arr.length - 1; i >= 1; i--) {
        let max_idx = 0, newSlice, max = arr[0];
        for (var j = 1; j <= i; j++) {
            if (arr[j] > max) {
                max = arr[j];
                max_idx = j;
            }
        }
 
        if (max_idx == i) {
            continue;
        }
        
 
        if (max_idx > 0) {
            newSlice = arr.slice(0, max_idx+1).reverse();
            for (var j = 0; j <= max_idx; j++) {
                arr[j] = newSlice[j];
            }
        }
 
        newSlice = arr.slice(0, i+1).reverse();
        for (var j = 0; j <= i; j++) {
            arr[j] = newSlice[j];
        }
    }
    return arr;
}

module.exports = pancakeSort;