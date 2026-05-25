const hashValue = (text) => {
    let hash = 2166136261;

    for (let index = 0; index < text.length; index += 1) {
        hash ^= text.charCodeAt(index);
        hash = Math.imul(hash, 16777619);
    }

    return hash >>> 0;
};

class ConsistentHashing {
    constructor(replicas) {
        this.replicas = Number.isInteger(replicas) && replicas > 0 ? replicas : 32;
        this.ring = [];
    }

    addNode(node) {
        for (let replica = 0; replica < this.replicas; replica += 1) {
            this.ring.push({
                hash: hashValue(`${node}:${replica}`),
                node,
            });
        }

        this.ring.sort((first, second) => first.hash - second.hash);
        return this;
    }

    removeNode(node) {
        this.ring = this.ring.filter((entry) => entry.node !== node);
        return this;
    }

    getNode(key) {
        if (this.ring.length === 0) {
            return null;
        }

        const hash = hashValue(String(key));
        let left = 0;
        let right = this.ring.length - 1;

        while (left <= right) {
            const middle = Math.floor((left + right) / 2);

            if (this.ring[middle].hash < hash) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }

        return this.ring[left % this.ring.length].node;
    }
}

module.exports = ConsistentHashing;
