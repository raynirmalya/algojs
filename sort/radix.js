const radixSort = (arr)=>{ 
    const max = Math.max(...arr);  
    for (let exp = 1; max/exp > 0; exp *= 10) {
      arr = countSort(arr, exp); 
    }      
    return arr;
  } 
  function countSort(arr, exp) {  
    let output = new Array(arr.length).fill(0);
    let count = new Array(arr.length).fill(0), n = arr.length; 
    for (let i = 0; i < n; i++) {
        count[ (arr[i]/exp)%10 ]++; 
    }
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1]; 
    }
    for (let i = n - 1; i >= 0; i--) { 
        output[count[ (arr[i]/exp)%10 ] - 1] = arr[i]; 
        count[ (arr[i]/exp)%10 ]--; 
    } 
    return output;
  }

module.exports = radixSort;

