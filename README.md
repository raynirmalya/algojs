## Algorithms:
 
 This is js library for algorithms related to data structure.
 Till now we have published below algorthims.
 
## Sorting

* Bead Sort	
* Bitonic Sort
* Bogo Sort	
* Bubble Sort
* Bucket Sort
* Cocktail Sort
* Comb Sort
* Count Sort
* Cycle Sort
* Gnome Sort
* Heap Sort
* Insertion Sort
* Merge Sort
* Pancake Sort
* Pigeonhole Sort
* Quick Sort
* Radix Sort
* Selection Sort
* Shell Sort
* Sleep Sort
* Stooge Sort
* Strand Sort
* Swap Sort
* Tim Sort

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
 ````
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

## How to use collection methods:
 
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
