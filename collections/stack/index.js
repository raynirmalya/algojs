const sortFn = require('../common/sort.js');
class Stack {
    constructor() {
        this.top = null;
    }
    push( data ){
        let node = new Node( data );
        if( this.top ) {
          node.next = this.top;
          this.top = node;
        } else {
          this.top = node;
        }
        return this.top;
     }
     pop() {
        if( this.top ) {
          let item = this.top;
          this.top = this.top.next;
          return item.data;
        } else {
          return null;
        }
      }
      peek() {
        if( this.top ) {
         return this.top.data;
        } else {
         return null;
        }
      }
      reverse() {
        let current = this.top;
        let prev = null;
        while( current ) {
          let next = current.next;
          current.next = prev;
          prev = current;
          current = next;
        }
        this.top = prev;
        return this.top;
      }
      length() {
        let current = this.top;
        let counter = 0;
        while( current ) {
         counter++;
         current = current.next;
        }
        return counter;
      }
      search( item ) {
        let current = this.top;
        while( current ) {
         if( current.data === item ) return true;
         current = current.next;
        }
        return false;
      }
      isEmpty() {
        return this.length > 1;
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

module.exports = Stack;