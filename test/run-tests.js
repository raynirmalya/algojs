const assert = require("node:assert/strict");

const AVLTree = require("../collections/avl-tree");
const RedBlackTree = require("../collections/red-black-tree");
const Treap = require("../collections/treap");
const BTree = require("../collections/b-tree");
const BPlusTree = require("../collections/b-plus-tree");
const IntervalTree = require("../collections/interval-tree");
const OrderStatisticTree = require("../collections/order-statistic-tree");
const BinaryHeap = require("../collections/binary-heap");
const PriorityQueue = require("../collections/priority-queue");
const DisjointSetUnion = require("../collections/disjoint-set");
const Trie = require("../collections/trie");
const PersistentTrie = require("../collections/persistent-trie");
const SegmentTree = require("../collections/segment-tree");
const PersistentSegmentTree = require("../collections/persistent-segment-tree");
const FenwickTree = require("../collections/fenwick-tree");
const SparseTable = require("../collections/sparse-table");
const MonotonicQueue = require("../collections/monotonic-queue");
const MonotonicStack = require("../collections/monotonic-stack");
const BinaryTrie = require("../collections/binary-trie");
const KDTree = require("../collections/kd-tree");
const SqrtDecomposition = require("../collections/sqrt-decomposition");
const FenwickTree2D = require("../collections/fenwick-tree-2d");
const slidingWindowMaximum = require("../arrays/sliding-window-maximum");
const PrefixSum = require("../arrays/prefix-sum");
const DifferenceArray = require("../arrays/difference-array");
const quickSelect = require("../arrays/quick-select");
const medianOfMedians = require("../arrays/median-of-medians");
const nextPermutation = require("../arrays/next-permutation");
const majorityVote = require("../arrays/majority-vote");
const fisherYatesShuffle = require("../arrays/fisher-yates-shuffle");
const reservoirSampling = require("../arrays/reservoir-sampling");
const coordinateCompression = require("../arrays/coordinate-compression");
const inversionCount = require("../arrays/inversion-count");
const kWayMerge = require("../arrays/k-way-merge");
const meetInTheMiddleSubsetSum = require("../arrays/meet-in-the-middle-subset-sum");
const slidingWindowMedian = require("../arrays/sliding-window-median");
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
const dagShortestPath = require("../graph/dag-shortest-path");
const dagLongestPath = require("../graph/dag-longest-path");
const bidirectionalSearch = require("../graph/bidirectional-search");
const boruvkaMST = require("../graph/boruvka");
const eulerianPath = require("../graph/eulerian-path");
const eulerianCircuit = require("../graph/eulerian-circuit");
const bronKerbosch = require("../graph/bron-kerbosch");
const dsaturColoring = require("../graph/dsatur-coloring");
const pageRank = require("../graph/page-rank");
const hits = require("../graph/hits");
const transitiveClosure = require("../graph/transitive-closure");
const kargerMinCut = require("../graph/karger-min-cut");
const topologicalSortDFS = require("../graph/topological-sort-dfs");
const gabowSCC = require("../graph/gabow-scc");
const biconnectedComponents = require("../graph/biconnected-components");
const treeDiameter = require("../graph/tree-diameter");
const treeIsomorphism = require("../graph/tree-isomorphism");
const binaryLiftingLCA = require("../graph/binary-lifting-lca");
const tarjanOfflineLCA = require("../graph/tarjan-offline-lca");
const idaStar = require("../graph/ida-star");
const yenKShortestPaths = require("../graph/yen-k-shortest-paths");
const kCoreDecomposition = require("../graph/k-core-decomposition");
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
const longestCommonSubstring = require("../strings/longest-common-substring");
const shortestCommonSupersequence = require("../strings/shortest-common-supersequence");
const hirschbergLCS = require("../strings/hirschberg-lcs");
const damerauLevenshtein = require("../strings/damerau-levenshtein");
const boyerMooreHorspool = require("../strings/boyer-moore-horspool");
const bitapSearch = require("../strings/bitap-search");
const boothMinimalRotation = require("../strings/booth-minimal-rotation");
const duvalLyndonFactorization = require("../strings/duval-lyndon-factorization");
const longestCommonPrefix = require("../strings/longest-common-prefix");
const naiveStringSearch = require("../strings/naive-string-search");
const zFunctionSearch = require("../strings/z-function-search");
const PolynomialHash = require("../strings/polynomial-hash");
const SuffixAutomaton = require("../strings/suffix-automaton");
const SuffixTree = require("../strings/suffix-tree");
const UkkonenSuffixTree = require("../strings/ukkonen-suffix-tree");
const FMIndex = require("../strings/fm-index");
const smithWaterman = require("../strings/smith-waterman");
const needlemanWunsch = require("../strings/needleman-wunsch");
const burrowsWheelerTransform = require("../strings/burrows-wheeler-transform");
const inverseBurrowsWheelerTransform = require("../strings/inverse-burrows-wheeler-transform");
const huffmanCoding = require("../strings/huffman-coding");
const runLengthEncoding = require("../strings/run-length-encoding");
const lz77 = require("../strings/lz77");
const binaryGCD = require("../math/number-theory/binary-gcd");
const sieveOfEratosthenes = require("../math/number-theory/sieve-of-eratosthenes");
const linearSieve = require("../math/number-theory/linear-sieve");
const segmentedSieve = require("../math/number-theory/segmented-sieve");
const primeFactorization = require("../math/number-theory/prime-factorization");
const eulerTotient = require("../math/number-theory/euler-totient");
const extendedEuclidean = require("../math/number-theory/extended-euclidean");
const chineseRemainderTheorem = require("../math/number-theory/chinese-remainder-theorem");
const fermatPrimalityTest = require("../math/number-theory/fermat-primality-test");
const millerRabin = require("../math/number-theory/miller-rabin");
const pollardsRho = require("../math/number-theory/pollards-rho");
const fastModularExponentiation = require("../math/number-theory/fast-modular-exponentiation");
const modularInverse = require("../math/number-theory/modular-inverse");
const lucasTheorem = require("../math/number-theory/lucas-theorem");
const tonelliShanks = require("../math/number-theory/tonelli-shanks");
const babyStepGiantStep = require("../math/number-theory/baby-step-giant-step");
const karatsubaMultiplication = require("../math/algebra/karatsuba-multiplication");
const gaussianElimination = require("../math/algebra/gaussian-elimination");
const hornerMethod = require("../math/algebra/horner-method");
const matrixDeterminant = require("../math/algebra/matrix-determinant");
const matrixInverse = require("../math/algebra/matrix-inverse");
const luDecomposition = require("../math/algebra/lu-decomposition");
const choleskyDecomposition = require("../math/algebra/cholesky-decomposition");
const lagrangeInterpolation = require("../math/algebra/lagrange-interpolation");
const pascalTriangle = require("../math/combinatorics/pascal-triangle");
const binomialCoefficient = require("../math/combinatorics/binomial-coefficient");
const catalanNumber = require("../math/combinatorics/catalan-number");
const derangements = require("../math/combinatorics/derangements");
const stirlingSecondKind = require("../math/combinatorics/stirling-second-kind");
const bellNumber = require("../math/combinatorics/bell-number");
const fastDoublingFibonacci = require("../math/sequences/fast-doubling-fibonacci");
const newtonRaphson = require("../math/numerical/newton-raphson");
const secantMethod = require("../math/numerical/secant-method");
const longestIncreasingSubsequence = require("../dp/longest-increasing-subsequence");
const editDistance = require("../dp/edit-distance");
const longestCommonSubsequence = require("../dp/longest-common-subsequence");
const kadane = require("../dp/kadane");
const zeroOneKnapsack = require("../dp/zero-one-knapsack");
const coinChange = require("../dp/coin-change");
const subsetSum = require("../dp/subset-sum");
const unboundedKnapsack = require("../dp/unbounded-knapsack");
const matrixChainMultiplication = require("../dp/matrix-chain-multiplication");
const rodCutting = require("../dp/rod-cutting");
const eggDropping = require("../dp/egg-dropping");
const wordBreak = require("../dp/word-break");
const palindromePartitioning = require("../dp/palindrome-partitioning");
const weightedIntervalScheduling = require("../dp/weighted-interval-scheduling");
const jobSequencingWithDeadlines = require("../dp/job-sequencing-with-deadlines");
const longestPalindromicSubsequence = require("../dp/longest-palindromic-subsequence");
const longestBitonicSubsequence = require("../dp/longest-bitonic-subsequence");
const partitionEqualSubsetSum = require("../dp/partition-equal-subset-sum");
const booleanParenthesization = require("../dp/boolean-parenthesization");
const interleavingStrings = require("../dp/interleaving-strings");
const distinctSubsequences = require("../dp/distinct-subsequences");
const decodeWays = require("../dp/decode-ways");
const minimumSubsetSumDifference = require("../dp/minimum-subset-sum-difference");
const longestRepeatingSubsequence = require("../dp/longest-repeating-subsequence");
const targetSum = require("../dp/target-sum");
const optimalBST = require("../dp/optimal-bst");
const houseRobber = require("../dp/house-robber");
const houseRobberCircular = require("../dp/house-robber-circular");
const minimumPathSum = require("../dp/minimum-path-sum");
const uniquePaths = require("../dp/unique-paths");
const uniquePathsWithObstacles = require("../dp/unique-paths-with-obstacles");
const minimumCostClimbingStairs = require("../dp/minimum-cost-climbing-stairs");
const burstBalloons = require("../dp/burst-balloons");
const wildcardMatching = require("../dp/wildcard-matching");
const regularExpressionMatching = require("../dp/regular-expression-matching");
const wordWrap = require("../dp/word-wrap");
const countPalindromicSubstrings = require("../dp/count-palindromic-substrings");
const activitySelection = require("../greedy/activity-selection");
const optimalMergePattern = require("../greedy/optimal-merge-pattern");
const nQueens = require("../backtracking/n-queens");
const sudokuSolver = require("../backtracking/sudoku-solver");
const generateParentheses = require("../backtracking/generate-parentheses");
const towerOfHanoi = require("../backtracking/tower-of-hanoi");
const letterCombinationsPhone = require("../backtracking/letter-combinations-phone");
const ratInMaze = require("../backtracking/rat-in-maze");
const wordSearch = require("../backtracking/word-search");
const floodFill = require("../backtracking/flood-fill");
const permutations = require("../combinatorics/permutations");
const combinations = require("../combinatorics/combinations");
const powerSet = require("../combinatorics/power-set");
const grayCode = require("../combinatorics/gray-code");
const kthPermutation = require("../combinatorics/kth-permutation");
const josephus = require("../combinatorics/josephus");
const BloomFilter = require("../probabilistic/bloom-filter");
const CountMinSketch = require("../probabilistic/count-min-sketch");
const ConsistentHashing = require("../probabilistic/consistent-hashing");
const shoelaceArea = require("../geometry/shoelace-area");
const pointInPolygon = require("../geometry/point-in-polygon");
const convexHullMonotoneChain = require("../geometry/convex-hull-monotone-chain");
const lineSegmentIntersection = require("../geometry/line-segment-intersection");
const bresenhamLine = require("../geometry/bresenham-line");
const hungarianAlgorithm = require("../graph/hungarian");
const blossomAlgorithm = require("../graph/blossom");

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
    assert.equal(typeof AlgoJs.RedBlackTree, "function");
    assert.equal(typeof AlgoJs.Treap, "function");
    assert.equal(typeof AlgoJs.BTree, "function");
    assert.equal(typeof AlgoJs.BPlusTree, "function");
    assert.equal(typeof AlgoJs.BinaryHeap, "function");
    assert.equal(typeof AlgoJs.OrderStatisticTree, "function");
    assert.equal(typeof AlgoJs.SparseTable, "function");
    assert.equal(typeof AlgoJs.PersistentSegmentTree, "function");
    assert.equal(typeof AlgoJs.PersistentTrie, "function");
    assert.equal(typeof AlgoJs.KDTree, "function");
    assert.equal(typeof AlgoJs.activitySelection, "function");
    assert.equal(typeof AlgoJs.BloomFilter, "function");
    assert.equal(typeof AlgoJs.Graph, "function");
    assert.equal(typeof AlgoJs.kosarajuSCC, "function");
    assert.equal(typeof AlgoJs.gabowSCC, "function");
    assert.equal(typeof AlgoJs.topologicalSort, "function");
    assert.equal(typeof AlgoJs.dagShortestPath, "function");
    assert.equal(typeof AlgoJs.boruvkaMST, "function");
    assert.equal(typeof AlgoJs.treeDiameter, "function");
    assert.equal(typeof AlgoJs.stoerWagnerMinCut, "function");
    assert.equal(typeof AlgoJs.pushRelabel, "function");
    assert.equal(typeof AlgoJs.hungarianAlgorithm, "function");
    assert.equal(typeof AlgoJs.blossomAlgorithm, "function");
    assert.equal(typeof AlgoJs.pageRank, "function");
    assert.equal(typeof AlgoJs.AhoCorasick, "function");
    assert.equal(typeof AlgoJs.RollingHash, "function");
    assert.equal(typeof AlgoJs.boyerMooreHorspool, "function");
    assert.equal(typeof AlgoJs.bitapSearch, "function");
    assert.equal(typeof AlgoJs.SuffixAutomaton, "function");
    assert.equal(typeof AlgoJs.SuffixTree, "function");
    assert.equal(typeof AlgoJs.UkkonenSuffixTree, "function");
    assert.equal(typeof AlgoJs.FMIndex, "function");
    assert.equal(typeof AlgoJs.Eertree, "function");
    assert.equal(typeof AlgoJs.hirschbergLCS, "function");
    assert.equal(typeof AlgoJs.binaryGCD, "function");
    assert.equal(typeof AlgoJs.chineseRemainderTheorem, "function");
    assert.equal(typeof AlgoJs.lucasTheorem, "function");
    assert.equal(typeof AlgoJs.fastDoublingFibonacci, "function");
    assert.equal(typeof AlgoJs.newtonRaphson, "function");
    assert.equal(typeof AlgoJs.fft, "function");
    assert.equal(typeof AlgoJs.karatsubaMultiplication, "function");
    assert.equal(typeof AlgoJs.kmpSearch, "function");
    assert.equal(typeof AlgoJs.subsetSum, "function");
    assert.equal(typeof AlgoJs.unboundedKnapsack, "function");
    assert.equal(typeof AlgoJs.kadane, "function");
    assert.equal(typeof AlgoJs.nQueens, "function");
    assert.equal(typeof AlgoJs.wordSearch, "function");
    assert.equal(typeof AlgoJs.shoelaceArea, "function");
    assert.equal(typeof AlgoJs.grahamScan, "function");
    assert.equal(typeof AlgoJs.HyperLogLog, "function");
    assert.equal(typeof AlgoJs.majorityVote, "function");
});

