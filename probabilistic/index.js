const BloomFilter = require("./bloom-filter");
const CountMinSketch = require("./count-min-sketch");
const ConsistentHashing = require("./consistent-hashing");
const HyperLogLog = require("./hyperloglog");
const misraGries = require("./misra-gries");
const AliasMethod = require("./alias-method");

module.exports = {
    BloomFilter,
    CountMinSketch,
    ConsistentHashing,
    HyperLogLog,
    misraGries,
    AliasMethod,
};
