const insertionSort = (arr)=>{
    let i, key, j;  
    const len = arr.length; 
    for (i = 1; i < len; i++){  
        key = arr[i];  
        j = i - 1;  
        while (j >= 0 && arr[j] > key) 
        {  
            arr[j + 1] = arr[j];  
            j = j - 1;  
        }  
        arr[j + 1] = key;  
    }
    return arr;
  } 

// export default insertionSort;
module.exports = insertionSort;