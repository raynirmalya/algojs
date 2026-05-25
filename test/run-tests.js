const assert = require("node:assert/strict");

const AVLTree = require("../collections/avl-tree");
const Treap = require("../collections/treap");
const IntervalTree = require("../collections/interval-tree");
const BinaryHeap = require("../collections/binary-heap");
const PriorityQueue = require("../collections/priority-queue");
const DisjointSetUnion = require("../collections/disjoint-set");
const Trie = require("../collections/trie");
const SegmentTree = require("../collections/segment-tree");
const FenwickTree = require("../collections/fenwick-tree");
const SparseTable = require("../collections/sparse-table");
const MonotonicQueue = require("../collections/monotonic-queue");
const MonotonicStack = require("../collections/monotonic-stack");
const BinaryTrie = require("../collections/binary-trie");
const slidingWindowMaximum = require("../arrays/sliding-window-maximum");
const PrefixSum = require("../arrays/prefix-sum");
const DifferenceArray = require("../arrays/difference-array");
const quickSelect = require("../arrays/quick-select");
const medianOfMedians = require("../arrays/median-of-medians");
const Graph = require("../graph/Graph");
const WeightedGraph = require("../graph/WeightedGraph");
const breadthFirstSearch = require("../graph/breadth-first-search");
const depthFirstSearch = require("../graph/depth-first-search");
const topologicalSort = require("../graph/topological-sort");
const directedCycleDetection = require("../graph/directed-cycle-detection");
const undirectedCycleDetection = require("../graph/undirected-cycle-detection");
const connectedComponents = require("../graph/connected-components");
const dijkstra = require("../graph/dijkstra");
const bellmanFord = require("../graph/bellman-ford");
const floydWarshall = require("../graph/floyd-warshall");
const aStar = require("../graph/a-star");
const kruskalMST = require("../graph/kruskal");
const primMST = require("../graph/prim");
const tarjanSCC = require("../graph/tarjan-scc");
const articulationPoints = require("../graph/articulation-points");
const bridges = require("../graph/bridges");
const bipartiteCheck = require("../graph/bipartite-check");
const dinicMaxFlow = require("../graph/dinic");
const hopcroftKarp = require("../graph/hopcroft-karp");
const kosarajuSCC = require("../graph/kosaraju-scc");
const johnsonShortestPaths = require("../graph/johnson");
const edmondsKarp = require("../graph/edmonds-karp");
const prefixFunction = require("../strings/prefix-function");
const kmpSearch = require("../strings/kmp");
const zAlgorithm = require("../strings/z-algorithm");
const rabinKarp = require("../strings/rabin-karp");
const AhoCorasick = require("../strings/aho-corasick");
const suffixArray = require("../strings/suffix-array");
const lcpArray = require("../strings/lcp-array");
const manacher = require("../strings/manacher");
const boyerMoore = require("../strings/boyer-moore");
const RollingHash = require("../strings/rolling-hash");
const sieveOfEratosthenes = require("../math/number-theory/sieve-of-eratosthenes");
const extendedEuclidean = require("../math/number-theory/extended-euclidean");
const fastModularExponentiation = require("../math/number-theory/fast-modular-exponentiation");
const modularInverse = require("../math/number-theory/modular-inverse");
const longestIncreasingSubsequence = require("../dp/longest-increasing-subsequence");
const editDistance = require("../dp/edit-distance");
const longestCommonSubsequence = require("../dp/longest-common-subsequence");
const kadane = require("../dp/kadane");
const zeroOneKnapsack = require("../dp/zero-one-knapsack");
const coinChange = require("../dp/coin-change");
const subsetSum = require("../dp/subset-sum");

const tests = [];

const addTest = (name, run) => {
    tests.push({ name, run });
};

