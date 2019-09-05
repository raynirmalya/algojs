

const swap = require("./swap.js");
// import swap from './swap.js'
const insertionSort = (unsortedArr)=>{
    let i, key, j;  
    const len = unsortedArr.length; 
    for (i = 1; i < len; i++){  
        key = unsortedArr[i];  
        j = i - 1;  
        while (j >= 0 && unsortedArr[j] > key) 
        {  
            unsortedArr[j + 1] = unsortedArr[j];  
            j = j - 1;  
        }  
        unsortedArr[j + 1] = key;  
    }
    return unsortedArr;
  } 

// export default bubbleSort;
module.exports = insertionSort;