class WelfordOnlineVariance {
    constructor() {
        this.count = 0;
        this.mean = 0;
        this.m2 = 0;
    }

    add(value) {
        this.count += 1;
        const delta = value - this.mean;
        this.mean += delta / this.count;
        const nextDelta = value - this.mean;
        this.m2 += delta * nextDelta;
        return this;
    }

    variance() {
        return this.count > 1 ? this.m2 / (this.count - 1) : 0;
    }

    populationVariance() {
        return this.count > 0 ? this.m2 / this.count : 0;
    }
}

module.exports = WelfordOnlineVariance;