addTest("root package stays aligned with category exports and does not expose undefined values", () => {
    const AlgoJs = require("..");
    const arrays = require("../arrays");
    const greedy = require("../greedy");
    const probabilistic = require("../probabilistic");
    const statistics = require("../statistics");
    const graph = require("../graph");
    const strings = require("../strings");
    const numberTheory = require("../math/number-theory");
    const algebra = require("../math/algebra");
    const mathCombinatorics = require("../math/combinatorics");
    const sequences = require("../math/sequences");
    const transforms = require("../math/transforms");
    const numerical = require("../math/numerical");
    const dp = require("../dp");
    const backtracking = require("../backtracking");
    const combinatorics = require("../combinatorics");
    const geometry = require("../geometry");
    const Matrix = require("../math/matrix");
    const StringOps = require("../stringops");

    [
        arrays,
        greedy,
        probabilistic,
        statistics,
        graph,
        strings,
        numberTheory,
        algebra,
        mathCombinatorics,
        sequences,
        transforms,
        numerical,
        dp,
        backtracking,
        combinatorics,
        geometry,
    ].forEach((moduleExports) => {
        Object.entries(moduleExports).forEach(([name, value]) => {
            assert.strictEqual(AlgoJs[name], value);
        });
    });

    [
        ["AVLTree", AVLTree],
        ["RedBlackTree", RedBlackTree],
        ["Treap", Treap],
        ["BTree", BTree],
        ["BPlusTree", BPlusTree],
        ["IntervalTree", IntervalTree],
        ["OrderStatisticTree", OrderStatisticTree],
        ["BinaryHeap", BinaryHeap],
        ["PriorityQueue", PriorityQueue],
        ["DisjointSetUnion", DisjointSetUnion],
        ["Trie", Trie],
        ["PersistentTrie", PersistentTrie],
        ["SegmentTree", SegmentTree],
        ["PersistentSegmentTree", PersistentSegmentTree],
        ["FenwickTree", FenwickTree],
        ["SparseTable", SparseTable],
        ["MonotonicQueue", MonotonicQueue],
        ["MonotonicStack", MonotonicStack],
        ["BinaryTrie", BinaryTrie],
        ["KDTree", KDTree],
        ["SqrtDecomposition", SqrtDecomposition],
        ["FenwickTree2D", FenwickTree2D],
        ["Matrices", Matrix],
        ["StringOps", StringOps],
    ].forEach(([name, value]) => {
        assert.strictEqual(AlgoJs[name], value);
    });

    Object.entries(AlgoJs).forEach(([name, value]) => {
        assert.notStrictEqual(value, undefined, `${name} should not be undefined`);
    });
});

addTest("AVLTree keeps values balanced and ordered", () => {
    const tree = new AVLTree();
    [30, 20, 40, 10, 25, 35, 50].forEach((value) => tree.insert(value));

    assert.equal(tree.has(25), true);
    assert.deepStrictEqual(tree.inOrder(), [10, 20, 25, 30, 35, 40, 50]);

    tree.remove(20);
    assert.deepStrictEqual(tree.inOrder(), [10, 25, 30, 35, 40, 50]);
});

