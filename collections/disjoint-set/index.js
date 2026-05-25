class DisjointSetUnion {
    constructor(values) {
        this.parents = new Map();
        this.sizes = new Map();

        (values || []).forEach((value) => this.makeSet(value));
    }

    makeSet(value) {
        if (!this.parents.has(value)) {
            this.parents.set(value, value);
            this.sizes.set(value, 1);
        }

        return value;
    }

    find(value) {
        if (!this.parents.has(value)) {
            this.makeSet(value);
        }

        const parent = this.parents.get(value);

        if (parent !== value) {
            const root = this.find(parent);
            this.parents.set(value, root);
            return root;
        }

        return parent;
    }

    union(firstValue, secondValue) {
        let firstRoot = this.find(firstValue);
        let secondRoot = this.find(secondValue);

        if (firstRoot === secondRoot) {
            return firstRoot;
        }

        if (this.sizes.get(firstRoot) < this.sizes.get(secondRoot)) {
            const temp = firstRoot;
            firstRoot = secondRoot;
            secondRoot = temp;
        }

        this.parents.set(secondRoot, firstRoot);
        this.sizes.set(firstRoot, this.sizes.get(firstRoot) + this.sizes.get(secondRoot));

        return firstRoot;
    }

    connected(firstValue, secondValue) {
        return this.find(firstValue) === this.find(secondValue);
    }

    getSize(value) {
        return this.sizes.get(this.find(value));
    }

    count() {
        let groups = 0;

        this.parents.forEach((parent, value) => {
            if (parent === value) {
                groups += 1;
            }
        });

        return groups;
    }

    groups() {
        const groupedValues = new Map();

        this.parents.forEach((_, value) => {
            const root = this.find(value);

            if (!groupedValues.has(root)) {
                groupedValues.set(root, []);
            }

            groupedValues.get(root).push(value);
        });

        return groupedValues;
    }
}

module.exports = DisjointSetUnion;
