const bubbleSort = require("./sort/bubble.js");
const selectionSort = require("./sort/selection.js");
const insertionSort = require("./sort/insertion.js");
const mergeSort = require("./sort/merge.js");
const quickSort = require("./sort/quick.js");
const heapSort = require("./sort/heap.js");
const radixSort = require("./sort/radix.js");
const bucketSort = require("./sort/bucket.js");
const shellSort = require("./sort/shell.js");
const timSort = require("./sort/tim.js");
const pholeSort = require("./sort/pigeonhole.js");
const cycleSort = require("./sort/cycle.js");
const cocktailSort = require("./sort/cocktail.js");
const bitonicSort = require("./sort/bitonic.js");
const pancakeSort = require("./sort/pancake.js");
const countSort = require("./sort/count.js");
const bogoSort = require("./sort/bogo.js");
const gnomeSort = require("./sort/gnome.js");
const stoogeSort = require("./sort/stooge.js");
const sleepSort = require("./sort/sleep.js");
const combSort = require("./sort/comb.js");
const beadSort = require("./sort/bead.js");
const linearSearch = require("./search/linear.js");
const binarySearch = require("./search/binary.js");
const jumpSearch = require("./search/jump.js");
const interpolationSearch = require("./search/interpolation.js");
const exponentialSearch = require("./search/exponential.js");
const fibonacciSearch = require("./search/fibonacci.js");
const LinkedList = require("./collections/linked-list/LinkedList.js");
const DoublyLinkedList = require("./collections/linked-list/DoublyLinkedList.js");
const Stack = require("./collections/stack");
const Queue = require("./collections/queue");
const Deque = require("./collections/deque");
const AVLTree = require("./collections/avl-tree");
const Treap = require("./collections/treap");
const IntervalTree = require("./collections/interval-tree");
const BinaryHeap = require("./collections/binary-heap");
const PriorityQueue = require("./collections/priority-queue");
const DisjointSetUnion = require("./collections/disjoint-set");
const Trie = require("./collections/trie");
const SegmentTree = require("./collections/segment-tree");
const FenwickTree = require("./collections/fenwick-tree");
const SparseTable = require("./collections/sparse-table");
const MonotonicQueue = require("./collections/monotonic-queue");
const MonotonicStack = require("./collections/monotonic-stack");
const BinaryTrie = require("./collections/binary-trie");
const Matrices = require("./math/matrix");
const StringOps = require("./stringops");
const {
    slidingWindowMaximum,
    PrefixSum,
    DifferenceArray,
    quickSelect,
    medianOfMedians,
} = require("./arrays");
const {
    Graph,
    WeightedGraph,
    breadthFirstSearch,
    depthFirstSearch,
    topologicalSort,
    directedCycleDetection,
    undirectedCycleDetection,
    connectedComponents,
    dijkstra,
    bellmanFord,
    floydWarshall,
    aStar,
    kruskalMST,
    primMST,
    tarjanSCC,
    articulationPoints,
    bridges,
    bipartiteCheck,
    dinicMaxFlow,
    hopcroftKarp,
    kosarajuSCC,
    johnsonShortestPaths,
    edmondsKarp,
} = require("./graph");
const {
    prefixFunction,
    kmpSearch,
    zAlgorithm,
    rabinKarp,
    AhoCorasick,
    suffixArray,
    lcpArray,
    manacher,
    boyerMoore,
    RollingHash,
} = require("./strings");
const {
    sieveOfEratosthenes,
    extendedEuclidean,
    fastModularExponentiation,
    modularInverse,
} = require("./math/number-theory");
const {
    longestIncreasingSubsequence,
    editDistance,
    longestCommonSubsequence,
    kadane,
    zeroOneKnapsack,
    coinChange,
    subsetSum,
} = require("./dp");

function AlgoJs (){
}

