const bubbleSort = require("./sort/bubble.js");
const selectionSort = require("./sort/selection.js");
const insertionSort = require("./sort/insertion.js");
// import bubbleSort from './bubble.js';

console.log('bubble', bubbleSort([3,5,1,7,8,9]));
console.log('selection', selectionSort([3,5,1,7,8,9]));
console.log('insertion', insertionSort([3,5,1,7,8,9]));