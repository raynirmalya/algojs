const defaultCompare = (firstValue, secondValue) => firstValue - secondValue;

class MonotonicQueue {
    constructor(compare) {
        this.compare = typeof compare === "function" ? compare : defaultCompare;
        this.items = [];
    }

    push(value) {
        while (
            this.items.length > 0 &&
            this.compare(this.items[this.items.length - 1], value) < 0
        ) {
            this.items.pop();
        }

        this.items.push(value);
        return this.peek();
    }

    pop(value) {
        if (this.items.length > 0 && this.items[0] === value) {
            return this.items.shift();
        }

        return null;
    }

    peek() {
        return this.items.length === 0 ? null : this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
        return true;
    }

    toArray() {
        return this.items.slice();
    }
}

module.exports = MonotonicQueue;