AlgoJs.bubbleSort = bubbleSort;
AlgoJs.selectionSort = selectionSort;
AlgoJs.insertionSort = insertionSort;
AlgoJs.mergeSort = mergeSort;
AlgoJs.quickSort = quickSort;
AlgoJs.heapSort = heapSort;
AlgoJs.radixSort = radixSort;
AlgoJs.bucketSort = bucketSort;
AlgoJs.shellSort = shellSort;
AlgoJs.timSort = timSort;
AlgoJs.pholeSort = pholeSort;
AlgoJs.cycleSort = cycleSort;
AlgoJs.cocktailSort = cocktailSort;
AlgoJs.bitonicSort = bitonicSort;
AlgoJs.pancakeSort = pancakeSort;
AlgoJs.countSort = countSort;
AlgoJs.bogoSort = bogoSort;
AlgoJs.gnomeSort = gnomeSort;
AlgoJs.stoogeSort = stoogeSort;
AlgoJs.sleepSort = sleepSort;
AlgoJs.combSort = combSort;
AlgoJs.beadSort = beadSort;
AlgoJs.linearSearch = linearSearch;
AlgoJs.binarySearch = binarySearch;
AlgoJs.jumpSearch = jumpSearch;
AlgoJs.interpolationSearch = interpolationSearch;
AlgoJs.exponentialSearch = exponentialSearch;
AlgoJs.fibonacciSearch = fibonacciSearch;
AlgoJs.LinkedList = LinkedList;
AlgoJs.DoublyLinkedList = DoublyLinkedList;
AlgoJs.Stack = Stack;
AlgoJs.Queue = Queue;
AlgoJs.Deque = Deque;
AlgoJs.AVLTree = AVLTree;
AlgoJs.Treap = Treap;
AlgoJs.IntervalTree = IntervalTree;
AlgoJs.BinaryHeap = BinaryHeap;
AlgoJs.PriorityQueue = PriorityQueue;
AlgoJs.DisjointSetUnion = DisjointSetUnion;
AlgoJs.Trie = Trie;
AlgoJs.SegmentTree = SegmentTree;
AlgoJs.FenwickTree = FenwickTree;
AlgoJs.SparseTable = SparseTable;
AlgoJs.MonotonicQueue = MonotonicQueue;
AlgoJs.MonotonicStack = MonotonicStack;
AlgoJs.BinaryTrie = BinaryTrie;
AlgoJs.Matrices = Matrices;
AlgoJs.Matrix = Matrices;
AlgoJs.StringOps = StringOps;
AlgoJs.slidingWindowMaximum = slidingWindowMaximum;
AlgoJs.PrefixSum = PrefixSum;
AlgoJs.DifferenceArray = DifferenceArray;
AlgoJs.quickSelect = quickSelect;
AlgoJs.medianOfMedians = medianOfMedians;
AlgoJs.Graph = Graph;
AlgoJs.WeightedGraph = WeightedGraph;
AlgoJs.breadthFirstSearch = breadthFirstSearch;
AlgoJs.depthFirstSearch = depthFirstSearch;
AlgoJs.topologicalSort = topologicalSort;
AlgoJs.directedCycleDetection = directedCycleDetection;
AlgoJs.undirectedCycleDetection = undirectedCycleDetection;
AlgoJs.connectedComponents = connectedComponents;
AlgoJs.dijkstra = dijkstra;
AlgoJs.bellmanFord = bellmanFord;
AlgoJs.floydWarshall = floydWarshall;
AlgoJs.aStar = aStar;
AlgoJs.kruskalMST = kruskalMST;
AlgoJs.primMST = primMST;
AlgoJs.tarjanSCC = tarjanSCC;
AlgoJs.articulationPoints = articulationPoints;
AlgoJs.bridges = bridges;
AlgoJs.bipartiteCheck = bipartiteCheck;
AlgoJs.dinicMaxFlow = dinicMaxFlow;
AlgoJs.hopcroftKarp = hopcroftKarp;
AlgoJs.kosarajuSCC = kosarajuSCC;
AlgoJs.johnsonShortestPaths = johnsonShortestPaths;
AlgoJs.edmondsKarp = edmondsKarp;
AlgoJs.prefixFunction = prefixFunction;
AlgoJs.kmpSearch = kmpSearch;
AlgoJs.zAlgorithm = zAlgorithm;
AlgoJs.rabinKarp = rabinKarp;
AlgoJs.AhoCorasick = AhoCorasick;
AlgoJs.suffixArray = suffixArray;
AlgoJs.lcpArray = lcpArray;
AlgoJs.manacher = manacher;
AlgoJs.boyerMoore = boyerMoore;
AlgoJs.RollingHash = RollingHash;
AlgoJs.sieveOfEratosthenes = sieveOfEratosthenes;
AlgoJs.extendedEuclidean = extendedEuclidean;
AlgoJs.fastModularExponentiation = fastModularExponentiation;
AlgoJs.modularInverse = modularInverse;
AlgoJs.longestIncreasingSubsequence = longestIncreasingSubsequence;
AlgoJs.editDistance = editDistance;
AlgoJs.longestCommonSubsequence = longestCommonSubsequence;
AlgoJs.kadane = kadane;
AlgoJs.zeroOneKnapsack = zeroOneKnapsack;
AlgoJs.coinChange = coinChange;
AlgoJs.subsetSum = subsetSum;

module.exports = AlgoJs;
