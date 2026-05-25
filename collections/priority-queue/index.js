const BinaryHeap = require("../binary-heap");

const defaultCompare = (a, b) => a.priority - b.priority;

class PriorityQueue {
    constructor(compare) {
        this.heap = new BinaryHeap(compare || defaultCompare);
    }

    size() {
        return this.heap.size();
    }

    isEmpty() {
        return this.heap.isEmpty();
    }

    clear() {
        return this.heap.clear();
    }

    enqueue(value, priority) {
        const entry =
            priority === undefined &&
            value &&
            typeof value === "object" &&
            Object.prototype.hasOwnProperty.call(value, "priority")
                ? value
                : { value, priority };

        this.heap.push(entry);
        return this.peek();
    }

    push(value, priority) {
        return this.enqueue(value, priority);
    }

    dequeue() {
        return this.heap.pop();
    }

    pop() {
        return this.dequeue();
    }

    peek() {
        return this.heap.peek();
    }

    toArray() {
        return this.heap.toArray();
    }
}

module.exports = PriorityQueue;
