const shellSort = (arr) => {
    let n = arr.length; 
    for (let gap = n/2; gap > 0; gap /= 2) { 
        for (let i = gap; i < n; i += 1) { 
            let temp = arr[i]; 
            let j; 
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap]; 
               
            }
            arr[j] = temp; 
        } 
    } 
    return arr;
} 

module.exports = shellSort;