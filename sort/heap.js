const swap = require("./swap.js");
// import swap from './swap.js'
function createHeap(arr, len, i) {
        let root = i;
        let l = 2*i + 1; 
        let r = 2*i + 2; 
        if (l < len && arr[l] > arr[root]) {
            root = l; 
        }

        if (r < len && arr[r] > arr[root]) {
            root = r; 
        }
        if (root != i) { 
            arr = swap(arr,root,i);
            createHeap(arr, len, root); 
        } 

}
const heapSort = (arr) => {
    const len = arr.length; 
    for (let i = (len / 2 )- 1; i >= 0; i--) {
        createHeap(arr, len, i); 
    }
    for (let i = len-1; i>=0; i--) { 
        arr = swap(arr,0,i);
        createHeap(arr, i, 0); 
    } 
    return arr;
} 

// export default heapSort;
module.exports = heapSort;

  