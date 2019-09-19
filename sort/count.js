const swap = require("./swap.js");

const countSort = (arr)=>{
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    let i, z = 0, count = [];

    for (i = min; i <= max; i++) {
        count[i] = 0;
    }
 
    for (i=0; i < arr.length; i++) {
        count[arr[i]]++;
    }
 
    for (i = min; i <= max; i++) {
        while (count[i]-- > 0) {
            arr[z++] = i;
        }
    }
    return arr;
}

module.exports = countSort;