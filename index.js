const bubbleSort = require("./sort/bubble.js");
const selectionSort = require("./sort/selection.js");
const insertionSort = require("./sort/insertion.js");
const mergeSort = require("./sort/merge.js");
const quickSort = require("./sort/quick.js");
const heapSort = require("./sort/heap.js");
const radixSort = require("./sort/radix.js");
const bucketSort = require("./sort/bucket.js");
const shellSort = require("./sort/shell.js");
const timSort = require("./sort/tim.js");
const pholeSort = require("./sort/pigeonhole.js");
const cycleSort = require("./sort/cycle.js");
const cocktailSort = require("./sort/cocktail.js");
const bitonicSort = require("./sort/bitonic.js");
// import bubbleSort from './bubble.js';

console.log('bubble', bubbleSort([12, 11, 13, 5, 6, 7]));
console.log('insertion', insertionSort([12, 11, 13, 5, 6, 7]));
console.log('selection', selectionSort([12, 11, 13, 5, 6, 7]));
console.log('merge', mergeSort([12, 11, 13, 5, 6, 7]));
console.log('quick', quickSort([10, 7, 8, 9, 1, 5]));
console.log('heap', heapSort([-5, -10, 0, -3, 8, 5, -1, 10]));
// console.log('radix', radixSort([-5, -10, 0, -3, 8, 5, -1, 10]));
console.log('bucket', bucketSort([7, 3, 2, 1, 0, 45, 9, 41]));
// console.log('shell', shellSort([12,34,54,2,3]));
console.log('tim', timSort([-5, -10, 0, -3, 8, 5, -1, 10]));
// console.log('phole', pholeSort([12,34,54,2,3]));
console.log('cycle', cycleSort([-5, -10, 0, -3, 8, 5, -1, 10]));
console.log('cocktail', cocktailSort([-5, -10, 0, -3, 8, 5, -1, 10]));
console.log('bitonicSort', bitonicSort([-5, -10, 0, -3, 8, 5, -1, 10]));