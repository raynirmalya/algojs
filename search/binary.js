const binarySearch = (haystack, needle)=>{  
    return  search1(haystack, needle); // search(haystack, 0, haystack.length, needle); ; 
}

function search(arr, l, r, x){ 
        if (r >= l) { 
            let mid = l + (r - l) / 2; 
            if (arr[mid] == x) {
                return mid; 
            }
            if (arr[mid] > x) {
                return search(arr, l, mid - 1, x); 
            } 
            return search(arr, mid + 1, r, x); 
        } 
        return -1; 
    } 

function search1(haystack, needle) {
    let firstIndex = 0;
    let lastIndex = haystack.length - 1;

    // termination condition (element isn't present)
    while(firstIndex <= lastIndex) {
        let middleIndex = (firstIndex + lastIndex) / 2;
        if (haystack[middleIndex] == needle) {
            return middleIndex;
        } else if (haystack[middleIndex] < needle) {
            firstIndex = middleIndex + 1;
        } else if (haystack[middleIndex] > needle) {
            lastIndex = middleIndex - 1;
        }

    }
    return -1;
}
// export default binarySearch;
module.exports = binarySearch;