addTest("root package import stays quiet and exports the new API surface", () => {
    const originalLog = console.log;
    const logCalls = [];

    console.log = (...args) => {
        logCalls.push(args);
    };

    const AlgoJs = require("..");

    console.log = originalLog;

    assert.deepStrictEqual(logCalls, []);
    assert.equal(typeof AlgoJs.bubbleSort, "function");
    assert.equal(typeof AlgoJs.AVLTree, "function");
    assert.equal(typeof AlgoJs.Treap, "function");
    assert.equal(typeof AlgoJs.BinaryHeap, "function");
    assert.equal(typeof AlgoJs.SparseTable, "function");
    assert.equal(typeof AlgoJs.Graph, "function");
    assert.equal(typeof AlgoJs.kosarajuSCC, "function");
    assert.equal(typeof AlgoJs.topologicalSort, "function");
    assert.equal(typeof AlgoJs.AhoCorasick, "function");
    assert.equal(typeof AlgoJs.RollingHash, "function");
    assert.equal(typeof AlgoJs.kmpSearch, "function");
    assert.equal(typeof AlgoJs.subsetSum, "function");
    assert.equal(typeof AlgoJs.kadane, "function");
});

addTest("AVLTree keeps values balanced and ordered", () => {
    const tree = new AVLTree();
    [30, 20, 40, 10, 25, 35, 50].forEach((value) => tree.insert(value));

    assert.equal(tree.has(25), true);
    assert.deepStrictEqual(tree.inOrder(), [10, 20, 25, 30, 35, 40, 50]);

    tree.remove(20);
    assert.deepStrictEqual(tree.inOrder(), [10, 25, 30, 35, 40, 50]);
});

addTest("Treap keeps BST ordering with heap priorities", () => {
    const priorities = [0.2, 0.8, 0.1, 0.9];
    let pointer = 0;
    const tree = new Treap(undefined, () => {
        const priority = priorities[pointer];
        pointer += 1;
        return priority;
    });

    [10, 5, 15, 12].forEach((value) => tree.insert(value));

    assert.deepStrictEqual(tree.inOrder(), [5, 10, 12, 15]);
    tree.remove(5);
    assert.deepStrictEqual(tree.inOrder(), [10, 12, 15]);
});

addTest("IntervalTree finds single and multiple overlapping intervals", () => {
    const tree = new IntervalTree();
    tree.insert(15, 20, "a");
    tree.insert(10, 30, "b");
    tree.insert(17, 19, "c");

    assert.deepStrictEqual(tree.searchOverlap(18, 18), { start: 15, end: 20, value: "a" });
    assert.deepStrictEqual(
        tree.searchAllOverlaps(18, 18).map((interval) => interval.value).sort(),
        ["a", "b", "c"]
    );
});

addTest("BinaryHeap keeps values ordered by comparator", () => {
    const heap = new BinaryHeap();
    [5, 1, 7, 3].forEach((value) => heap.push(value));

    assert.equal(heap.peek(), 1);
    assert.deepStrictEqual([heap.pop(), heap.pop(), heap.pop(), heap.pop()], [1, 3, 5, 7]);
    assert.equal(heap.pop(), null);
});

addTest("PriorityQueue dequeues by priority", () => {
    const queue = new PriorityQueue();
    queue.enqueue("slow", 5);
    queue.enqueue("fast", 1);
    queue.enqueue("medium", 3);

    assert.deepStrictEqual(queue.dequeue(), { value: "fast", priority: 1 });
    assert.deepStrictEqual(queue.dequeue(), { value: "medium", priority: 3 });
    assert.deepStrictEqual(queue.dequeue(), { value: "slow", priority: 5 });
});

addTest("DisjointSetUnion merges groups and reports connectivity", () => {
    const dsu = new DisjointSetUnion(["a", "b", "c"]);
    dsu.union("a", "b");

    assert.equal(dsu.connected("a", "b"), true);
    assert.equal(dsu.connected("a", "c"), false);
    assert.equal(dsu.getSize("a"), 2);
    assert.equal(dsu.count(), 2);
});

addTest("Trie inserts, queries, deletes, and enumerates words by prefix", () => {
    const trie = new Trie();
    trie.insert("algo");
    trie.insert("algol");
    trie.insert("algebra");

    assert.equal(trie.has("algo"), true);
    assert.equal(trie.startsWith("alg"), true);
    assert.deepStrictEqual(trie.getWordsWithPrefix("algo"), ["algo", "algol"]);

    trie.delete("algo");
    assert.equal(trie.has("algo"), false);
    assert.equal(trie.has("algol"), true);
});

