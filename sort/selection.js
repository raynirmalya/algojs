

const swap = require("./swap.js");

const selectionSort = (arr)=>{
      const len = arr.length;  
      for (let i = 0; i < len-1; i++) { 
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

module.exports = selectionSort;