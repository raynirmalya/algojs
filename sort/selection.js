

const swap = require("./swap.js");
// import swap from './swap.js'
const selectionSort = (unsortedArr)=>{
      const len = unsortedArr.length; 
      // One by one move boundary of unsorted subarray 
      for (let i = 0; i < len-1; i++) { 
          // Find the minimum element in unsorted array 
          let minRecIndex = i; 
          for (let j = i+1; j < len; j++) 
              if (unsortedArr[j] < unsortedArr[minRecIndex]) 
              minRecIndex = j; 

          // Swap the found minimum element with the first 
          // element 
          unsortedArr = swap(unsortedArr,i,minRecIndex); 
      } 
      return unsortedArr;
  } 

// export default bubbleSort;
module.exports = selectionSort;