addTest("SegmentTree supports range queries and point updates", () => {
    const tree = new SegmentTree([2, 4, 6, 8, 10]);

    assert.equal(tree.query(1, 3), 18);
    tree.update(2, 7);
    assert.equal(tree.query(1, 3), 19);
});

addTest("FenwickTree supports prefix, range, and set operations", () => {
    const tree = new FenwickTree([1, 2, 3, 4, 5]);

    assert.equal(tree.query(2), 6);
    assert.equal(tree.rangeQuery(1, 3), 9);

    tree.set(2, 10);
    assert.equal(tree.query(2), 13);
    assert.equal(tree.rangeQuery(1, 3), 16);
});

addTest("SparseTable supports immutable range queries", () => {
    const table = new SparseTable([7, 3, 9, 1, 6]);
    assert.equal(table.query(1, 3), 1);
});

addTest("MonotonicQueue keeps the current maximum at the front", () => {
    const queue = new MonotonicQueue();
    queue.push(2);
    queue.push(1);
    queue.push(5);

    assert.equal(queue.peek(), 5);
    queue.pop(5);
    assert.equal(queue.peek(), null);
});

addTest("MonotonicStack keeps elements in monotonic order", () => {
    const stack = new MonotonicStack();
    stack.push(2);
    stack.push(1);
    stack.push(4);

    assert.deepStrictEqual(stack.toArray(), [4]);
});

addTest("BinaryTrie supports XOR queries", () => {
    const trie = new BinaryTrie();
    trie.insert(3);
    trie.insert(10);
    trie.insert(5);

    assert.equal(trie.has(10), true);
    assert.deepStrictEqual(trie.maxXor(6), { value: 10, xor: 12 });
});

addTest("SlidingWindowMaximum returns the max for each window", () => {
    assert.deepStrictEqual(slidingWindowMaximum([1, 3, -1, -3, 5, 3, 6, 7], 3), [3, 3, 5, 5, 6, 7]);
});

addTest("PrefixSum answers static range queries", () => {
    const prefix = new PrefixSum([2, 4, 6, 8]);
    assert.equal(prefix.query(1, 3), 18);
    assert.equal(prefix.prefixAt(2), 12);
});

addTest("DifferenceArray applies range increments efficiently", () => {
    const difference = new DifferenceArray([1, 2, 3, 4]);
    assert.deepStrictEqual(difference.rangeIncrement(1, 3, 2), [1, 4, 5, 6]);
});

addTest("quickSelect returns the nth smallest value", () => {
    assert.equal(quickSelect([9, 1, 7, 3, 5], 2), 5);
});

addTest("medianOfMedians deterministically selects the target value", () => {
    assert.equal(medianOfMedians([12, 3, 5, 7, 4, 19, 26], 3), 7);
});

addTest("breadthFirstSearch traverses level by level", () => {
    const graph = new Graph();
    graph.addEdge("A", "B").addEdge("A", "C").addEdge("B", "D");

    const result = breadthFirstSearch(graph, "A");

    assert.deepStrictEqual(result.order, ["A", "B", "C", "D"]);
    assert.equal(result.parents.get("D"), "B");
    assert.equal(result.distances.get("D"), 2);
});

addTest("depthFirstSearch traverses depth-first with parent tracking", () => {
    const graph = new Graph();
    graph.addEdge("A", "B").addEdge("A", "C").addEdge("B", "D");

    const result = depthFirstSearch(graph, "A");

    assert.deepStrictEqual(result.order, ["A", "B", "D", "C"]);
    assert.equal(result.parents.get("D"), "B");
});

addTest("topologicalSort orders a DAG", () => {
    const graph = new Graph(true);
    graph.addEdge("cook", "eat").addEdge("shop", "cook").addEdge("plan", "shop");

    assert.deepStrictEqual(topologicalSort(graph), ["plan", "shop", "cook", "eat"]);
});

