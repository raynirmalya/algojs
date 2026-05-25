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
const RedBlackTree = require("./collections/red-black-tree");
const Treap = require("./collections/treap");
const BTree = require("./collections/b-tree");
const BPlusTree = require("./collections/b-plus-tree");
const IntervalTree = require("./collections/interval-tree");
const OrderStatisticTree = require("./collections/order-statistic-tree");
const BinaryHeap = require("./collections/binary-heap");
const PriorityQueue = require("./collections/priority-queue");
const DisjointSetUnion = require("./collections/disjoint-set");
const Trie = require("./collections/trie");
const PersistentTrie = require("./collections/persistent-trie");
const SegmentTree = require("./collections/segment-tree");
const PersistentSegmentTree = require("./collections/persistent-segment-tree");
const FenwickTree = require("./collections/fenwick-tree");
const SparseTable = require("./collections/sparse-table");
const MonotonicQueue = require("./collections/monotonic-queue");
const MonotonicStack = require("./collections/monotonic-stack");
const BinaryTrie = require("./collections/binary-trie");
const KDTree = require("./collections/kd-tree");
const SqrtDecomposition = require("./collections/sqrt-decomposition");
const FenwickTree2D = require("./collections/fenwick-tree-2d");
const Matrices = require("./math/matrix");
const StringOps = require("./stringops");
const {
    slidingWindowMaximum,
    PrefixSum,
    DifferenceArray,
    quickSelect,
    medianOfMedians,
    nextPermutation,
    majorityVote,
    fisherYatesShuffle,
    reservoirSampling,
    coordinateCompression,
    inversionCount,
    kWayMerge,
    meetInTheMiddleSubsetSum,
    slidingWindowMedian,
    ternarySearch,
    mergeIntervals,
    intervalPartitioning,
    twoSum,
    threeSum,
    fourSum,
    maximumSubarrayCircular,
    containerWithMostWater,
    trappingRainWater,
    nextGreaterElement,
    nextSmallerElement,
    dailyTemperatures,
    longestConsecutiveSequence,
    maximumSumRectangle,
    medianTwoSortedArrays,
} = require("./arrays");
const {
    activitySelection,
    optimalMergePattern,
} = require("./greedy");
const {
    BloomFilter,
    CountMinSketch,
    ConsistentHashing,
    HyperLogLog,
    misraGries,
    AliasMethod,
} = require("./probabilistic");
const {
    WelfordOnlineVariance,
    simpleLinearRegression,
} = require("./statistics");
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
    dagShortestPath,
    dagLongestPath,
    bidirectionalSearch,
    boruvkaMST,
    eulerianPath,
    eulerianCircuit,
    bronKerbosch,
    dsaturColoring,
    pageRank,
    hits,
    transitiveClosure,
    kargerMinCut,
    topologicalSortDFS,
    gabowSCC,
    biconnectedComponents,
    treeDiameter,
    treeIsomorphism,
    binaryLiftingLCA,
    tarjanOfflineLCA,
    idaStar,
    yenKShortestPaths,
    kCoreDecomposition,
    stoerWagnerMinCut,
    chuLiuEdmonds,
    pushRelabel,
    minCostMaxFlow,
    allTopologicalSorts,
    transitiveReduction,
    multiSourceBFS,
    widestPath,
    degeneracyOrdering,
    cycleBasis,
    hungarianAlgorithm,
    blossomAlgorithm,
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
    longestCommonSubstring,
    shortestCommonSupersequence,
    hirschbergLCS,
    damerauLevenshtein,
    boyerMooreHorspool,
    bitapSearch,
    boothMinimalRotation,
    duvalLyndonFactorization,
    longestCommonPrefix,
    naiveStringSearch,
    zFunctionSearch,
    PolynomialHash,
    SuffixAutomaton,
    smithWaterman,
    needlemanWunsch,
    burrowsWheelerTransform,
    inverseBurrowsWheelerTransform,
    huffmanCoding,
    runLengthEncoding,
    lz77,
    minimumWindowSubstring,
    longestUniqueSubstring,
    longestRepeatedSubstring,
    prefixAutomaton,
    finiteAutomatonSearch,
    anagramSearch,
    shortestPalindrome,
    longestPrefixSuffix,
    Eertree,
    wuManber,
    shannonFanoCoding,
    lz78,
    lzw,
    crc32,
    soundex,
    SuffixTree,
    UkkonenSuffixTree,
    FMIndex,
} = require("./strings");
const {
    binaryGCD,
    sieveOfEratosthenes,
    linearSieve,
    segmentedSieve,
    primeFactorization,
    eulerTotient,
    extendedEuclidean,
    chineseRemainderTheorem,
    fermatPrimalityTest,
    millerRabin,
    pollardsRho,
    fastModularExponentiation,
    modularInverse,
    lucasTheorem,
    tonelliShanks,
    babyStepGiantStep,
} = require("./math/number-theory");
const {
    karatsubaMultiplication,
    gaussianElimination,
    hornerMethod,
    matrixDeterminant,
    matrixInverse,
    luDecomposition,
    choleskyDecomposition,
    lagrangeInterpolation,
    matrixExponentiation,
    strassenMatrixMultiplication,
    gramSchmidt,
    qrDecomposition,
    polynomialLongDivision,
    newtonInterpolation,
} = require("./math/algebra");
const {
    pascalTriangle,
    binomialCoefficient,
    catalanNumber,
    derangements,
    stirlingSecondKind,
    bellNumber,
} = require("./math/combinatorics");
const {
    fastDoublingFibonacci,
} = require("./math/sequences");
const {
    fft,
    ifft,
    convolutionFFT,
    ntt,
    convolutionNTT,
} = require("./math/transforms");
const {
    newtonRaphson,
    secantMethod,
    bisectionMethod,
    trapezoidalRule,
    simpsonRule,
    goldenSectionSearch,
} = require("./math/numerical");
const {
    longestIncreasingSubsequence,
    editDistance,
    longestCommonSubsequence,
    kadane,
    zeroOneKnapsack,
    coinChange,
    subsetSum,
    unboundedKnapsack,
    matrixChainMultiplication,
    rodCutting,
    eggDropping,
    wordBreak,
    palindromePartitioning,
    weightedIntervalScheduling,
    jobSequencingWithDeadlines,
    longestPalindromicSubsequence,
    longestBitonicSubsequence,
    partitionEqualSubsetSum,
    booleanParenthesization,
    interleavingStrings,
    distinctSubsequences,
    decodeWays,
    minimumSubsetSumDifference,
    longestRepeatingSubsequence,
    targetSum,
    optimalBST,
    houseRobber,
    houseRobberCircular,
    minimumPathSum,
    uniquePaths,
    uniquePathsWithObstacles,
    minimumCostClimbingStairs,
    burstBalloons,
    wildcardMatching,
    regularExpressionMatching,
    wordWrap,
    countPalindromicSubstrings,
    heldKarpTSP,
    assignmentBitmaskDP,
    longestAlternatingSubsequence,
    maximumSumIncreasingSubsequence,
    partitionKEqualSumSubsets,
    stockBuySellKTransactions,
    stockBuySellCooldown,
    stockBuySellFee,
    longestArithmeticSubsequence,
    minimumCostTickets,
    partitionArrayForMaxSum,
    diceThrowWays,
    subsetSumCount,
    minimumJumps,
    integerBreak,
    maximalSquare,
    maximalRectangle,
    minimumFallingPathSum,
    longestStringChain,
    longestDivisibleSubset,
} = require("./dp");
const {
    nQueens,
    sudokuSolver,
    generateParentheses,
    towerOfHanoi,
    letterCombinationsPhone,
    ratInMaze,
    wordSearch,
    floodFill,
    combinationSum,
    combinationSum2,
    subsetsWithDup,
    permuteUnique,
    restoreIpAddresses,
    knightTour,
    mColoringProblem,
    deBruijnSequence,
    binaryStringsWithoutAdjacentOnes,
    generateAbbreviations,
} = require("./backtracking");
const {
    permutations,
    combinations,
    powerSet,
    grayCode,
    kthPermutation,
    josephus,
} = require("./combinatorics");
const {
    shoelaceArea,
    pointInPolygon,
    convexHullMonotoneChain,
    lineSegmentIntersection,
    bresenhamLine,
    grahamScan,
    closestPairOfPoints,
    polygonCentroid,
    ramerDouglasPeucker,
    midpointCircle,
    deCasteljauBezier,
    skylineProblem,
    rectangleUnionArea,
    intervalUnionLength,
    rotatingCalipersDiameter,
} = require("./geometry");

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
AlgoJs.RedBlackTree = RedBlackTree;
AlgoJs.Treap = Treap;
AlgoJs.BTree = BTree;
AlgoJs.BPlusTree = BPlusTree;
AlgoJs.IntervalTree = IntervalTree;
AlgoJs.OrderStatisticTree = OrderStatisticTree;
AlgoJs.BinaryHeap = BinaryHeap;
AlgoJs.PriorityQueue = PriorityQueue;
AlgoJs.DisjointSetUnion = DisjointSetUnion;
AlgoJs.Trie = Trie;
AlgoJs.PersistentTrie = PersistentTrie;
AlgoJs.SegmentTree = SegmentTree;
AlgoJs.PersistentSegmentTree = PersistentSegmentTree;
AlgoJs.FenwickTree = FenwickTree;
AlgoJs.SparseTable = SparseTable;
AlgoJs.MonotonicQueue = MonotonicQueue;
AlgoJs.MonotonicStack = MonotonicStack;
AlgoJs.BinaryTrie = BinaryTrie;
AlgoJs.KDTree = KDTree;
AlgoJs.SqrtDecomposition = SqrtDecomposition;
AlgoJs.FenwickTree2D = FenwickTree2D;
AlgoJs.Matrices = Matrices;
AlgoJs.Matrix = Matrices;
AlgoJs.StringOps = StringOps;
AlgoJs.slidingWindowMaximum = slidingWindowMaximum;
AlgoJs.PrefixSum = PrefixSum;
AlgoJs.DifferenceArray = DifferenceArray;
AlgoJs.quickSelect = quickSelect;
AlgoJs.medianOfMedians = medianOfMedians;
AlgoJs.nextPermutation = nextPermutation;
AlgoJs.majorityVote = majorityVote;
AlgoJs.fisherYatesShuffle = fisherYatesShuffle;
AlgoJs.reservoirSampling = reservoirSampling;
AlgoJs.coordinateCompression = coordinateCompression;
AlgoJs.inversionCount = inversionCount;
AlgoJs.kWayMerge = kWayMerge;
AlgoJs.meetInTheMiddleSubsetSum = meetInTheMiddleSubsetSum;
AlgoJs.slidingWindowMedian = slidingWindowMedian;
AlgoJs.activitySelection = activitySelection;
AlgoJs.optimalMergePattern = optimalMergePattern;
AlgoJs.BloomFilter = BloomFilter;
AlgoJs.CountMinSketch = CountMinSketch;
AlgoJs.ConsistentHashing = ConsistentHashing;
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
AlgoJs.dagShortestPath = dagShortestPath;
AlgoJs.dagLongestPath = dagLongestPath;
AlgoJs.bidirectionalSearch = bidirectionalSearch;
AlgoJs.boruvkaMST = boruvkaMST;
AlgoJs.eulerianPath = eulerianPath;
AlgoJs.eulerianCircuit = eulerianCircuit;
AlgoJs.bronKerbosch = bronKerbosch;
AlgoJs.dsaturColoring = dsaturColoring;
AlgoJs.pageRank = pageRank;
AlgoJs.hits = hits;
AlgoJs.transitiveClosure = transitiveClosure;
AlgoJs.kargerMinCut = kargerMinCut;
AlgoJs.topologicalSortDFS = topologicalSortDFS;
AlgoJs.gabowSCC = gabowSCC;
AlgoJs.biconnectedComponents = biconnectedComponents;
AlgoJs.treeDiameter = treeDiameter;
AlgoJs.treeIsomorphism = treeIsomorphism;
AlgoJs.binaryLiftingLCA = binaryLiftingLCA;
AlgoJs.tarjanOfflineLCA = tarjanOfflineLCA;
AlgoJs.idaStar = idaStar;
AlgoJs.yenKShortestPaths = yenKShortestPaths;
AlgoJs.kCoreDecomposition = kCoreDecomposition;
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
AlgoJs.longestCommonSubstring = longestCommonSubstring;
AlgoJs.shortestCommonSupersequence = shortestCommonSupersequence;
AlgoJs.hirschbergLCS = hirschbergLCS;
AlgoJs.damerauLevenshtein = damerauLevenshtein;
AlgoJs.boyerMooreHorspool = boyerMooreHorspool;
AlgoJs.bitapSearch = bitapSearch;
AlgoJs.boothMinimalRotation = boothMinimalRotation;
AlgoJs.duvalLyndonFactorization = duvalLyndonFactorization;
AlgoJs.longestCommonPrefix = longestCommonPrefix;
AlgoJs.naiveStringSearch = naiveStringSearch;
AlgoJs.zFunctionSearch = zFunctionSearch;
AlgoJs.PolynomialHash = PolynomialHash;
AlgoJs.SuffixAutomaton = SuffixAutomaton;
AlgoJs.SuffixTree = SuffixTree;
AlgoJs.UkkonenSuffixTree = UkkonenSuffixTree;
AlgoJs.FMIndex = FMIndex;
AlgoJs.smithWaterman = smithWaterman;
AlgoJs.needlemanWunsch = needlemanWunsch;
AlgoJs.burrowsWheelerTransform = burrowsWheelerTransform;
AlgoJs.inverseBurrowsWheelerTransform = inverseBurrowsWheelerTransform;
AlgoJs.huffmanCoding = huffmanCoding;
AlgoJs.runLengthEncoding = runLengthEncoding;
AlgoJs.lz77 = lz77;
AlgoJs.binaryGCD = binaryGCD;
AlgoJs.sieveOfEratosthenes = sieveOfEratosthenes;
AlgoJs.linearSieve = linearSieve;
AlgoJs.segmentedSieve = segmentedSieve;
AlgoJs.primeFactorization = primeFactorization;
AlgoJs.eulerTotient = eulerTotient;
AlgoJs.extendedEuclidean = extendedEuclidean;
AlgoJs.chineseRemainderTheorem = chineseRemainderTheorem;
AlgoJs.fermatPrimalityTest = fermatPrimalityTest;
AlgoJs.millerRabin = millerRabin;
AlgoJs.pollardsRho = pollardsRho;
AlgoJs.fastModularExponentiation = fastModularExponentiation;
AlgoJs.modularInverse = modularInverse;
AlgoJs.lucasTheorem = lucasTheorem;
AlgoJs.tonelliShanks = tonelliShanks;
AlgoJs.babyStepGiantStep = babyStepGiantStep;
AlgoJs.karatsubaMultiplication = karatsubaMultiplication;
AlgoJs.gaussianElimination = gaussianElimination;
AlgoJs.hornerMethod = hornerMethod;
AlgoJs.matrixDeterminant = matrixDeterminant;
AlgoJs.matrixInverse = matrixInverse;
AlgoJs.luDecomposition = luDecomposition;
AlgoJs.choleskyDecomposition = choleskyDecomposition;
AlgoJs.lagrangeInterpolation = lagrangeInterpolation;
AlgoJs.pascalTriangle = pascalTriangle;
AlgoJs.binomialCoefficient = binomialCoefficient;
AlgoJs.catalanNumber = catalanNumber;
AlgoJs.derangements = derangements;
AlgoJs.stirlingSecondKind = stirlingSecondKind;
AlgoJs.bellNumber = bellNumber;
AlgoJs.fastDoublingFibonacci = fastDoublingFibonacci;
AlgoJs.newtonRaphson = newtonRaphson;
AlgoJs.secantMethod = secantMethod;
AlgoJs.longestIncreasingSubsequence = longestIncreasingSubsequence;
AlgoJs.editDistance = editDistance;
AlgoJs.longestCommonSubsequence = longestCommonSubsequence;
AlgoJs.kadane = kadane;
AlgoJs.zeroOneKnapsack = zeroOneKnapsack;
AlgoJs.coinChange = coinChange;
AlgoJs.subsetSum = subsetSum;
AlgoJs.unboundedKnapsack = unboundedKnapsack;
AlgoJs.matrixChainMultiplication = matrixChainMultiplication;
AlgoJs.rodCutting = rodCutting;
AlgoJs.eggDropping = eggDropping;
AlgoJs.wordBreak = wordBreak;
AlgoJs.palindromePartitioning = palindromePartitioning;
AlgoJs.weightedIntervalScheduling = weightedIntervalScheduling;
AlgoJs.jobSequencingWithDeadlines = jobSequencingWithDeadlines;
AlgoJs.longestPalindromicSubsequence = longestPalindromicSubsequence;
AlgoJs.longestBitonicSubsequence = longestBitonicSubsequence;
AlgoJs.partitionEqualSubsetSum = partitionEqualSubsetSum;
AlgoJs.booleanParenthesization = booleanParenthesization;
AlgoJs.interleavingStrings = interleavingStrings;
AlgoJs.distinctSubsequences = distinctSubsequences;
AlgoJs.decodeWays = decodeWays;
AlgoJs.minimumSubsetSumDifference = minimumSubsetSumDifference;
AlgoJs.longestRepeatingSubsequence = longestRepeatingSubsequence;
AlgoJs.targetSum = targetSum;
AlgoJs.optimalBST = optimalBST;
AlgoJs.houseRobber = houseRobber;
AlgoJs.houseRobberCircular = houseRobberCircular;
AlgoJs.minimumPathSum = minimumPathSum;
AlgoJs.uniquePaths = uniquePaths;
AlgoJs.uniquePathsWithObstacles = uniquePathsWithObstacles;
AlgoJs.minimumCostClimbingStairs = minimumCostClimbingStairs;
AlgoJs.burstBalloons = burstBalloons;
AlgoJs.wildcardMatching = wildcardMatching;
AlgoJs.regularExpressionMatching = regularExpressionMatching;
AlgoJs.wordWrap = wordWrap;
AlgoJs.countPalindromicSubstrings = countPalindromicSubstrings;
AlgoJs.nQueens = nQueens;
AlgoJs.sudokuSolver = sudokuSolver;
AlgoJs.generateParentheses = generateParentheses;
AlgoJs.towerOfHanoi = towerOfHanoi;
AlgoJs.letterCombinationsPhone = letterCombinationsPhone;
AlgoJs.ratInMaze = ratInMaze;
AlgoJs.wordSearch = wordSearch;
AlgoJs.floodFill = floodFill;
AlgoJs.permutations = permutations;
AlgoJs.combinations = combinations;
AlgoJs.powerSet = powerSet;
AlgoJs.grayCode = grayCode;
AlgoJs.kthPermutation = kthPermutation;
AlgoJs.josephus = josephus;
AlgoJs.shoelaceArea = shoelaceArea;
AlgoJs.pointInPolygon = pointInPolygon;
AlgoJs.convexHullMonotoneChain = convexHullMonotoneChain;
AlgoJs.lineSegmentIntersection = lineSegmentIntersection;
AlgoJs.bresenhamLine = bresenhamLine;

