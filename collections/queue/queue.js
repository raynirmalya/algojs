const sortFn = require('../common/sort.js');
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    enqueue( data ) {
        let node = new Node( data );
        if( !this.head  ) {
          this.head = node;
          this.tail = node;
        } else {
          this.tail.next = node;
          this.tail = node;
        }
        return this.head;
     }

     dequeue() {
        if( this.head ) {
         let item = this.head;
         this.head = this.head.next;
         return item;
        } else { 
            return false;
        }
      }

      length() {
        let current, counter;
        [ current, counter ] = [ this.head, 0 ];
        while( current ) {
         counter++;
         current = current.next;
        }
        return counter;
      }
      peek() {
        if( this.head ) {
         return this.head.data;
        } else {
         return false;
        }
      }
      isEmpty() {
        return this.length() < 1;
      }
      sort() { 
        return sortFn(this.head);
      } 
}
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

module.exports = Queue;