addTest("cycle detection finds directed and undirected cycles", () => {
    const directed = new Graph(true);
    directed.addEdge("A", "B").addEdge("B", "C").addEdge("C", "A");

    const undirected = new Graph();
    undirected.addEdge("A", "B").addEdge("B", "C").addEdge("C", "A");

    assert.equal(directedCycleDetection(directed), true);
    assert.equal(undirectedCycleDetection(undirected), true);
});

addTest("connectedComponents groups vertices by component", () => {
    const graph = new Graph();
    graph.addEdge("A", "B").addEdge("C", "D").addVertex("E");

    const result = connectedComponents(graph).map((component) => component.slice().sort());
    result.sort((first, second) => first[0].localeCompare(second[0]));

    assert.deepStrictEqual(result, [["A", "B"], ["C", "D"], ["E"]]);
});

addTest("dijkstra returns shortest path distances on weighted graphs", () => {
    const graph = new WeightedGraph(true);
    graph
        .addEdge("A", "B", 4)
        .addEdge("A", "C", 1)
        .addEdge("C", "B", 2)
        .addEdge("B", "D", 1)
        .addEdge("C", "D", 5);

    const result = dijkstra(graph, "A");

    assert.equal(result.distances.get("D"), 4);
    assert.equal(result.previous.get("D"), "B");
    assert.equal(result.previous.get("B"), "C");
});

addTest("bellmanFord handles negative edges without negative cycles", () => {
    const graph = new WeightedGraph(true);
    graph.addEdge("S", "A", 4).addEdge("S", "B", 5).addEdge("A", "B", -2).addEdge("B", "T", 3);

    const result = bellmanFord(graph, "S");

    assert.equal(result.distances.get("T"), 5);
    assert.equal(result.hasNegativeCycle, false);
});

addTest("floydWarshall computes all-pairs shortest paths", () => {
    const graph = new WeightedGraph(true);
    graph.addEdge("A", "B", 3).addEdge("B", "C", 4).addEdge("A", "C", 10);

    const result = floydWarshall(graph);

    assert.equal(result.distances.get("A").get("C"), 7);
});

addTest("aStar finds a shortest path with a heuristic", () => {
    const graph = new WeightedGraph(true);
    graph.addEdge("A", "B", 1).addEdge("B", "D", 2).addEdge("A", "C", 2).addEdge("C", "D", 1);

    const result = aStar(graph, "A", "D", () => 0);

    assert.equal(result.distance, 3);
    assert.deepStrictEqual(result.path, ["A", "B", "D"]);
});

addTest("kruskalMST returns a minimum spanning tree", () => {
    const graph = new WeightedGraph();
    graph
        .addEdge("A", "B", 1)
        .addEdge("A", "C", 5)
        .addEdge("B", "C", 2)
        .addEdge("B", "D", 4)
        .addEdge("C", "D", 3);

    const result = kruskalMST(graph);

    assert.equal(result.totalWeight, 6);
    assert.deepStrictEqual(
        result.edges.map((edge) => edge.weight),
        [1, 2, 3]
    );
});

addTest("primMST returns a minimum spanning tree", () => {
    const graph = new WeightedGraph();
    graph
        .addEdge("A", "B", 1)
        .addEdge("A", "C", 5)
        .addEdge("B", "C", 2)
        .addEdge("B", "D", 4)
        .addEdge("C", "D", 3);

    const result = primMST(graph, "A");

    assert.equal(result.totalWeight, 6);
});

addTest("tarjanSCC returns strongly connected components", () => {
    const graph = new Graph(true);
    graph
        .addEdge("A", "B")
        .addEdge("B", "A")
        .addEdge("B", "C")
        .addEdge("C", "D")
        .addEdge("D", "C");

    const result = tarjanSCC(graph)
        .map((component) => component.slice().sort())
        .sort((first, second) => first[0].localeCompare(second[0]));

    assert.deepStrictEqual(result, [["A", "B"], ["C", "D"]]);
});

