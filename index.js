const bubbleSort = require("./sort/bubble.js");
const selectionSort = require("./sort/selection.js");
const insertionSort = require("./sort/insertion.js");
const mergeSort = require("./sort/merge.js");
// import bubbleSort from './bubble.js';

console.log('bubble', bubbleSort([12, 11, 13, 5, 6, 7]));
console.log('selection', selectionSort([12, 11, 13, 5, 6, 7]));
console.log('merge', mergeSort([12, 11, 13, 5, 6, 7]));