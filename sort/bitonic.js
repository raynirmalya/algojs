const swap = require("./swap.js");
const bitonicSort = (arr)=>{
    const up = 1;
    const len = arr.length
    arr = sort(arr, 0, len, up);
    return arr;
}

function compAndSwap(arr, i, j, dir){ 
    if ( (arr[i] > arr[j] && dir == 1) || 
         (arr[i] < arr[j] && dir == 0)) { 
        arr = swap(arr, i, j);
    } 
    return arr;
} 


function bitonicMerge(arr, low, cnt, dir){ 
    if (cnt>1) { 
        const k = cnt/2; 
        for (let i=low; i<low+k; i++) {
           arr = compAndSwap(arr,i, i+k, dir); 
        }    
        arr = bitonicMerge(arr,low, k, dir); 
        arr = bitonicMerge(arr,low+k, k, dir); 
    } 
    return arr;
} 

function sort(arr, low, cnt, dir) { 
    if (cnt>1) { 
        const k = cnt/2; 
        arr = sort(arr, low, k, 1); 
        arr = sort(arr,low+k, k, 0); 
        arr = bitonicMerge(arr, low, cnt, dir); 
    } 
    return arr;
} 

module.exports = bitonicSort;