addTest("articulationPoints and bridges find graph cut points", () => {
    const graph = new Graph();
    graph.addEdge("A", "B").addEdge("B", "C").addEdge("C", "D").addEdge("B", "D").addEdge("D", "E");

    const bridgeList = bridges(graph)
        .map((edge) => edge.slice())
        .sort((first, second) => first[0].localeCompare(second[0]));

    assert.deepStrictEqual(articulationPoints(graph).sort(), ["B", "D"]);
    assert.deepStrictEqual(bridgeList, [["A", "B"], ["D", "E"]]);
});

addTest("bipartiteCheck colors bipartite graphs", () => {
    const graph = new Graph();
    graph.addEdge("L1", "R1").addEdge("L1", "R2").addEdge("L2", "R2");

    const result = bipartiteCheck(graph);
    assert.equal(result.isBipartite, true);
});

addTest("dinicMaxFlow computes a maximum flow", () => {
    const result = dinicMaxFlow(
        ["S", "A", "B", "T"],
        [
            { from: "S", to: "A", capacity: 3 },
            { from: "S", to: "B", capacity: 2 },
            { from: "A", to: "B", capacity: 1 },
            { from: "A", to: "T", capacity: 2 },
            { from: "B", to: "T", capacity: 3 },
        ],
        "S",
        "T"
    );

    assert.equal(result.maxFlow, 5);
});

addTest("hopcroftKarp computes maximum bipartite matching", () => {
    const result = hopcroftKarp(["L1", "L2", "L3"], ["R1", "R2", "R3"], {
        L1: ["R1", "R2"],
        L2: ["R2"],
        L3: ["R2", "R3"],
    });

    assert.equal(result.size, 3);
});

addTest("kosarajuSCC returns strongly connected components", () => {
    const graph = new Graph(true);
    graph
        .addEdge("A", "B")
        .addEdge("B", "A")
        .addEdge("B", "C")
        .addEdge("C", "D")
        .addEdge("D", "C");

    const result = kosarajuSCC(graph)
        .map((component) => component.slice().sort())
        .sort((first, second) => first[0].localeCompare(second[0]));

    assert.deepStrictEqual(result, [["A", "B"], ["C", "D"]]);
});

addTest("johnsonShortestPaths computes all-pairs paths with reweighting", () => {
    const graph = new WeightedGraph(true);
    graph.addEdge("A", "B", 2).addEdge("A", "C", 4).addEdge("B", "C", -1).addEdge("C", "D", 2);

    const result = johnsonShortestPaths(graph);

    assert.equal(result.hasNegativeCycle, false);
    assert.equal(result.distances.get("A").get("D"), 3);
});

addTest("edmondsKarp computes a maximum flow", () => {
    const result = edmondsKarp(
        ["S", "A", "B", "T"],
        [
            { from: "S", to: "A", capacity: 3 },
            { from: "S", to: "B", capacity: 2 },
            { from: "A", to: "B", capacity: 1 },
            { from: "A", to: "T", capacity: 2 },
            { from: "B", to: "T", capacity: 3 },
        ],
        "S",
        "T"
    );

    assert.equal(result.maxFlow, 5);
});

addTest("prefixFunction builds the KMP prefix table", () => {
    assert.deepStrictEqual(prefixFunction("ababcabab"), [0, 0, 1, 2, 0, 1, 2, 3, 4]);
});

addTest("kmpSearch finds every pattern match", () => {
    assert.deepStrictEqual(kmpSearch("ababcabcabababd", "ababd"), [10]);
    assert.deepStrictEqual(kmpSearch("aaaaa", "aa"), [0, 1, 2, 3]);
});

addTest("zAlgorithm builds the Z-table", () => {
    assert.deepStrictEqual(zAlgorithm("aabxaabxcaabxaabxay"), [0, 1, 0, 0, 4, 1, 0, 0, 0, 8, 1, 0, 0, 5, 1, 0, 0, 1, 0]);
});

addTest("rabinKarp finds exact pattern matches", () => {
    assert.deepStrictEqual(rabinKarp("abracadabra", "abra"), [0, 7]);
});

