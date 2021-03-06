## Algorithms:
 
 This is js library for algorithms related to data structure.
 Till now we have published below algorthims.

## Install:

#### npm i @jsundefined/algojs

## How to use all methods through AlgoJS class:

```javascript
let Algojs = require('@jsundefined/algojs');
let sortedArr = Algojs.bubbleSort([12, 11, 13, 5, 6, 7]);
console.log('bubbleSort', sortedArr);
```
### Typescript / Angular:

```javascript
import Algojs from '@jsundefined/algojs';
let sortedArr = Algojs.bubbleSort([12, 11, 13, 5, 6, 7]);
console.log('bubbleSort', sortedArr);
 ```
 
## ** Newest Addition in Library ::: String Operations **

### String Methods:

* capitalize
* casefold
* center
* count
* expandtabs
* isUpperCase
* isLowerCase
* swapcase
* toUpperFirstLetter
* format
* formatter
* isPositive
* returnSign
* numberChangeWithChar
* isAlnum
* isDecimal
* isAlpha
* isDigit
* isIdentifier
* isSpace
* unicodeToChar
* binaryToDec
* decToBinary
* zfill
* jsonCleaner

## Matrix Methods:

* add
* sub
* mult
* transpose
* isIdentityMatrix
* isSparseMatrix
* isEqual
* getUpperTraingularMatrix
* getLowerTraingularMatrix

### Javascript:

```javascript
let Matrix = require('@jsundefined/algojs/math/matrix');
const matrices1 = new Matrix([[1,1,1],[2,2,2],[3,3,3]]);
const matrices2 = new Matrix([[1,0,0],[0,1,0],[0,0,1]]);
const matrices3 = new Matrix([[1,0,0],[0,1,0],[0,0,1]]);
const matrices4 = new Matrix([[1,2],[3,4],[1,0]]);
const matrices5 = new Matrix([[0,5,2],[6,7,3]]);
console.log(matrices3.isIdentityMatrix(), 
matrices1.isIdentityMatrix(), matrices3.isSparseMatrix(), 
matrices1.isEqual(matrices3), matrices1.getLowerTraingularMatrix(),
 matrices1.getUpperTraingularMatrix(), matrices1.getTransposeMatrix(),
  matrices1.mult(matrices1), matrices4.kroneckerProduct(matrices5));
```
### Typescript / Angular:

```javascript
import Matrix from '@jsundefined/algojs/math/matrix';
const matrices1 = new Matrix([[1,1,1],[2,2,2],[3,3,3]]);
const matrices2 = new Matrix([[1,0,0],[0,1,0],[0,0,1]]);
const matrices3 = new Matrix([[1,0,0],[0,1,0],[0,0,1]]);
const matrices4 = new Matrix([[1,2],[3,4],[1,0]]);
const matrices5 = new Matrix([[0,5,2],[6,7,3]]);
console.log(matrices3.isIdentityMatrix(), 
matrices1.isIdentityMatrix(), matrices3.isSparseMatrix(), 
matrices1.isEqual(matrices3), matrices1.getLowerTraingularMatrix(),
 matrices1.getUpperTraingularMatrix(), matrices1.getTransposeMatrix(),
  matrices1.mult(matrices1), matrices4.kroneckerProduct(matrices5));
```

## Sorting

* Bead Sort, Bitonic Sort, Bogo Sort, Bubble Sort, Bucket Sort, Cocktail Sort,  Comb Sort,  Count Sort,  Cycle Sort,  Gnome Sort,  Heap Sort,  Insertion Sort,  Merge Sort,  Pancake Sort,  Pigeonhole Sort,  Quick Sort,  Radix Sort,  Selection Sort,  Shell Sort,  Sleep Sort,  Stooge Sort,  Strand Sort,  Swap Sort,  Tim Sort

## How to use sort methods:

### Javascript:

```javascript
let bubbleSort = require('@jsundefined/algojs/sort/bubble.js');
let sortedArr = bubbleSort([12, 11, 13, 5, 6, 7]);
console.log('bubbleSort', sortedArr);
```
### Typescript / Angular:

```javascript
import bubbleSort from '@jsundefined/algojs/sort/bubble';
let sortedArr = bubbleSort([12, 11, 13, 5, 6, 7]);
console.log('bubbleSort', sortedArr);
 ```
## Searching

 * Binary
 * Exponential
 * Fibonacci
 * Interpolation
 * Jump
 * Linear
 
## How to use search methods:
  
### Javascript:

```javascript
let linearSearch = require('@jsundefined/algojs/search/linear.js');
let indexOfSearchResult = linearSearch([ -5, -10, 0, -3, 8, 5, -1, 10], 5); // if -1 means not found
console.log('bubbleSort', indexOfSearchResult);
```
### Typescript / Angular:

```javascript
import linearSearch from '@jsundefined/algojs/search/linear';
let indexOfSearchResult = linearSearch([ -5, -10, 0, -3, 8, 5, -1, 10], 5); // if -1 means not found
console.log('bubbleSort', indexOfSearchResult);
```


## Collection
 
 * Queue
 * Deque
 * Linked List
 * Stack

