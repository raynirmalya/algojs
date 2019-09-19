

const swap = require("./swap.js");

const cocktailSort = (arr)=>{
    let swapped = true; 
    let start = 0; 
    let end = arr.length; 

    while (swapped == true) { 
        swapped = false; 
        for (let i = start; i < end - 1; ++i) { 
            if (arr[i] >arr[i + 1]) {  
                arr = swap(arr, i, i+1);
                swapped = true; 
            } 
        } 
        if (swapped == false) {
            break;
        }
            
        swapped = false;  
        end = end - 1; 

        for (let i = end - 1; i >= start; i--) { 
            if (arr[i] >arr[i + 1]) { 
                arr = swap(arr, i, i+1);
                swapped = true; 
            } 
        } 
        start = start + 1; 
    } 
      return arr;
  } 

module.exports = cocktailSort;