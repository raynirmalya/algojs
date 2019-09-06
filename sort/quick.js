
const swap = require("./swap.js");
// import swap from './swap.js'

function getPartitionIndex(arr, low, high) { 
    const pivot = arr[high];  
    let i = (low-1); 
    for (let j=low; j<high; j++) { 
        if (arr[j] < pivot) { 
            i++; 
            arr = swap(arr,i,j);  
        } 
    } 
    arr = swap(arr,i+1,high);  
    return i+1; 
} 

function sort(arr, low, high) { 
if (low < high) { 
    const pi = getPartitionIndex(arr, low, high); 
    arr = sort(arr, low, pi-1); 
    arr = sort(arr, pi+1, high); 
} 
return arr;
} 

const quickSort = (arr) => {
      arr = sort(arr, 0, arr.length - 1);
      return arr;
  } 

// export default quickSort;
module.exports = quickSort;

  