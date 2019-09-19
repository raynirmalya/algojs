const mergeSort = (arr) => {
    let i,j,k;
    if(arr.length > 1) { 
        const midRecIndex = Math.ceil(arr.length / 2); 
        let left = new Array(midRecIndex); 
        for(let i = 0; i < midRecIndex; i++) { 
            left[i] = arr[i]; 
        } 
        let right = new Array(arr.length - midRecIndex); 
        for(let i = midRecIndex; i < arr.length; i++) { 
            right[i - midRecIndex] = arr[i]; 
        } 
        mergeSort(left); 
        mergeSort(right); 

         i = 0; 
         j = 0; 
         k = 0;  
        while (i < left.length && j < right.length) { 
            if (left[i] < right[j]) { 
                arr[k] = left[i]; 
                i++; 
            } else { 
                arr[k] = right[j]; 
                j++; 
            } 
            k++; 
        } 
        while (i < left.length) { 
            arr[k] = left[i]; 
            i++; 
            k++; 
        } 
        while (j < right.length) { 
            arr[k] = right[j]; 
            j++; 
            k++; 
        } 
    } 
    return arr;
  } 

module.exports = mergeSort;