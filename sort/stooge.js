const swap = require("./swap.js");
// import swap from './swap.js'
function sort (arr, l, h) { 
        if (l >= h) 
            return; 
        if (arr[l] > arr[h]) { 
            arr = swap(arr, l, h);
        } 

        if (h - l + 1 > 2) { 
            let t = (h - l + 1) / 3; 
            sort(arr, l, h - t); 
            sort(arr, l + t, h); 
            sort(arr, l, h - t); 
        } 
    return arr;
}
const stoogeSort = (arr)=>{
    arr = sort( arr, 0, arr.length-1);
    return arr;
}
// export default stoogeSort;
module.exports = stoogeSort;