Object.assign(AlgoJs, {
    ternarySearch,
    mergeIntervals,
    intervalPartitioning,
    twoSum,
    threeSum,
    fourSum,
    maximumSubarrayCircular,
    containerWithMostWater,
    trappingRainWater,
    nextGreaterElement,
    nextSmallerElement,
    dailyTemperatures,
    longestConsecutiveSequence,
    maximumSumRectangle,
    medianTwoSortedArrays,
    HyperLogLog,
    misraGries,
    AliasMethod,
    WelfordOnlineVariance,
    simpleLinearRegression,
    stoerWagnerMinCut,
    chuLiuEdmonds,
    pushRelabel,
    minCostMaxFlow,
    allTopologicalSorts,
    transitiveReduction,
    multiSourceBFS,
    widestPath,
    degeneracyOrdering,
    cycleBasis,
    hungarianAlgorithm,
    blossomAlgorithm,
    minimumWindowSubstring,
    longestUniqueSubstring,
    longestRepeatedSubstring,
    prefixAutomaton,
    finiteAutomatonSearch,
    anagramSearch,
    shortestPalindrome,
    longestPrefixSuffix,
    Eertree,
    wuManber,
    shannonFanoCoding,
    lz78,
    lzw,
    crc32,
    soundex,
    SuffixTree,
    UkkonenSuffixTree,
    FMIndex,
    matrixExponentiation,
    strassenMatrixMultiplication,
    gramSchmidt,
    qrDecomposition,
    polynomialLongDivision,
    newtonInterpolation,
    fft,
    ifft,
    convolutionFFT,
    ntt,
    convolutionNTT,
    bisectionMethod,
    trapezoidalRule,
    simpsonRule,
    goldenSectionSearch,
    heldKarpTSP,
    assignmentBitmaskDP,
    longestAlternatingSubsequence,
    maximumSumIncreasingSubsequence,
    partitionKEqualSumSubsets,
    stockBuySellKTransactions,
    stockBuySellCooldown,
    stockBuySellFee,
    longestArithmeticSubsequence,
    minimumCostTickets,
    partitionArrayForMaxSum,
    diceThrowWays,
    subsetSumCount,
    minimumJumps,
    integerBreak,
    maximalSquare,
    maximalRectangle,
    minimumFallingPathSum,
    longestStringChain,
    longestDivisibleSubset,
    combinationSum,
    combinationSum2,
    subsetsWithDup,
    permuteUnique,
    restoreIpAddresses,
    knightTour,
    mColoringProblem,
    deBruijnSequence,
    binaryStringsWithoutAdjacentOnes,
    generateAbbreviations,
    grahamScan,
    closestPairOfPoints,
    polygonCentroid,
    ramerDouglasPeucker,
    midpointCircle,
    deCasteljauBezier,
    skylineProblem,
    rectangleUnionArea,
    intervalUnionLength,
    rotatingCalipersDiameter,
});

module.exports = AlgoJs;
