const defaultCompare = (firstValue, secondValue) => firstValue - secondValue;

class MonotonicStack {
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

    pop() {
        return this.items.length === 0 ? null : this.items.pop();
    }

    peek() {
        return this.items.length === 0 ? null : this.items[this.items.length - 1];
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

module.exports = MonotonicStack;
