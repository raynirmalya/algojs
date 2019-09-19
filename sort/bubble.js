const swap = require("./swap.js");

const bubbleSort = (arr)=>{
    let i, j, isSwapped; 
    for (i = 0; i < arr.length-1; i++) { 
      isSwapped = false; 
      for(let j= 0; j < arr.length-i-1; j++){ 
         if (arr[j] > arr[j+1]) 
         { 
           arr = swap(arr,j,j+1); 
           isSwapped = true; 
         } 
      } 
      if (isSwapped == false) {
        break; 
      }   
    } 
    return arr;
}

module.exports = bubbleSort;