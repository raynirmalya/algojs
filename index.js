const bubbleSort = require("./sort/bubble.js");
const selectionSort = require("./sort/selection.js");
const insertionSort = require("./sort/insertion.js");
const mergeSort = require("./sort/merge.js");
const quickSort = require("./sort/quick.js");
const heapSort = require("./sort/heap.js");
// import bubbleSort from './bubble.js';

console.log('bubble', bubbleSort([12, 11, 13, 5, 6, 7]));
console.log('insertion', insertionSort([12, 11, 13, 5, 6, 7]));
console.log('selection', selectionSort([12, 11, 13, 5, 6, 7]));
console.log('merge', mergeSort([12, 11, 13, 5, 6, 7]));
console.log('quick', quickSort([10, 7, 8, 9, 1, 5]));
console.log('heap', heapSort([10, 7, 8, 9, 1, 5]));