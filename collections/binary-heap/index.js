const defaultCompare = (a, b) => a - b;

class BinaryHeap {
    constructor(compare) {
        this.compare = typeof compare === "function" ? compare : defaultCompare;
        this.items = [];
    }

    static from(values, compare) {
        const heap = new BinaryHeap(compare);
        values.forEach((value) => heap.push(value));
        return heap;
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    peek() {
        return this.isEmpty() ? null : this.items[0];
    }

    clear() {
        this.items = [];
        return true;
    }

    push(value) {
        this.items.push(value);
        this.bubbleUp(this.size() - 1);
        return this.peek();
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }

        const top = this.items[0];
        const last = this.items.pop();

        if (!this.isEmpty()) {
            this.items[0] = last;
            this.bubbleDown(0);
        }

        return top;
    }

    toArray() {
        return this.items.slice();
    }

    bubbleUp(index) {
        let currentIndex = index;

        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);

            if (this.compare(this.items[currentIndex], this.items[parentIndex]) >= 0) {
                break;
            }

            this.swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
        }
    }

    bubbleDown(index) {
        let currentIndex = index;
        const lastIndex = this.size() - 1;

        while (true) {
            const leftIndex = (currentIndex * 2) + 1;
            const rightIndex = leftIndex + 1;
            let smallestIndex = currentIndex;

            if (
                leftIndex <= lastIndex &&
                this.compare(this.items[leftIndex], this.items[smallestIndex]) < 0
            ) {
                smallestIndex = leftIndex;
            }

            if (
                rightIndex <= lastIndex &&
                this.compare(this.items[rightIndex], this.items[smallestIndex]) < 0
            ) {
                smallestIndex = rightIndex;
            }

            if (smallestIndex === currentIndex) {
                break;
            }

            this.swap(currentIndex, smallestIndex);
            currentIndex = smallestIndex;
        }
    }

    swap(firstIndex, secondIndex) {
        const temp = this.items[firstIndex];
        this.items[firstIndex] = this.items[secondIndex];
        this.items[secondIndex] = temp;
    }
}

module.exports = BinaryHeap;