addTest("RedBlackTree keeps values ordered through insertions and removals", () => {
    const tree = new RedBlackTree();
    [7, 3, 18, 10, 22, 8, 11, 26].forEach((value) => tree.insert(value));

    assert.deepStrictEqual(tree.inOrder(), [3, 7, 8, 10, 11, 18, 22, 26]);
    assert.equal(tree.has(10), true);
    tree.remove(18);
    tree.remove(3);
    assert.deepStrictEqual(tree.inOrder(), [7, 8, 10, 11, 22, 26]);
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

addTest("BTree stores ordered keys across node splits", () => {
    const tree = new BTree(2);
    [10, 20, 5, 6, 12, 30, 7, 17].forEach((value) => tree.insert(value));

    assert.equal(tree.has(6), true);
    assert.equal(tree.has(15), false);
    assert.deepStrictEqual(tree.traverse(), [5, 6, 7, 10, 12, 17, 20, 30]);
});

addTest("BPlusTree supports keyed lookups and range scans", () => {
    const tree = new BPlusTree(2);
    [
        [10, "a"],
        [20, "b"],
        [5, "c"],
        [15, "d"],
        [25, "e"],
    ].forEach(([key, value]) => tree.insert(key, value));

    assert.equal(tree.search(15), "d");
    assert.deepStrictEqual(tree.range(10, 20), [
        { key: 10, value: "a" },
        { key: 15, value: "d" },
        { key: 20, value: "b" },
    ]);
});

addTest("OrderStatisticTree supports rank and select operations", () => {
    const tree = new OrderStatisticTree();
    [20, 10, 30, 25, 40, 5].forEach((value) => tree.insert(value));

    assert.equal(tree.select(0), 5);
    assert.equal(tree.select(3), 25);
    assert.equal(tree.rank(25), 3);
    tree.remove(10);
    assert.deepStrictEqual(tree.inOrder(), [5, 20, 25, 30, 40]);
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

addTest("PersistentTrie keeps separate historical versions", () => {
    const trie = new PersistentTrie();
    const version1 = trie.insert("algo");
    const version2 = trie.insert("algol", version1);

    assert.equal(trie.has("algo", version1), true);
    assert.equal(trie.has("algol", version1), false);
    assert.equal(trie.has("algol", version2), true);
    assert.deepStrictEqual(trie.getWordsWithPrefix("algo", version2), ["algo", "algol"]);
});

addTest("SegmentTree supports range queries and point updates", () => {
    const tree = new SegmentTree([2, 4, 6, 8, 10]);

    assert.equal(tree.query(1, 3), 18);
    tree.update(2, 7);
    assert.equal(tree.query(1, 3), 19);
});

addTest("PersistentSegmentTree keeps immutable queryable versions", () => {
    const tree = new PersistentSegmentTree([1, 2, 3, 4]);
    const version1 = tree.update(0, 1, 10);
    const version2 = tree.update(version1, 3, 20);

    assert.equal(tree.query(0, 0, 3), 10);
    assert.equal(tree.query(version1, 0, 3), 18);
    assert.equal(tree.query(version2, 2, 3), 23);
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

addTest("KDTree supports nearest-neighbor and range queries", () => {
    const tree = new KDTree([
        { x: 2, y: 3 },
        { x: 5, y: 4 },
        { x: 9, y: 6 },
        { x: 4, y: 7 },
        { x: 8, y: 1 },
        { x: 7, y: 2 },
    ], ["x", "y"]);

    assert.deepStrictEqual(tree.nearestNeighbor({ x: 9, y: 2 }).point, { x: 8, y: 1 });
    assert.equal(tree.rangeSearch({ x: 4, y: 1 }, { x: 9, y: 4 }).length, 3);
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

addTest("dagShortestPath and dagLongestPath work on weighted DAGs", () => {
    const graph = new WeightedGraph(true);
    graph
        .addEdge("S", "A", 2)
        .addEdge("S", "B", 3)
        .addEdge("A", "C", 4)
        .addEdge("B", "C", 1)
        .addEdge("C", "D", 2);

    const shortest = dagShortestPath(graph, "S");
    const longest = dagLongestPath(graph, "S");

    assert.equal(shortest.distances.get("D"), 6);
    assert.equal(longest.distances.get("D"), 8);
});

addTest("bidirectionalSearch finds a path between two vertices", () => {
    const graph = new Graph();
    graph.addEdge("A", "B").addEdge("B", "C").addEdge("C", "D").addEdge("D", "E");

    const result = bidirectionalSearch(graph, "A", "E");

    assert.equal(result.found, true);
    assert.deepStrictEqual(result.path, ["A", "B", "C", "D", "E"]);
});

addTest("boruvkaMST builds a minimum spanning tree", () => {
    const graph = new WeightedGraph();
    graph
        .addEdge("A", "B", 1)
        .addEdge("A", "C", 5)
        .addEdge("B", "C", 2)
        .addEdge("B", "D", 4)
        .addEdge("C", "D", 3);

    const result = boruvkaMST(graph);

    assert.equal(result.totalWeight, 6);
});

addTest("eulerianPath and eulerianCircuit traverse all edges when they exist", () => {
    const pathGraph = new Graph();
    pathGraph.addEdge("A", "B").addEdge("B", "C").addEdge("C", "D");

    const circuitGraph = new Graph();
    circuitGraph.addEdge("A", "B").addEdge("B", "C").addEdge("C", "A");

    assert.deepStrictEqual(eulerianPath(pathGraph), ["A", "B", "C", "D"]);
    assert.deepStrictEqual(eulerianCircuit(circuitGraph), ["A", "B", "C", "A"]);
});

addTest("bronKerbosch finds maximal cliques", () => {
    const graph = new Graph();
    graph
        .addEdge("A", "B")
        .addEdge("A", "C")
        .addEdge("B", "C")
        .addEdge("C", "D");

    const cliques = bronKerbosch(graph)
        .map((clique) => clique.slice().sort())
        .sort((first, second) => first.length - second.length || first[0].localeCompare(second[0]));

    assert.deepStrictEqual(cliques, [["C", "D"], ["A", "B", "C"]]);
});

addTest("dsaturColoring colors graphs with a small number of colors", () => {
    const graph = new Graph();
    graph.addEdge("A", "B").addEdge("B", "C").addEdge("C", "D").addEdge("D", "E").addEdge("E", "A");

    const result = dsaturColoring(graph);

    assert.equal(result.colorCount, 3);
    graph.vertices().forEach((vertex) => {
        graph.neighbors(vertex).forEach((neighbor) => {
            assert.notEqual(result.colors.get(vertex), result.colors.get(neighbor));
        });
    });
});

addTest("pageRank and hits return meaningful scores", () => {
    const graph = new Graph(true);
    graph.addEdge("A", "C").addEdge("B", "C").addEdge("C", "D");

    const ranks = pageRank(graph, { iterations: 40 });
    const hitsResult = hits(graph, 25);

    assert.ok(ranks.get("C") > ranks.get("A"));
    assert.ok(hitsResult.authority.get("C") > hitsResult.authority.get("A"));
    assert.ok(hitsResult.hub.get("A") > hitsResult.hub.get("C"));
});

addTest("transitiveClosure marks reachable vertex pairs", () => {
    const graph = new Graph(true);
    graph.addEdge("A", "B").addEdge("B", "C");

    const closure = transitiveClosure(graph);

    assert.equal(closure.get("A").get("C"), true);
    assert.equal(closure.get("C").get("A"), false);
});

addTest("kargerMinCut contracts to a cut on undirected graphs", () => {
    const graph = new WeightedGraph();
    graph.addEdge("A", "B", 1).addEdge("B", "C", 1).addEdge("C", "D", 1).addEdge("D", "A", 1);

    const sequence = [0.1, 0.6, 0.2, 0.4];
    let pointer = 0;
    const result = kargerMinCut(graph, () => {
        const value = sequence[pointer % sequence.length];
        pointer += 1;
        return value;
    });

    assert.equal(result.cutSize, 2);
    assert.equal(result.partition.length, 2);
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

addTest("longestCommonSubstring finds the longest shared contiguous sequence", () => {
    const result = longestCommonSubstring("abcdef", "zcdemf");

    assert.equal(result.length, 3);
    assert.equal(result.substring, "cde");
});

addTest("shortestCommonSupersequence reconstructs a valid minimum supersequence", () => {
    const result = shortestCommonSupersequence("abac", "cab");

    assert.equal(result.length, 5);
    assert.equal(result.sequence, "cabac");
});

addTest("hirschbergLCS reconstructs the common subsequence with linear-space DP", () => {
    const result = hirschbergLCS("AGGTAB", "GXTXAYB");

    assert.equal(result.length, 4);
    assert.equal(result.sequence, "GTAB");
});

addTest("damerauLevenshtein handles adjacent transpositions", () => {
    assert.equal(damerauLevenshtein("ca", "ac"), 1);
});

addTest("binaryGCD computes the gcd with Stein's algorithm", () => {
    assert.equal(binaryGCD(48, 18), 6);
});

addTest("sieveOfEratosthenes lists primes up to a limit", () => {
    assert.deepStrictEqual(sieveOfEratosthenes(20), [2, 3, 5, 7, 11, 13, 17, 19]);
});

addTest("linearSieve returns primes and smallest prime factors", () => {
    const result = linearSieve(20);

    assert.deepStrictEqual(result.primes, [2, 3, 5, 7, 11, 13, 17, 19]);
    assert.equal(result.smallestPrimeFactor[18], 2);
});

addTest("segmentedSieve returns primes within a closed interval", () => {
    assert.deepStrictEqual(segmentedSieve(10, 30), [11, 13, 17, 19, 23, 29]);
});

addTest("primeFactorization returns prime powers in ascending order", () => {
    assert.deepStrictEqual(primeFactorization(360), [
        { prime: 2, exponent: 3 },
        { prime: 3, exponent: 2 },
        { prime: 5, exponent: 1 },
    ]);
});

addTest("eulerTotient counts integers coprime to n", () => {
    assert.equal(eulerTotient(36), 12);
});

addTest("extendedEuclidean returns Bezout coefficients", () => {
    const result = extendedEuclidean(240, 46);

    assert.equal(result.gcd, 2);
    assert.equal((240 * result.x) + (46 * result.y), 2);
});

addTest("fastModularExponentiation computes powers in logarithmic time", () => {
    assert.equal(fastModularExponentiation(7, 13, 11), 2);
});

addTest("chineseRemainderTheorem solves compatible congruences", () => {
    const result = chineseRemainderTheorem(
        [
            { remainder: 2, modulus: 3 },
            { remainder: 3, modulus: 5 },
            { remainder: 2, modulus: 7 },
        ]
    );

    assert.deepStrictEqual(result, { solution: 23, modulus: 105 });
});

addTest("fermatPrimalityTest distinguishes simple prime and composite inputs", () => {
    assert.equal(fermatPrimalityTest(17, 5), true);
    assert.equal(fermatPrimalityTest(21, 5), false);
});

addTest("millerRabin provides a stronger probable-prime check", () => {
    assert.equal(millerRabin(104729), true);
    assert.equal(millerRabin(104728), false);
});

addTest("pollardsRho finds a non-trivial factor of a composite number", () => {
    const factor = pollardsRho(8051n);

    assert.equal(8051n % factor, 0n);
    assert.notEqual(factor, 1n);
    assert.notEqual(factor, 8051n);
});

addTest("modularInverse returns the multiplicative inverse when it exists", () => {
    assert.equal(modularInverse(3, 11), 4);
    assert.equal(modularInverse(6, 9), null);
});

addTest("karatsubaMultiplication multiplies large integers recursively", () => {
    assert.equal(karatsubaMultiplication(1234n, 5678n), 7006652n);
});

addTest("gaussianElimination solves linear systems by row reduction", () => {
    const result = gaussianElimination(
        [
            [2, 1],
            [1, -1],
        ],
        [5, 1]
    );

    assert.deepStrictEqual(result.solution.map((value) => Math.round(value)), [2, 1]);
});

addTest("hornerMethod evaluates polynomials efficiently", () => {
    assert.equal(hornerMethod([2, -6, 2, -1], 3), 5);
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

addTest("unboundedKnapsack allows repeated item picks", () => {
    const result = unboundedKnapsack([2, 3, 4], [4, 5, 7], 7);

    assert.equal(result.maxValue, 13);
});

addTest("matrixChainMultiplication computes the minimum multiplication cost", () => {
    const result = matrixChainMultiplication([40, 20, 30, 10, 30]);

    assert.equal(result.minCost, 26000);
});

addTest("rodCutting returns the best obtainable revenue", () => {
    const result = rodCutting([1, 5, 8, 9, 10, 17, 17, 20], 8);

    assert.equal(result.maxValue, 22);
});

addTest("eggDropping computes the minimum number of moves", () => {
    const result = eggDropping(2, 10);

    assert.equal(result.minMoves, 4);
});

addTest("wordBreak reconstructs a valid dictionary segmentation", () => {
    const result = wordBreak("applepenapple", ["apple", "pen"]);

    assert.equal(result.possible, true);
    assert.deepStrictEqual(result.segments, ["apple", "pen", "apple"]);
});

addTest("palindromePartitioning minimizes cuts across palindromic chunks", () => {
    const result = palindromePartitioning("aab");

    assert.equal(result.minCuts, 1);
    assert.deepStrictEqual(result.partitions, ["aa", "b"]);
});

addTest("weightedIntervalScheduling picks the maximum-weight compatible set", () => {
    const result = weightedIntervalScheduling([
        { start: 1, end: 3, weight: 5 },
        { start: 2, end: 5, weight: 6 },
        { start: 4, end: 6, weight: 5 },
        { start: 6, end: 7, weight: 4 },
        { start: 5, end: 8, weight: 11 },
        { start: 7, end: 9, weight: 2 },
    ]);

    assert.equal(result.maxWeight, 17);
});

addTest("jobSequencingWithDeadlines maximizes total profit greedily", () => {
    const result = jobSequencingWithDeadlines([
        { id: "a", deadline: 2, profit: 100 },
        { id: "b", deadline: 1, profit: 19 },
        { id: "c", deadline: 2, profit: 27 },
        { id: "d", deadline: 1, profit: 25 },
        { id: "e", deadline: 3, profit: 15 },
    ]);

    assert.equal(result.totalProfit, 142);
    assert.deepStrictEqual(
        result.scheduledJobs.map((job) => job.id).sort(),
        ["a", "c", "e"]
    );
});

addTest("sequence-based DP additions reconstruct and measure subsequences", () => {
    const palindromic = longestPalindromicSubsequence("bbbab");
    const bitonic = longestBitonicSubsequence([1, 11, 2, 10, 4, 5, 2, 1]);

    assert.equal(palindromic.length, 4);
    assert.equal(palindromic.sequence, "bbbb");
    assert.equal(bitonic.length, 6);
    assert.equal(longestRepeatingSubsequence("axxxy"), 2);
});

addTest("subset and counting DP additions solve partition and counting variants", () => {
    assert.equal(partitionEqualSubsetSum([1, 5, 11, 5]), true);
    assert.equal(distinctSubsequences("rabbbit", "rabbit"), 3);
    assert.equal(decodeWays("226"), 3);
    assert.equal(minimumSubsetSumDifference([1, 6, 11, 5]), 1);
    assert.equal(targetSum([1, 1, 1, 1, 1], 3), 5);
});

addTest("expression and interleaving DP helpers return the expected booleans and counts", () => {
    assert.equal(booleanParenthesization("TFT", "^&"), 2);
    assert.equal(interleavingStrings("aabcc", "dbbca", "aadbbcbcac"), true);
    assert.equal(wildcardMatching("adceb", "*a*b"), true);
    assert.equal(regularExpressionMatching("aab", "c*a*b"), true);
});

addTest("path and robbery DP helpers handle common optimization cases", () => {
    assert.equal(houseRobber([2, 7, 9, 3, 1]), 12);
    assert.equal(houseRobberCircular([2, 3, 2]), 3);
    assert.equal(minimumPathSum([
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1],
    ]), 7);
    assert.equal(uniquePaths(3, 7), 28);
    assert.equal(uniquePathsWithObstacles([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
    ]), 2);
    assert.equal(minimumCostClimbingStairs([10, 15, 20]), 15);
});

addTest("optimal cost DP helpers compute burst balloon, BST, wrap, and palindrome counts", () => {
    assert.equal(burstBalloons([3, 1, 5, 8]), 167);
    assert.deepStrictEqual(optimalBST([10, 12, 20], [34, 8, 50]), { minCost: 142 });

    const wrapped = wordWrap(["aaa", "bb", "cc"], 6);
    assert.equal(wrapped.minCost, 0);
    assert.deepStrictEqual(wrapped.lines, ["aaa bb", "cc"]);

    assert.equal(countPalindromicSubstrings("aaa"), 6);
});

addTest("greedy additions select compatible activities and merge files cheaply", () => {
    const selected = activitySelection([
        { id: "a", start: 1, end: 2 },
        { id: "c", start: 1, end: 3 },
        { id: "b", start: 2, end: 3 },
        { id: "d", start: 3, end: 4 },
    ]);

    assert.deepStrictEqual(selected.map((activity) => activity.id), ["a", "b", "d"]);
    assert.equal(optimalMergePattern([4, 3, 2, 6]), 29);
});

addTest("new string search helpers find exact matches through multiple strategies", () => {
    assert.deepStrictEqual(boyerMooreHorspool("abracadabra", "abra"), [0, 7]);
    assert.deepStrictEqual(bitapSearch("abracadabra", "abra"), [0, 7]);
    assert.deepStrictEqual(naiveStringSearch("abracadabra", "abra"), [0, 7]);
    assert.equal(longestCommonPrefix(["flower", "flow", "flight"]), "fl");
});

addTest("string rotation and factorization helpers return stable decompositions", () => {
    assert.deepStrictEqual(boothMinimalRotation("caba"), {
        index: 1,
        rotation: "abac",
    });
    assert.deepStrictEqual(duvalLyndonFactorization("banana"), ["b", "an", "an", "a"]);
});

addTest("backtracking additions solve queens, sudoku, and balanced parentheses", () => {
    const queens = nQueens(4);
    const solved = sudokuSolver([
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9],
    ]);
    const parentheses = generateParentheses(3).slice().sort();

    assert.equal(queens.count, 2);
    assert.equal(queens.solutions[0].length, 4);
    assert.deepStrictEqual(solved[0], [5, 3, 4, 6, 7, 8, 9, 1, 2]);
    assert.equal(solved[8][8], 9);
    assert.equal(parentheses.length, 5);
    assert.equal(parentheses.includes("((()))"), true);
    assert.equal(parentheses.includes("()()()"), true);
});

addTest("combinatorial enumeration helpers generate permutations, combinations, and subsets", () => {
    assert.equal(permutations([1, 2, 3]).length, 6);
    assert.deepStrictEqual(combinations([1, 2, 3, 4], 2), [
        [1, 2],
        [1, 3],
        [1, 4],
        [2, 3],
        [2, 4],
        [3, 4],
    ]);
    assert.deepStrictEqual(powerSet([1, 2]), [[], [1], [2], [1, 2]]);
});

addTest("ordering helpers produce gray codes, permutations by rank, and Josephus results", () => {
    assert.deepStrictEqual(grayCode(2), [0, 1, 3, 2]);
    assert.deepStrictEqual(kthPermutation([1, 2, 3], 4), [2, 3, 1]);
    assert.deepStrictEqual(josephus(7, 3), {
        survivor: 4,
        eliminationOrder: [3, 6, 2, 7, 5, 1, 4],
    });
});

addTest("array utility additions expose next permutation, majority vote, and deterministic sampling", () => {
    assert.deepStrictEqual(nextPermutation([1, 2, 3]), {
        hasNext: true,
        permutation: [1, 3, 2],
    });
    assert.equal(majorityVote([2, 2, 1, 1, 1, 2, 2]), 2);
    assert.equal(majorityVote([1, 2, 3]), null);
    assert.deepStrictEqual(fisherYatesShuffle([1, 2, 3, 4], () => 0), [2, 3, 4, 1]);
    assert.deepStrictEqual(reservoirSampling([1, 2, 3, 4, 5], 2, () => 0), [5, 2]);
});

addTest("combinatorics helpers compute classic counting sequences", () => {
    assert.deepStrictEqual(pascalTriangle(5)[4], [1, 4, 6, 4, 1]);
    assert.equal(binomialCoefficient(5, 2), 10);
    assert.equal(catalanNumber(4), 14);
    assert.equal(derangements(4), 9);
    assert.equal(stirlingSecondKind(5, 2), 15);
    assert.equal(bellNumber(5), 52);
    assert.equal(fastDoublingFibonacci(10), 55n);
});

addTest("advanced graph traversal helpers cover DFS topo order, SCCs, and biconnected regions", () => {
    const dag = new Graph(true);
    dag.addEdge("plan", "shop").addEdge("shop", "cook").addEdge("cook", "eat");

    assert.deepStrictEqual(topologicalSortDFS(dag), ["plan", "shop", "cook", "eat"]);

    const stronglyConnected = new Graph(true);
    stronglyConnected
        .addEdge("A", "B")
        .addEdge("B", "A")
        .addEdge("B", "C")
        .addEdge("C", "D")
        .addEdge("D", "C");

    const gabow = gabowSCC(stronglyConnected)
        .map((component) => component.slice().sort())
        .sort((first, second) => first[0].localeCompare(second[0]));

    assert.deepStrictEqual(gabow, [["A", "B"], ["C", "D"]]);

    const biconnected = new Graph();
    biconnected
        .addEdge("A", "B")
        .addEdge("B", "C")
        .addEdge("C", "A")
        .addEdge("C", "D")
        .addEdge("D", "E")
        .addEdge("E", "C");

    const components = biconnectedComponents(biconnected)
        .map((component) => component.slice().sort())
        .sort((first, second) => first[0].localeCompare(second[0]));

    assert.deepStrictEqual(components, [["A", "B", "C"], ["C", "D", "E"]]);
});

addTest("tree helpers compute diameter, isomorphism, and LCAs", () => {
    const pathTree = new Graph();
    pathTree.addEdge("A", "B").addEdge("B", "C").addEdge("C", "D").addEdge("D", "E");

    const diameter = treeDiameter(pathTree);
    assert.equal(diameter.length, 4);
    assert.deepStrictEqual(diameter.path, ["A", "B", "C", "D", "E"]);

    const firstTree = new Graph();
    firstTree.addEdge("1", "2").addEdge("1", "3").addEdge("2", "4").addEdge("2", "5");
    const secondTree = new Graph();
    secondTree.addEdge("a", "b").addEdge("a", "c").addEdge("c", "d").addEdge("c", "e");
    assert.equal(treeIsomorphism(firstTree, secondTree), true);

    const lcaTree = new Graph();
    lcaTree
        .addEdge("A", "B")
        .addEdge("A", "C")
        .addEdge("B", "D")
        .addEdge("B", "E")
        .addEdge("C", "F");

    const online = binaryLiftingLCA(lcaTree, "A");
    assert.equal(online.query("D", "E"), "B");
    assert.equal(online.query("D", "F"), "A");
    assert.deepStrictEqual(tarjanOfflineLCA(lcaTree, "A", [["D", "E"], ["D", "F"]]), ["B", "A"]);
});

addTest("advanced graph path and cut helpers return stable answers", () => {
    const weighted = new WeightedGraph(true);
    weighted
        .addEdge("A", "B", 1)
        .addEdge("B", "D", 1)
        .addEdge("A", "C", 1)
        .addEdge("C", "D", 2)
        .addEdge("A", "D", 5);

    assert.deepStrictEqual(idaStar(weighted, "A", "D", () => 0), {
        distance: 2,
        path: ["A", "B", "D"],
    });

    const shortest = yenKShortestPaths(weighted, "A", "D", 3);
    assert.deepStrictEqual(shortest.map((entry) => entry.cost), [2, 3, 5]);

    const coreGraph = new Graph();
    coreGraph
        .addEdge("A", "B")
        .addEdge("B", "C")
        .addEdge("C", "A")
        .addEdge("C", "D");

    const core = kCoreDecomposition(coreGraph);
    assert.equal(core.get("A"), 2);
    assert.equal(core.get("D"), 1);
});

addTest("advanced string helpers cover search, hashing, and suffix automata", () => {
    assert.deepStrictEqual(zFunctionSearch("abracadabra", "abra"), [0, 7]);

    const polynomial = new PolynomialHash("abracadabra");
    assert.equal(polynomial.hash(), PolynomialHash.compute("abracadabra"));
    assert.equal(polynomial.substringHash(0, 4), PolynomialHash.compute("abra"));

    const automaton = new SuffixAutomaton().build("abracadabra");
    assert.equal(automaton.contains("cada"), true);
    assert.deepStrictEqual(automaton.longestCommonSubstring("cadabrax"), {
        length: 7,
        substring: "cadabra",
    });
});

addTest("alignment and transform string helpers reconstruct expected content", () => {
    const local = smithWaterman("abc", "zabx");
    const global = needlemanWunsch("abc", "abc");
    const transformed = burrowsWheelerTransform("banana");
    const huffman = huffmanCoding.encode("banana");

    assert.equal(local.score, 4);
    assert.equal(local.alignmentA, "ab");
    assert.equal(local.alignmentB, "ab");
    assert.equal(global.score, 3);
    assert.equal(global.alignmentA, "abc");
    assert.equal(global.alignmentB, "abc");
    assert.equal(inverseBurrowsWheelerTransform(transformed.transformed, transformed.index), "banana");
    assert.equal(huffmanCoding.decode(huffman.encoded, huffman.tree), "banana");
});

addTest("compression helpers round-trip text through run-length and LZ77 encodings", () => {
    const encoded = runLengthEncoding.encode("aaabccccdd");
    const tokens = lz77.compress("abracadabra");

    assert.equal(runLengthEncoding.decode(encoded), "aaabccccdd");
    assert.equal(lz77.decompress(tokens), "abracadabra");
});

addTest("number-theory additions handle Lucas, Tonelli-Shanks, and discrete logs", () => {
    const combinationMod = (n, k, modulus) => {
        let numerator = 1n;
        let denominator = 1n;

        for (let index = 1n; index <= BigInt(k); index += 1n) {
            numerator *= BigInt(n) - BigInt(k) + index;
            denominator *= index;
        }

        return Number((numerator / denominator) % BigInt(modulus));
    };

    assert.equal(lucasTheorem(25, 7, 13), combinationMod(25, 7, 13));

    const root = tonelliShanks(10, 13);
    assert.equal((root * root) % 13, 10);
    assert.equal(babyStepGiantStep(2, 8, 13), 3);
});

addTest("algebra and numerical helpers solve matrices, interpolation, and roots", () => {
    assert.equal(matrixDeterminant([
        [1, 2],
        [3, 4],
    ]), -2);

    const inverse = matrixInverse([
        [1, 2],
        [3, 4],
    ]);
    assert.ok(Math.abs(inverse[0][0] + 2) < 1e-9);
    assert.ok(Math.abs(inverse[1][0] - 1.5) < 1e-9);

    const lu = luDecomposition([
        [4, 3],
        [6, 3],
    ]);
    assert.ok(Math.abs((lu.L[1][0] * lu.U[0][0]) + lu.U[1][0] - 6) < 1e-9);

    const cholesky = choleskyDecomposition([
        [4, 12, -16],
        [12, 37, -43],
        [-16, -43, 98],
    ]);
    assert.deepStrictEqual(cholesky.map((row) => row.map((value) => Math.round(value))), [
        [2, 0, 0],
        [6, 1, 0],
        [-8, 5, 3],
    ]);

    assert.equal(Math.round(lagrangeInterpolation([
        { x: 0, y: 1 },
        { x: 1, y: 3 },
        { x: 2, y: 7 },
    ], 3)), 13);

    assert.ok(Math.abs(newtonRaphson((x) => (x * x) - 2, (x) => 2 * x, 1) - Math.sqrt(2)) < 1e-6);
    assert.ok(Math.abs(secantMethod((x) => (x * x) - 2, 1, 2) - Math.sqrt(2)) < 1e-6);
});

addTest("probabilistic and query data structures expose stable core operations", () => {
    const bloom = new BloomFilter(64);
    bloom.add("algojs");
    assert.equal(bloom.has("algojs"), true);

    const sketch = new CountMinSketch(32, 4);
    sketch.update("heap");
    sketch.update("heap");
    sketch.update("graph");
    assert.ok(sketch.estimate("heap") >= 2);

    const hashing = new ConsistentHashing(8);
    hashing.addNode("A").addNode("B");
    const assigned = hashing.getNode("user-1");
    hashing.removeNode(assigned);
    assert.notEqual(hashing.getNode("user-1"), assigned);

    const sqrt = new SqrtDecomposition([1, 2, 3, 4, 5]);
    assert.equal(sqrt.query(1, 3), 9);
    sqrt.update(2, 10);
    assert.equal(sqrt.query(1, 3), 16);

    const tree2d = new FenwickTree2D(3, 3);
    tree2d.set(0, 0, 1);
    tree2d.set(1, 1, 2);
    tree2d.set(2, 2, 3);
    assert.equal(tree2d.rangeQuery(0, 0, 2, 2), 6);
});

addTest("array utility additions cover compression, inversion counting, merges, and medians", () => {
    assert.deepStrictEqual(coordinateCompression([50, 10, 50, 20]).compressed, [2, 0, 2, 1]);
    assert.equal(inversionCount([2, 4, 1, 3, 5]), 3);
    assert.deepStrictEqual(kWayMerge([[1, 4], [2, 5], [3, 6]]), [1, 2, 3, 4, 5, 6]);

    const subset = meetInTheMiddleSubsetSum([3, 34, 4, 12, 5, 2], 9);
    assert.equal(subset.possible, true);
    assert.equal(subset.sum, 9);

    assert.deepStrictEqual(slidingWindowMedian([1, 3, -1, -3, 5, 3, 6, 7], 3), [1, -1, -1, 3, 5, 6]);
});

addTest("backtracking additions enumerate moves, combinations, and grid solutions", () => {
    assert.deepStrictEqual(towerOfHanoi(2), [["A", "B"], ["A", "C"], ["B", "C"]]);

    const phone = letterCombinationsPhone("23");
    assert.equal(phone.length, 9);
    assert.equal(phone.includes("ad"), true);
    assert.equal(phone.includes("cf"), true);

    assert.deepStrictEqual(ratInMaze([
        [1, 1],
        [1, 1],
    ]), {
        found: true,
        path: "DR",
    });

    assert.equal(wordSearch([
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
    ], "ABCCED"), true);

    assert.deepStrictEqual(floodFill([
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
    ], 1, 1, 2), [
        [2, 2, 2],
        [2, 2, 0],
        [2, 0, 1],
    ]);
});

addTest("geometry additions compute areas, inclusion, hulls, and rasterized lines", () => {
    const square = [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 1, y: 1 },
        { x: 0, y: 1 },
    ];

    assert.equal(shoelaceArea(square), 1);
    assert.equal(pointInPolygon({ x: 0.5, y: 0.5 }, square), true);
    assert.equal(pointInPolygon({ x: 2, y: 2 }, square), false);

    const hull = convexHullMonotoneChain([
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 1, y: 1 },
        { x: 0, y: 1 },
        { x: 0.5, y: 0.5 },
    ]);

    assert.equal(hull.length, 4);
    assert.equal(lineSegmentIntersection(
        { x: 0, y: 0 },
        { x: 2, y: 2 },
        { x: 0, y: 2 },
        { x: 2, y: 0 }
    ).intersects, true);
    assert.deepStrictEqual(bresenhamLine(0, 0, 2, 2), [
        { x: 0, y: 0 },
        { x: 1, y: 1 },
        { x: 2, y: 2 },
    ]);
});

addTest("array and search expansion covers interval, pointer, stack, and median style problems", () => {
    const ternarySearch = require("../arrays/ternary-search");
    const mergeIntervals = require("../arrays/merge-intervals");
    const intervalPartitioning = require("../arrays/interval-partitioning");
    const twoSum = require("../arrays/two-sum");
    const threeSum = require("../arrays/three-sum");
    const fourSum = require("../arrays/four-sum");
    const maximumSubarrayCircular = require("../arrays/maximum-subarray-circular");
    const containerWithMostWater = require("../arrays/container-with-most-water");
    const trappingRainWater = require("../arrays/trapping-rain-water");
    const nextGreaterElement = require("../arrays/next-greater-element");
    const nextSmallerElement = require("../arrays/next-smaller-element");
    const dailyTemperatures = require("../arrays/daily-temperatures");
    const longestConsecutiveSequence = require("../arrays/longest-consecutive-sequence");
    const maximumSumRectangle = require("../arrays/maximum-sum-rectangle");
    const medianTwoSortedArrays = require("../arrays/median-two-sorted-arrays");

    assert.equal(ternarySearch([1, 2, 3, 4, 5], 4), 3);
    assert.deepStrictEqual(mergeIntervals([
        { start: 1, end: 3 },
        { start: 2, end: 6 },
        { start: 8, end: 10 },
    ]), [
        { start: 1, end: 6 },
        { start: 8, end: 10 },
    ]);
    assert.equal(intervalPartitioning([
        { start: 0, end: 30 },
        { start: 5, end: 10 },
        { start: 15, end: 20 },
    ]).roomCount, 2);
    assert.deepStrictEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
    assert.deepStrictEqual(threeSum([-1, 0, 1, 2, -1, -4], 0), [[-1, -1, 2], [-1, 0, 1]]);
    assert.equal(fourSum([1, 0, -1, 0, -2, 2], 0).length, 3);
    assert.equal(maximumSubarrayCircular([5, -3, 5]), 10);
    assert.equal(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
    assert.equal(trappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6);
    assert.deepStrictEqual(nextGreaterElement([2, 1, 2, 4, 3]), [4, 2, 4, -1, -1]);
    assert.deepStrictEqual(nextSmallerElement([4, 8, 5, 2, 25]), [2, 5, 2, -1, -1]);
    assert.deepStrictEqual(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]), [1, 1, 4, 2, 1, 1, 0, 0]);
    assert.equal(longestConsecutiveSequence([100, 4, 200, 1, 3, 2]), 4);
    assert.equal(maximumSumRectangle([
        [1, 2, -1, -4, -20],
        [-8, -3, 4, 2, 1],
        [3, 8, 10, 1, 3],
        [-4, -1, 1, 7, -6],
    ]), 29);
    assert.equal(medianTwoSortedArrays([1, 3], [2]), 2);
});

addTest("string expansion covers windows, automata, trees, and compression families", () => {
    const minimumWindowSubstring = require("../strings/minimum-window-substring");
    const longestUniqueSubstring = require("../strings/longest-unique-substring");
    const longestRepeatedSubstring = require("../strings/longest-repeated-substring");
    const prefixAutomaton = require("../strings/prefix-automaton");
    const finiteAutomatonSearch = require("../strings/finite-automaton-search");
    const anagramSearch = require("../strings/anagram-search");
    const shortestPalindrome = require("../strings/shortest-palindrome");
    const longestPrefixSuffix = require("../strings/longest-prefix-suffix");
    const Eertree = require("../strings/eertree");
    const wuManber = require("../strings/wu-manber");
    const shannonFanoCoding = require("../strings/shannon-fano-coding");
    const lz78 = require("../strings/lz78");
    const lzw = require("../strings/lzw");
    const crc32 = require("../strings/crc32");
    const soundex = require("../strings/soundex");

    assert.equal(minimumWindowSubstring("ADOBECODEBANC", "ABC"), "BANC");
    assert.deepStrictEqual(longestUniqueSubstring("abcabcbb"), { length: 3, substring: "abc" });
    assert.deepStrictEqual(longestRepeatedSubstring("banana"), { length: 3, substring: "ana" });
    assert.equal(prefixAutomaton("abab", ["a", "b"]).transitions[0].get("a"), 1);
    assert.deepStrictEqual(finiteAutomatonSearch("abababa", "aba"), [0, 2, 4]);
    assert.deepStrictEqual(anagramSearch("cbaebabacd", "abc"), [0, 6]);
    assert.equal(shortestPalindrome("aacecaaa"), "aaacecaaa");
    assert.equal(longestPrefixSuffix("levellevel"), "level");
    assert.equal(new Eertree().build("ababa").palindromes().some((entry) => entry.length === 5), true);
    assert.deepStrictEqual(
        wuManber("abracadabra", ["abra", "cad"]).sort((first, second) => first.index - second.index),
        [{ pattern: "abra", index: 0 }, { pattern: "cad", index: 4 }, { pattern: "abra", index: 7 }]
    );

    const shannon = shannonFanoCoding.encode("banana");
    assert.equal(shannonFanoCoding.decode(shannon.encoded, shannon.codes), "banana");
    assert.equal(lz78.decompress(lz78.compress("abracadabra")), "abracadabra");
    assert.equal(lzw.decompress(lzw.compress("TOBEORNOTTOBEORTOBEORNOT")), "TOBEORNOTTOBEORTOBEORNOT");
    assert.equal(crc32("hello"), 907060870);
    assert.equal(soundex("Robert"), "R163");
});

addTest("suffix tree family and FM-index support substring queries", () => {
    const suffixTree = new SuffixTree().build("banana");
    const ukkonen = new UkkonenSuffixTree().build("banana");
    const fmIndex = new FMIndex("banana");

    assert.equal(suffixTree.contains("ana"), true);
    assert.deepStrictEqual(suffixTree.occurrences("ana"), [1, 3]);
    assert.equal(ukkonen.contains("nan"), true);
    assert.deepStrictEqual(ukkonen.occurrences("na"), [2, 4]);
    assert.equal(fmIndex.count("ana"), 2);
    assert.deepStrictEqual(fmIndex.search("ban"), [0]);
});

addTest("advanced graph expansion handles cuts, flows, reductions, and orderings", () => {
    const stoerWagnerMinCut = require("../graph/stoer-wagner-min-cut");
    const chuLiuEdmonds = require("../graph/chu-liu-edmonds");
    const pushRelabel = require("../graph/push-relabel");
    const minCostMaxFlow = require("../graph/min-cost-max-flow");
    const allTopologicalSorts = require("../graph/all-topological-sorts");
    const transitiveReduction = require("../graph/transitive-reduction");
    const multiSourceBFS = require("../graph/multi-source-bfs");
    const widestPath = require("../graph/widest-path");
    const degeneracyOrdering = require("../graph/degeneracy-ordering");
    const cycleBasis = require("../graph/cycle-basis");

    const undirected = new WeightedGraph();
    undirected.addEdge("A", "B", 1).addEdge("B", "C", 1).addEdge("C", "D", 1).addEdge("D", "A", 1);
    assert.equal(stoerWagnerMinCut(undirected).cutWeight, 2);

    const directed = new WeightedGraph(true);
    directed
        .addEdge("A", "B", 1)
        .addEdge("A", "C", 5)
        .addEdge("B", "C", 1)
        .addEdge("A", "D", 4)
        .addEdge("C", "D", 1)
        .addEdge("B", "D", 3);
    assert.equal(chuLiuEdmonds(directed, "A").totalWeight, 3);

    assert.equal(pushRelabel(
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
    ).maxFlow, 5);

    assert.deepStrictEqual(minCostMaxFlow(
        ["S", "A", "B", "T"],
        [
            { from: "S", to: "A", capacity: 2, cost: 1 },
            { from: "S", to: "B", capacity: 1, cost: 2 },
            { from: "A", to: "T", capacity: 2, cost: 1 },
            { from: "B", to: "T", capacity: 1, cost: 1 },
        ],
        "S",
        "T"
    ), { maxFlow: 3, minCost: 7 });

    const dag = new Graph(true);
    dag.addEdge("A", "C").addEdge("B", "C");
    assert.equal(allTopologicalSorts(dag).length, 2);

    const reductionGraph = new Graph(true);
    reductionGraph.addEdge("A", "B").addEdge("B", "C").addEdge("A", "C");
    assert.deepStrictEqual(transitiveReduction(reductionGraph).sort(), [["A", "B"], ["B", "C"]]);

    const bfsGraph = new Graph();
    bfsGraph.addEdge("A", "B").addEdge("B", "C").addEdge("C", "D");
    const multi = multiSourceBFS(bfsGraph, ["A", "D"]);
    assert.equal(multi.distances.get("B"), 1);
    assert.equal(multi.distances.get("C"), 1);

    const widestGraph = new WeightedGraph(true);
    widestGraph.addEdge("A", "B", 5).addEdge("A", "C", 2).addEdge("B", "D", 4).addEdge("C", "D", 6);
    assert.equal(widestPath(widestGraph, "A").capacities.get("D"), 4);

    const degeneracyGraph = new Graph();
    degeneracyGraph.addEdge("A", "B").addEdge("B", "C").addEdge("C", "A").addEdge("C", "D");
    assert.equal(degeneracyOrdering(degeneracyGraph).degeneracy, 2);
    assert.equal(cycleBasis(degeneracyGraph).length, 1);
});

addTest("Hungarian and Blossom algorithms solve assignment and general matching", () => {
    assert.deepStrictEqual(hungarianAlgorithm([
        [4, 1, 3],
        [2, 0, 5],
        [3, 2, 2],
    ]), {
        minCost: 5,
        assignment: [1, 0, 2],
    });

    const graph = new Graph();
    graph
        .addEdge("A", "B")
        .addEdge("B", "C")
        .addEdge("C", "D")
        .addEdge("D", "A")
        .addEdge("A", "C");

    assert.equal(blossomAlgorithm(graph).size, 2);
});

addTest("math transforms, decomposition, and numerical methods return stable results", () => {
    const fft = require("../math/transforms/fft");
    const ifft = require("../math/transforms/ifft");
    const convolutionFFT = require("../math/transforms/convolution-fft");
    const ntt = require("../math/transforms/ntt");
    const convolutionNTT = require("../math/transforms/convolution-ntt");
    const matrixExponentiation = require("../math/algebra/matrix-exponentiation");
    const strassenMatrixMultiplication = require("../math/algebra/strassen-matrix-multiplication");
    const gramSchmidt = require("../math/algebra/gram-schmidt");
    const qrDecomposition = require("../math/algebra/qr-decomposition");
    const polynomialLongDivision = require("../math/algebra/polynomial-long-division");
    const newtonInterpolation = require("../math/algebra/newton-interpolation");
    const bisectionMethod = require("../math/numerical/bisection-method");
    const trapezoidalRule = require("../math/numerical/trapezoidal-rule");
    const simpsonRule = require("../math/numerical/simpson-rule");
    const goldenSectionSearch = require("../math/numerical/golden-section-search");

    assert.deepStrictEqual(fft([1, 0, 0, 0]).map((value) => Math.round(value.re)), [1, 1, 1, 1]);
    assert.deepStrictEqual(ifft(fft([1, 2, 3, 4])).map((value) => Math.round(value.re)), [1, 2, 3, 4]);
    assert.deepStrictEqual(convolutionFFT([1, 2], [3, 4]), [3, 10, 8]);
    assert.deepStrictEqual(ntt(ntt([1, 2, 3, 4], false), true), [1, 2, 3, 4]);
    assert.deepStrictEqual(convolutionNTT([1, 2], [3, 4]), [3, 10, 8]);
    assert.deepStrictEqual(matrixExponentiation([[1, 1], [1, 0]], 5), [[8, 5], [5, 3]]);
    assert.deepStrictEqual(strassenMatrixMultiplication([[1, 2], [3, 4]], [[5, 6], [7, 8]]), [[19, 22], [43, 50]]);
    assert.deepStrictEqual(gramSchmidt([[1, 0], [1, 1]]).map((vector) => vector.map((value) => Math.round(value))), [[1, 0], [0, 1]]);
    const qr = qrDecomposition([[1, 1], [0, 1]]);
    assert.ok(Math.abs((qr.Q[0][0] * qr.R[0][0]) + (qr.Q[0][1] * qr.R[1][0]) - 1) < 1e-6);
    assert.deepStrictEqual(polynomialLongDivision([1, -3, 2], [1, -1]), { quotient: [1, -2], remainder: [0] });
    assert.equal(Math.round(newtonInterpolation([{ x: 1, y: 1 }, { x: 2, y: 4 }, { x: 3, y: 9 }], 4)), 16);
    assert.ok(Math.abs(bisectionMethod((x) => (x * x) - 2, 1, 2) - Math.sqrt(2)) < 1e-6);
    assert.ok(Math.abs(trapezoidalRule((x) => x * x, 0, 1) - (1 / 3)) < 1e-3);
    assert.ok(Math.abs(simpsonRule((x) => x * x, 0, 1) - (1 / 3)) < 1e-6);
    assert.ok(Math.abs(goldenSectionSearch((x) => (x - 2) ** 2, 0, 5) - 2) < 1e-5);
});

addTest("dp and optimization expansion covers tours, assignments, stocks, and grids", () => {
    const heldKarpTSP = require("../dp/held-karp-tsp");
    const assignmentBitmaskDP = require("../dp/assignment-bitmask-dp");
    const longestAlternatingSubsequence = require("../dp/longest-alternating-subsequence");
    const maximumSumIncreasingSubsequence = require("../dp/maximum-sum-increasing-subsequence");
    const partitionKEqualSumSubsets = require("../dp/partition-k-equal-sum-subsets");
    const stockBuySellKTransactions = require("../dp/stock-buy-sell-k-transactions");
    const stockBuySellCooldown = require("../dp/stock-buy-sell-cooldown");
    const stockBuySellFee = require("../dp/stock-buy-sell-fee");
    const longestArithmeticSubsequence = require("../dp/longest-arithmetic-subsequence");
    const minimumCostTickets = require("../dp/minimum-cost-tickets");
    const partitionArrayForMaxSum = require("../dp/partition-array-for-max-sum");
    const diceThrowWays = require("../dp/dice-throw-ways");
    const subsetSumCount = require("../dp/subset-sum-count");
    const minimumJumps = require("../dp/minimum-jumps");
    const integerBreak = require("../dp/integer-break");
    const maximalSquare = require("../dp/maximal-square");
    const maximalRectangle = require("../dp/maximal-rectangle");
    const minimumFallingPathSum = require("../dp/minimum-falling-path-sum");
    const longestStringChain = require("../dp/longest-string-chain");
    const longestDivisibleSubset = require("../dp/longest-divisible-subset");

    assert.equal(heldKarpTSP([
        [0, 10, 15, 20],
        [10, 0, 35, 25],
        [15, 35, 0, 30],
        [20, 25, 30, 0],
    ]).minCost, 80);
    assert.deepStrictEqual(assignmentBitmaskDP([[9, 2, 7], [6, 4, 3], [5, 8, 1]]), { minCost: 9, assignment: [1, 0, 2] });
    assert.equal(longestAlternatingSubsequence([1, 7, 4, 9, 2, 5]).length, 6);
    assert.equal(maximumSumIncreasingSubsequence([1, 101, 2, 3, 100, 4, 5]).maxSum, 106);
    assert.equal(partitionKEqualSumSubsets([4, 3, 2, 3, 5, 2, 1], 4), true);
    assert.equal(stockBuySellKTransactions([3, 2, 6, 5, 0, 3], 2), 7);
    assert.equal(stockBuySellCooldown([1, 2, 3, 0, 2]), 3);
    assert.equal(stockBuySellFee([1, 3, 2, 8, 4, 9], 2), 8);
    assert.equal(longestArithmeticSubsequence([3, 6, 9, 12]), 4);
    assert.equal(minimumCostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]), 11);
    assert.equal(partitionArrayForMaxSum([1, 15, 7, 9, 2, 5, 10], 3), 84);
    assert.equal(diceThrowWays(2, 6, 7), 6);
    assert.equal(subsetSumCount([2, 3, 5, 6, 8, 10], 10), 3);
    assert.equal(minimumJumps([2, 3, 1, 1, 4]), 2);
    assert.equal(integerBreak(10), 36);
    assert.equal(maximalSquare([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]), 4);
    assert.equal(maximalRectangle([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]), 6);
    assert.equal(minimumFallingPathSum([[2, 1, 3], [6, 5, 4], [7, 8, 9]]), 13);
    assert.equal(longestStringChain(["a", "b", "ba", "bca", "bda", "bdca"]), 4);
    assert.deepStrictEqual(longestDivisibleSubset([1, 2, 4, 8]), [1, 2, 4, 8]);
});

addTest("backtracking expansion handles combinations, tours, and combinatorial generation", () => {
    const combinationSum = require("../backtracking/combination-sum");
    const combinationSum2 = require("../backtracking/combination-sum-2");
    const subsetsWithDup = require("../backtracking/subsets-with-dup");
    const permuteUnique = require("../backtracking/permute-unique");
    const restoreIpAddresses = require("../backtracking/restore-ip-addresses");
    const knightTour = require("../backtracking/knight-tour");
    const mColoringProblem = require("../backtracking/m-coloring-problem");
    const deBruijnSequence = require("../backtracking/de-bruijn-sequence");
    const binaryStringsWithoutAdjacentOnes = require("../backtracking/binary-strings-without-adjacent-ones");
    const generateAbbreviations = require("../backtracking/generate-abbreviations");

    assert.deepStrictEqual(combinationSum([2, 3, 6, 7], 7), [[2, 2, 3], [7]]);
    assert.equal(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8).length, 4);
    assert.equal(subsetsWithDup([1, 2, 2]).length, 6);
    assert.equal(permuteUnique([1, 1, 2]).length, 3);
    assert.deepStrictEqual(restoreIpAddresses("25525511135").sort(), ["255.255.11.135", "255.255.111.35"]);
    assert.equal(knightTour(5, 0, 0).found, true);

    const colorGraph = new Graph();
    colorGraph.addEdge("A", "B").addEdge("B", "C").addEdge("C", "A");
    assert.equal(mColoringProblem(colorGraph, 3).possible, true);

    const sequence = deBruijnSequence(["0", "1"], 2);
    ["00", "01", "10", "11"].forEach((pattern) => assert.equal(sequence.includes(pattern), true));
    assert.deepStrictEqual(binaryStringsWithoutAdjacentOnes(3), ["000", "001", "010", "100", "101"]);
    assert.equal(generateAbbreviations("word").length, 16);
});

addTest("geometry and streaming/statistics expansion covers hulls, unions, estimators, and regression", () => {
    const grahamScan = require("../geometry/graham-scan");
    const closestPairOfPoints = require("../geometry/closest-pair-of-points");
    const polygonCentroid = require("../geometry/polygon-centroid");
    const ramerDouglasPeucker = require("../geometry/ramer-douglas-peucker");
    const midpointCircle = require("../geometry/midpoint-circle");
    const deCasteljauBezier = require("../geometry/de-casteljau-bezier");
    const skylineProblem = require("../geometry/skyline-problem");
    const rectangleUnionArea = require("../geometry/rectangle-union-area");
    const intervalUnionLength = require("../geometry/interval-union-length");
    const rotatingCalipersDiameter = require("../geometry/rotating-calipers-diameter");
    const HyperLogLog = require("../probabilistic/hyperloglog");
    const misraGries = require("../probabilistic/misra-gries");
    const AliasMethod = require("../probabilistic/alias-method");
    const WelfordOnlineVariance = require("../statistics/welford-online-variance");
    const simpleLinearRegression = require("../statistics/simple-linear-regression");

    const points = [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 1, y: 1 },
        { x: 0, y: 1 },
        { x: 0.5, y: 0.5 },
    ];

    assert.equal(grahamScan(points).length, 4);
    assert.equal(closestPairOfPoints([{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 5, y: 5 }]).distance, 1);
    assert.deepStrictEqual(polygonCentroid(points.slice(0, 4)), { x: 0.5, y: 0.5 });
    assert.deepStrictEqual(ramerDouglasPeucker([{ x: 0, y: 0 }, { x: 1, y: 0.1 }, { x: 2, y: 0 }], 0.2), [{ x: 0, y: 0 }, { x: 2, y: 0 }]);
    assert.equal(midpointCircle(1).length, 8);
    assert.deepStrictEqual(deCasteljauBezier([{ x: 0, y: 0 }, { x: 2, y: 2 }], 0.25), { x: 0.5, y: 0.5 });
    assert.deepStrictEqual(skylineProblem([{ left: 2, right: 9, height: 10 }, { left: 3, right: 7, height: 15 }, { left: 5, right: 12, height: 12 }]).slice(0, 3), [[2, 10], [3, 15], [7, 12]]);
    assert.equal(rectangleUnionArea([{ x1: 0, y1: 0, x2: 2, y2: 2 }, { x1: 1, y1: 0, x2: 3, y2: 1 }]), 5);
    assert.equal(intervalUnionLength([{ start: 1, end: 3 }, { start: 2, end: 5 }, { start: 6, end: 8 }]), 6);
    assert.ok(Math.abs(rotatingCalipersDiameter(points.slice(0, 4)).distance - Math.sqrt(2)) < 1e-6);

    const hll = new HyperLogLog(6);
    Array.from({ length: 100 }, (_, index) => index).forEach((value) => hll.add(value));
    assert.ok(hll.estimate() > 50 && hll.estimate() < 200);
    assert.equal(misraGries([1, 1, 1, 2, 2, 3, 3, 3, 3], 3).has(3), true);
    const alias = new AliasMethod([1, 3]);
    assert.equal(alias.sample(() => 0.9), 1);
    const variance = new WelfordOnlineVariance();
    variance.add(1).add(2).add(3);
    assert.equal(variance.variance(), 1);
    assert.equal(simpleLinearRegression([{ x: 1, y: 3 }, { x: 2, y: 5 }, { x: 3, y: 7 }]).predict(4), 9);
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