## How to use collection classes:
 
### Javascript:

```javascript
let LinkedList = require('@jsundefined/algojs/collections/linked-list/LinkedList.js');
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
ll.insertAt(8,3);
ll.reverse();
let curr = ll.swap(2,5);
console.log(JSON.stringify(curr));
console.log(JSON.stringify(ll.sort()));
```
### Typescript / Angular:

```javascript
import LinkedList from '@jsundefined/algojs/collections/linked-list/LinkedList';
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
ll.insertAt(8,3);
ll.reverse();
let curr = ll.swap(2,5);
console.log(JSON.stringify(curr));
console.log(JSON.stringify(ll.sort()));
```
## Single Linked List:
|Methods | Uses| Paramaters | Return|
|---     | ---|---     | ---|
|add | inserting at end of linked list| one parameter, data to be added |  full list|
|insertAtEnd | inserting data at end of linked list| one parameter, data to be added |  full list|
|insertAtStart | inserting data at start of linked list| one parameter, data to be added |  full list|
|insertAt | inserting data at particular index of linked list| 2 parameters, (data to be added, index) |  full list|
|deleteNodeAt | deleting data at particular index of linked list| 1 parameter, index |  deleted node|
|deleteNode | deleting data of linked list| 1 parameter, data |  full list|
|deleteFirstNode | deleting first node of linked list| no parameters |  full list|
|deleteLastNode | deleting last data of linked list| no parameters |  full list|
|indexOf | indexOf a particular data in linked list| 1 parameter, data |  index else -1 |
|search | index of a particular data in linked list| 1 parameter, data |  index else false|
|getDataAt | getting data of a node at particular index of linked list| 1 parameter, index |  data else null|
|getNodeAt | getting node at particular index of linked list| 1 parameter, index |  data else null|
|clear | clears full linked list| no parameters |  true |
|isEmpty | checks linked list is empty or not| no parameters |  true or false |
|length | get length of a linked list| no parameters |  length |
|reverse | reverse the linked list| no parameters |  full list |
|swap | swap two nodes the linked list| 2 parameters, 2 nodes index |  full list |
|toArray | creates array from linked list| no parameters |  array |
|fromArray | creates linked list from array| no parameters |  linked list |
|sort | sorts linked list| no parameters |  linked list |


## Doubly Linked List:
|Methods | Uses| Paramaters | Return|
|---     | ---|---     | ---|
|add | inserting at end of linked list| one parameter, data to be added |  full list|
|insertAt | inserting data at particular index of linked list| 2 parameters, (data to be added, index) |  full list|
|deleteNodeAt | deleting data at particular index of linked list| 1 parameter, index |  deleted node|
|deleteNode | deleting data of linked list| 1 parameter, data |  full list|
|deleteFirstNode | deleting first node of linked list| no parameters |  full list|
|deleteLastNode | deleting last data of linked list| no parameters |  full list|
|search | index of a particular data in linked list| 1 parameter, data |  index else false|
|getDataAt | getting data of a node at particular index of linked list| 1 parameter, index |  data else null|
|getNodeAt | getting node at particular index of linked list| 1 parameter, index |  data else null|
|clear | clears full linked list| no parameters |  true |
|isEmpty | checks linked list is empty or not| no parameters |  true or false |
|length | get length of a linked list| no parameters |  length |
|reverse | reverse the linked list| no parameters |  full list |
|swap | swap two nodes the linked list| 2 parameters, 2 nodes index |  full list |
|toArray | creates array from linked list| no parameters |  array |
|fromArray | creates linked list from array| no parameters |  linked list |
|sort | sorts linked list| no parameters |  linked list |


## Stack:
|Methods | Uses| Paramaters | Return|
|---     | ---|---     | ---|
|push | push data into stack| one parameter, data |  full data |
|pop | pop from stack| no parameters |  data or false |
|peek | peeks from stack| no parameters |  data or null |
|clear | clears full stack| no parameters |  true |
|isEmpty | checks stack is empty or not| no parameters |  true or false |
|length | get length of a stack| no parameters |  length |
|reverse | reverse the stack| no parameters |  full stack |
|search | index of a particular data in stack| 1 parameter, data |  index else false|
|sort | sorts stack| no parameters |  stack |


## Queue:
|Methods | Uses| Paramaters | Return|
|---     | ---|---     | ---|
|enqueue | push data into queue| one parameter, data |  full data |
|dequeue | pop from queue| no parameters |  data or false |
|peek | peeks from queue| no parameters |  data or null |
|isEmpty | checks queue is empty or not| no parameters |  true or false |
|length | get length of a queue| no parameters |  length |
|sort | sorts queue| no parameters |  queue |

## Deque:
|Methods | Uses| Paramaters | Return|
|---     | ---|---     | ---|
|add or offer | add data into queue| one parameter, data |  full list |
|addFirst or offerFirst | add first postion of queue| one parameter, data |  full list |
|addLast or offerLast| add end of queue| one parameter, data |  full list |
|removeFirst | removes from first| no parameters |  full list |
|removeLast | removes from last| no parameters |  full list |
