

const swap = require("./swap.js");
// import swap from './swap.js'
const selectionSort = (arr)=>{
      const len = arr.length; 
      // One by one move boundary of unsorted subarray 
      for (let i = 0; i < len-1; i++) { 
          // Find the minimum element in unsorted array 
          let minRecIndex = i; 
          for (let j = i+1; j < len; j++) {
              if (arr[j] < arr[minRecIndex]) {
                minRecIndex = j; 
              }
          } 
          arr = swap(arr,i,minRecIndex); 
      } 
      return arr;
  } 

// export default bubbleSort;
module.exports = selectionSort;