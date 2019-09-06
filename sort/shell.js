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
//     int i, j, k, tmp;    
// for (i = num / 2; i > 0; i = i / 2)    
// {    
// for (j = i; j < num; j++)    
// {    
// for(k = j - i; k >= 0; k = k - i)    
// {    
// if (arr[k+i] >= arr[k])    
// break;    
// else    
// {    
// tmp = arr[k];    
// arr[k] = arr[k+i];    
// arr[k+i] = tmp;    
// }    
// }    
// }    
// } 
    return arr;
} 

// export default shellSort;
module.exports = shellSort;