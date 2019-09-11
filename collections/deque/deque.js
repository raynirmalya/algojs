const sortFn = require('../common/sort.js');
class Deque {
    constructor() {
        this.head = [];
    }

    add(data) {
        this.head.push(data);
        return this.head;
    }
    addFirst(data) {
        this.head.unshift(data);
        return this.head;
    }
    addLast(data) {
        this.head.unshift(data);
        return this.head;
    }

    offer(data) {
        this.head.push(data);
        return true;
    }
    offerFirst(data) {
        this.head.unshift(data);
        return true;
    }
    offerLast(data) {
        this.head.unshift(data);
        return true;
    }
    push(data) {
        this.head.push(data);
        return this.head;
    }
    pop() {
        return this.head.pop();
    }

    removeFirst(data) {
        this.head.splice(0,1);
        return this.head;
    }
    removeLast() {
        this.head.splice(this.head.length - 1,1);
        return this.head;
    }
}

module.exports = Deque;