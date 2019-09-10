class LinkedList{
    constructor(){
        this.head = null;
    }
}

class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

LinkedList.prototype.insertAtBeginning = (data) =>{
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
}

LinkedList.prototype.insertAtEnd = (data) =>{
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

LinkedList.prototype.add = (data) => { 
    let newNode = new Node(data); 
    let current; 
    if (this.head == null) {
        this.head = newNode; 
    } else { 
        current = this.head; 
        while (current.next) { 
            current = current.next; 
        } 
        current.next = newNode; 
    } 
} 

LinkedList.prototype.insertAt = (data, index) => { 
    if (index > 0 && LinkedList.prototype.length() === 0) {
        return false; 
    } else { 
        let node = new Node(data); 
        let curr, prev; 
        curr = this.head; 

        if (index == 0) { 
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

LinkedList.prototype.deleteNodeAt = (index)  => { 
    if (index > 0 && LinkedList.prototype.length() === 0) {
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

LinkedList.prototype.deleteNode = (data) =>{ 
    var current = this.head; 
    var prev = null; 
    while (current != null) { 
        if (current.data === data) { 
            if (prev == null) { 
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

LinkedList.prototype.indexOf= (data) =>{ 
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

LinkedList.prototype.getNextNodeAt = (index)=>{
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

LinkedList.prototype.getDataAt = (index)=>{
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
LinkedList.prototype.getNodeAt = (index)=>{
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


LinkedList.prototype.deleteFirstNode = ()=>{
    if(!this.head){
        return;
    }
    this.head = this.head.next;
    return this.head;
}

LinkedList.prototype.deleteLastNode = function(){
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
LinkedList.prototype.clear = ()=>{ 
    this.head = null;
    return true; 
} 
LinkedList.prototype.isEmpty = ()=>{ 
    return LinkedList.prototype.length() === 0; 
} 
LinkedList.prototype.length = () => { 
    let counter = 0;
    let node = this.head;
    while (node) {
        counter++;
        node = node.next;
    }
    return counter; 
} 
module.exports = LinkedList;