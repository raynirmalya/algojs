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
const LinkedList = require("./collections/linked-list/LinkedList.js");
const DoublyLinkedList = require("./collections/linked-list/DoublyLinkedList.js");
const Stack = require("./collections/stack");
const Queue = require("./collections/queue");
const Deque = require("./collections/deque");
const Matrix = require("./math/matrix");
const AlgoJs = require("./algo");

console.log('bubble', AlgoJs.bubbleSort([12, 11, 13, 5, 6, 7]));
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
console.log('*****',ll.insertAtStart(11));
ll.add(4);
console.log('*****',ll.add(12));
ll.add(91);
ll.add(21);
ll.add(88);
ll.add(27);
ll.add(45);
ll.add(77);
ll.insertAtEnd(34);
console.log('*****',ll.deleteNodeAt(1));
console.log(ll.deleteNode(34));
ll.deleteFirstNode();
ll.deleteLastNode();
ll.insertAt(8,3);
//ll.reverse();
let curr = ll.swap(2,5);
// ll.clear();
console.log(JSON.stringify(curr));
console.log(JSON.stringify(ll.sort()));
let frmll = new LinkedList();
//console.log(ll.indexOf(8), ll.length(), ll.isEmpty(), ll.getNodeAt(2), ll.getDataAt(2), ll.toArray(), '*****', frmll.fromArray([1,2,3]));

let dll = new DoublyLinkedList();
// ll.insertAtBeginning(11);
dll.add(4);
dll.add(12);
dll.add(91);
dll.add(21);
dll.add(88);
dll.add(27);
dll.add(45);
dll.add(77);
dll.insertAt(101,0);
dll.deleteNode(101);
dll.deleteNodeAt(2);
dll.reverse();
let currdll = dll.add(230);
let frmdll = new DoublyLinkedList();
console.log(dll.sort());

const stack = new Stack();
stack.push(3);
stack.push(5);
stack.push(8);
stack.pop();

const res = stack.reverse();
console.log(JSON.stringify(res));

const queue = new Queue();
queue.enqueue(31);
queue.enqueue(5);
queue.enqueue(81);
queue.dequeue();

const res1 = queue.enqueue(100);
console.log(JSON.stringify(queue.sort()));

const dq = new Deque();
dq.add(5);
dq.add(6);
dq.add(7);
dq.add(8);
console.log(dq.add(9));

// console.log(currdll, dll.getDataAt(1), dll.getNodeAt(1), ll.toArray(),
//  '*****', frmdll.fromArray([1,2,3]), '00000', frmdll.deleteLastNode(), '1111', frmdll.deleteFirstNode()
//  , dll.search(27), dll.isEmpty(), dll.length(), frmdll.clear(), frmdll.length()
//  );

const matrices1 = new Matrix([[1,1,1],[2,2,2],[3,3,3]]);
const matrices2 = new Matrix([[1,0,0],[0,1,0],[0,0,1]]);
const matrices3 = new Matrix([[1,0,0],[0,1,0],[0,0,1]]);
const matrices4 = new Matrix([[1,2],[3,4],[1,0]]);
const matrices5 = new Matrix([[0,5,2],[6,7,3]]);
console.log(matrices1.get(), matrices2.get(), matrices1.add(matrices2));
console.log('sum1', matrices1.add(matrices2));
console.log('sum2', matrices1.sub(matrices2.get()));
console.log(matrices3.isIdentityMatrix(), 
matrices1.isIdentityMatrix(), matrices3.isSparseMatrix(), 
matrices1.isEqual(matrices3), matrices1.getLowerTraingularMatrix(),
 matrices1.getUpperTraingularMatrix(), matrices1.getTransposeMatrix(),
  matrices1.mult(matrices1), matrices4.kroneckerProduct(matrices5));
