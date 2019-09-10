class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    add(data){
        let node = new Node( data );
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        return this.head;
    }
    
    insertAt( item, pos ){
        let current = this.head;
        let counter = 1;
        let node = new Node( item );
        if( pos === 0 ) {
          this.head.prev = node;
          node.next = this.head;
          this.head = node;
        } else {
          while(current) {
           current = current.next;
           if( counter === pos ) {
             node.prev = current.prev
             current.prev.next = node
             node.next = current
             current.prev = node
           }
           counter++
         }
       }
       return this.head;
     }
    
     deleteNode( item ){
        let current = this.head;
        while( current ) {
          if( current.data === item ) {
            if( current === this.head && current === this.tail ) {
              this.head = null;
              this.tail = null;
            } else if ( current === this.head ) {
              this.head = this.head.next;
              this.head.prev = null;
            } else if ( current === this.tail ) {
              this.tail = this.tail.prev;
              this.tail.next = null;
            } else {
              current.prev.next = current.next;
              current.next.prev = current.prev;
            }
         }
         current = current.next;
        }
        return this.head;
      }
    
      deleteNodeAt( pos ){
        let current = this.head;
        let counter = 1;
        if( pos === 0 ) {
         this.head = this.head.next;
         this.head.prev = null;
        } else {
         while( current ) {
          current = current.next;
          if ( current === this.tail ) {
           this.tail = this.tail.prev;
           this.tail.next = null;
          } else if( counter === pos ) {
           current.prev.next = current.next;
           current.next.prev = current.prev;
           break;
          }
          counter++;
         }
        }
        return this.head;
      }
    
      reverse(){
        let current = this.head;
        let prev = null;
        while( current ){
         let next = current.next;
         current.next = prev;
         current.prev = next;
         prev = current;
         current = next;
        }
        this.tail = this.head;
        this.head = prev;
        return this.head;
      }
    
      swap( nodeOne, nodeTwo ){
        let current = this.head;
        let counter = 0;
        let firstNode;
        while( current !== null ) {
          if( counter === nodeOne ){
            firstNode = current;
          } else if( counter === nodeTwo ) {
            let temp = current.data;
            current.data = firstNode.data;
            firstNode.data = temp;
          }
          current = current.next;
          counter++;
        }
        return this.head;
     }
    
     getDataAt(index){
        if (index > -1) {
            let current = this.head;
            let i = 0;
            while ((current !== null) && (i < index)) {
                current = current.next;
                i++;          
            }
            return current !== null ? current.data : undefined;
        } else {
            return undefined;
        }
    }
    getNodeAt(index){
        if (index > -1) {
            let current = this.head;
            let i = 0;
            while ((current !== null) && (i < index)) {
                current = current.next;
                i++;          
            }
            return current !== null ? current : undefined;
        } else {
            return undefined;
        }
    }
    deleteLastNode() {
        if (!this.tail) {
            // No tail to delete.
            return null;
          }
      
          if (this.head === this.tail) {
            // There is only one node in linked list.
            const deletedTail = this.tail;
            this.head = null;
            this.tail = null;
      
            return deletedTail;
          }
      
          // If there are many nodes in linked list...
          const deletedTail = this.tail;
      
          this.tail = this.tail.previous;
          this.tail = null;
      
          return deletedTail;
    }
    deleteFirstNode() {
            if (!this.head) {
              return null;
            }
        
            const deletedHead = this.head;
        
            if (this.head.next) {
              this.head = this.head.next;
              this.head.previous = null;
            } else {
              this.head = null;
              this.tail = null;
            }
        
            return deletedHead;
    }
    search(data) { 
        var count = 0; 
        var current = this.head; 
        while (current != null) { 
            if (current.data === data) 
                return count; 
            count++; 
            current = current.next; 
        } 
        return false; 
    }
    
    toArray()  {
        const nodes = [];
    
        let currentNode = this.head;
        while (currentNode) {
          nodes.push(currentNode);
          currentNode = currentNode.next;
        }
    
        return nodes;
      }
     fromArray (values)  {
        values.forEach(value => this.add(value));
        return this.head;
      }
      clear(){ 
        this.head = null;
        return true; 
    } 
   isEmpty(){ 
        return this.length() === 0; 
    } 
   length() { 
        let counter = 0;
        let node = this.head;
        while (node) {
            counter++;
            node = node.next;
        }
        return counter; 
    } 
}

class Node{
    constructor(data, next = null, prev = null){
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}



module.exports = DoublyLinkedList;