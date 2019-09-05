
const swap = require("./swap.js");
// import swap from './swap.js'
const mergeSort = (unsortedArr)=>{
    let i,j,k;
    if(unsortedArr.length > 1) 
    { 
        const midRecIndex = unsortedArr.length / 2; 

        // Split left part 
        let left = new Array(midRecIndex); 
        for(let i = 0; i < midRecIndex; i++) { 
            left[i] = unsortedArr[i]; 
        } 
          
        // Split right part 
        let right = new Array(unsortedArr.length - midRecIndex); 
        for(let i = midRecIndex; i < unsortedArr.length; i++) 
        { 
            right[i - midRecIndex] = unsortedArr[i]; 
        } 
        mergeSort(left); 
        mergeSort(right); 

         i = 0; 
         j = 0; 
         k = 0; 

        // Merge left and right arrays 
        while(i < left.length && j < right.length) 
        { 
            if(left[i] < right[j]) 
            { 
                unsortedArr[k] = left[i]; 
                i++; 
            } 
            else
            { 
                unsortedArr[k] = right[j]; 
                j++; 
            } 
            k++; 
        } 
        // Collect remaining elements 
        while(i < left.length) 
        { 
            unsortedArr[k] = left[i]; 
            i++; 
            k++; 
        } 
        while(j < right.length) 
        { 
            unsortedArr[k] = right[j]; 
            j++; 
            k++; 
        } 
    } 
    return unsortedArr;
  } 

// export default mergeSort;
module.exports = mergeSort;