addTest("AhoCorasick finds multiple patterns in one pass", () => {
    const matcher = new AhoCorasick();
    matcher.add("he").add("she").add("hers").add("his");

    const matches = matcher.search("ushers").map((match) => match.pattern).sort();
    assert.deepStrictEqual(matches, ["he", "hers", "she"]);
});

addTest("suffixArray and lcpArray capture suffix ordering", () => {
    const suffixes = suffixArray("banana");
    assert.deepStrictEqual(suffixes, [5, 3, 1, 0, 4, 2]);
    assert.deepStrictEqual(lcpArray("banana", suffixes), [1, 3, 0, 0, 2]);
});

addTest("manacher finds the longest palindromic substring", () => {
    const result = manacher("forgeeksskeegfor");
    assert.equal(result.substring, "geeksskeeg");
    assert.equal(result.length, 10);
});

addTest("boyerMoore finds exact pattern matches", () => {
    assert.deepStrictEqual(boyerMoore("abracadabra", "abra"), [0, 7]);
});

addTest("RollingHash returns stable full and substring hashes", () => {
    const hash = new RollingHash("abracadabra");

    assert.equal(hash.hash(), RollingHash.compute("abracadabra"));
    assert.equal(hash.substringHash(0, 4), RollingHash.compute("abra"));
});

addTest("sieveOfEratosthenes lists primes up to a limit", () => {
    assert.deepStrictEqual(sieveOfEratosthenes(20), [2, 3, 5, 7, 11, 13, 17, 19]);
});

addTest("extendedEuclidean returns Bezout coefficients", () => {
    const result = extendedEuclidean(240, 46);

    assert.equal(result.gcd, 2);
    assert.equal((240 * result.x) + (46 * result.y), 2);
});

addTest("fastModularExponentiation computes powers in logarithmic time", () => {
    assert.equal(fastModularExponentiation(7, 13, 11), 2);
});

addTest("modularInverse returns the multiplicative inverse when it exists", () => {
    assert.equal(modularInverse(3, 11), 4);
    assert.equal(modularInverse(6, 9), null);
});

addTest("longestIncreasingSubsequence returns the sequence and its length", () => {
    const result = longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18]);

    assert.equal(result.length, 4);
    assert.deepStrictEqual(result.sequence, [2, 3, 7, 18]);
});

addTest("editDistance returns Levenshtein distance", () => {
    assert.equal(editDistance("kitten", "sitting"), 3);
});

addTest("longestCommonSubsequence reconstructs the common subsequence", () => {
    const result = longestCommonSubsequence("AGGTAB", "GXTXAYB");

    assert.equal(result.length, 4);
    assert.equal(result.sequence, "GTAB");
});

addTest("kadane finds the maximum subarray", () => {
    const result = kadane([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

    assert.equal(result.maxSum, 6);
    assert.deepStrictEqual(result.subarray, [4, -1, 2, 1]);
});

addTest("zeroOneKnapsack returns the best value and chosen items", () => {
    const result = zeroOneKnapsack([2, 3, 4, 5], [3, 4, 5, 8], 5);

    assert.equal(result.maxValue, 8);
    assert.deepStrictEqual(result.selectedItems, [3]);
});

addTest("coinChange returns the minimum coins and one optimal combination", () => {
    const result = coinChange([1, 3, 4], 6);

    assert.equal(result.minCoins, 2);
    assert.deepStrictEqual(result.combination.sort((first, second) => first - second), [3, 3]);
});

addTest("subsetSum finds a subset that reaches the target", () => {
    const result = subsetSum([3, 34, 4, 12, 5, 2], 9);

    assert.equal(result.possible, true);
    assert.deepStrictEqual(result.subset.sort((first, second) => first - second), [4, 5]);
});

let passed = 0;

tests.forEach(({ name, run }) => {
    try {
        run();
        passed += 1;
        console.log("PASS", name);
    } catch (error) {
        console.error("FAIL", name);
        console.error(error.stack);
        process.exitCode = 1;
    }
});

if (!process.exitCode) {
    console.log("All tests passed:", passed);
}
