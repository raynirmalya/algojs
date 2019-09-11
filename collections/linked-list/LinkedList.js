const sortFn = require('../common/sort.js');
class LinkedList{
    constructor(data){
        this.head = data || null;
    }
   insertAtEnd(data) {
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            return this.head;
        }
        
        let tail = this.head;
        while(tail.next !== null && tail.next !== undefined){
            tail = tail.next;
        }
        tail.next = newNode;
        return this.head;
    }
    
   add(data)  { 
        let newNode = new Node(data); 
        let current; 
        if (this.head === null) {
            this.head = newNode; 
        } else { 
            current = this.head; 
            while (current.next) { 
                current = current.next; 
            } 
            current.next = newNode; 
        } 
    } 
    
   insertAt(data, index)  { 
        if (index > 0 && this.length() === 0) {
            return false; 
        } else { 
            let node = new Node(data); 
            let curr, prev; 
            curr = this.head; 
    
            if (index === 0) { 
                node.next = head; 
                this.head = node; 
            } else { 
                curr = this.head; 
                var it = 0; 
                while (it < index) { 
                    it++; 
                    prev = curr; 
                    curr = curr.next; 
                }  
                node.next = curr; 
                prev.next = node; 
            }
        } 
        return this.head;
    } 
    
   deleteNodeAt(index)   { 
        if (index > 0 && this.length() === 0) {
            return -1; 
        } else { 
            let curr, prev, it = 0; 
            curr = this.head; 
            prev = curr;  
            if (index === 0) { 
                this.head = curr.next; 
            } else { 
                while (it < index) { 
                    it++; 
                    prev = curr; 
                    curr = curr.next; 
                } 
                prev.next = curr.next; 
            } 
            return this.head; 
        } 
    } 
    
   deleteNode(data) { 
        var current = this.head; 
        var prev = null; 
        while (current != null) { 
            if (current.data === data) { 
                if (prev === null) { 
                    this.head = current.next; 
                } else { 
                    prev.next = current.next; 
                } 
                return current.data; 
            } 
            prev = current; 
            current = current.next; 
        } 
        return this.head; 
    } 
    
   indexOf(data) { 
        var count = 0; 
        var current = this.head; 
        while (current != null) { 
            if (current.data === data) 
                return count; 
            count++; 
            current = current.next; 
        } 
        return -1; 
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
    
   getNextNodeAt(index){
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
               return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }
    
   getDataAt(index){
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
               return node.data;
            }
            counter++;
            node = node.next;
        }
        return null;
    }
   getNodeAt(index){
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
               return new Node(node.data, node) ;
            }
            counter++;
            node = node.next;
        }
        return null;
    }
    
    
   deleteFirstNode(){
        if(!this.head){
            return;
        }
        this.head = this.head.next;
        return this.head;
    }
    
   deleteLastNode(){
        if(!this.head){
            return null;
        }
        if(!this.head.next){
            this.head = null;
            return;
        }
       let previous = this.head;
       let tail = this.head.next;
       
       while(tail.next !== null){
           previous = tail;
           tail = tail.next;
       }
       
       previous.next = null;
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
    
   reverse(){
        let current = this.head;
        let prev = null;
        let next;
        while(current !== null) {
          next = current.next
          current.next = prev
          prev = current
          current = next
        }
        this.head = prev
        return this.head;
      }
     swap( nodeOne, nodeTwo )  {
        let current = this.head;
        let counter = 0;
        let firstNode;
        while( current !== null ) {
          current = current.next;
          if( counter =(nodeOne - 1) ){
            firstNode = current;
          } else if( counter =(nodeTwo - 1) ) {
            let temp = current.data;
            current.data = firstNode.data;
            firstNode.data = temp;
          }
          counter++;
        }
        return this.head;
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
     insertAtBeginning(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }
    sort() { 
        return sortFn(this.head);
    } 
}

class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}




module.exports = LinkedList;