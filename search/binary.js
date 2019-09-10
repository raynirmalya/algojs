const binarySearch = (haystack, needle, start, end)=>{  
    start = start === undefined ? 0 : start;
    end = end === undefined ? 0 : haystack.length-1;
    return search(haystack, needle, 0, haystack.length-1); ; 
}

function search(arr, x, start, end){ 
    if (start > end) {
        return -1;
    } 
    let mid=Math.floor((start + end)/2);  
    if (arr[mid]===x) {
        return mid; 
    } 
    if(arr[mid] > x)  {
        return search(arr, x, start, mid-1); 
    } else {
        return search(arr, x, mid+1, end); 
    }
} 

// export default binarySearch;
module.exports = binarySearch;