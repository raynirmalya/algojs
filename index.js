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
const pancakeSort = require("./sort/pancake.js");
const countSort = require("./sort/count.js");
const bogoSort = require("./sort/bogo.js");
const gnomeSort = require("./sort/gnome.js");
const stoogeSort = require("./sort/stooge.js");
const sleepSort = require("./sort/sleep.js");
const combSort = require("./sort/comb.js");
const beadSort = require("./sort/bead.js");
const linearSearch = require("./search/linear.js");
const binarySearch = require("./search/binary.js");
const jumpSearch = require("./search/jump.js");
const interpolationSearch = require("./search/interpolation.js");
const exponentialSearch = require("./search/exponential.js");
const fibonacciSearch = require("./search/fibonacci.js");
const LinkedList = require("./linked-list/LinkedList.js");

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
console.log('pancakeSort', pancakeSort([7,6,5,9,8,4,3,1,2,0]));
// console.log('bogoSort', bogoSort([7,6,5,9,8,4,3,1,2,0]));
console.log('gnomeSort', gnomeSort([7,6,5,9,8,4,3,1,2,0]));
console.log('stoogeSort', stoogeSort([ 2, 4, 5, 3, 1 ]));
// console.log('sleepSort', sleepSort([ 7,6,5,9,8,4,3,1,2,0 ]));
console.log('combSort', combSort([ 7,6,5,9,8,4,3,1,2,0 ]));
console.log('beadSort', beadSort([ 12, 11, 13, 5, 6, 7]));
console.log('linearSearch', linearSearch([ -5, -10, 0, -3, 8, 5, -1, 10], 5));
console.log('binarySearch', binarySearch([-5, -10, 0, -3, 8, 5, -1, 10], 5));
console.log('jumpSearch', jumpSearch([-5, -10, 0, -3, 8, 5, -1, 10].sort(), 5));
console.log('interpolationSearch', interpolationSearch([10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47], 18));
console.log('exponentialSearch', exponentialSearch([10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47], 18));
console.log('fibonacciSearch', fibonacciSearch([10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47], 18));
let ll = new LinkedList();
ll.insertAtBeginning(11);
ll.add(4);
ll.add(12);
ll.add(91);
ll.add(21);
ll.add(88);
ll.add(27);
ll.add(45);
ll.add(77);
ll.insertAtEnd(34);
ll.deleteNodeAt(1);
ll.deleteNode(34);
ll.deleteFirstNode();
ll.deleteLastNode();
let curr = ll.insertAt(8,3);
// ll.clear();
console.log(JSON.stringify(curr));
console.log(ll.indexOf(8), ll.length(), ll.isEmpty(), ll.getNodeAt(2), ll.getDataAt(2));
