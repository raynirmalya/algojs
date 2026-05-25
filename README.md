# algojs

`algojs` is a JavaScript algorithms and data structures library with a broad API surface across sorting, searching, collections, graph algorithms, strings, dynamic programming, number theory, geometry, probabilistic structures, and more.

Current package highlights:
- `300+` algorithm and data-structure exports
- `346` root-level exports in the current build
- CommonJS-first API with direct module imports and root-package access
- Built-in test runner with `132` passing checks in the current suite

## Install

```bash
npm install @jsundefined/algojs
```

## Quick start

### Root package import

```js
const AlgoJs = require("@jsundefined/algojs");

console.log(AlgoJs.quickSort([12, 11, 13, 5, 6, 7]));
console.log(AlgoJs.breadthFirstSearch);
console.log(new AlgoJs.BinaryHeap().isEmpty());
```

### Direct module import

```js
const dijkstra = require("@jsundefined/algojs/graph/dijkstra");
const Trie = require("@jsundefined/algojs/collections/trie");

const trie = new Trie();
trie.insert("algo");
console.log(trie.has("algo"));
```

### Matrix utilities

```js
const Matrix = require("@jsundefined/algojs/math/matrix");

const first = new Matrix([[1, 1], [2, 2]]);
const second = new Matrix([[2, 0], [0, 2]]);

console.log(first.add(second));
console.log(first.transpose());
```

### String helpers

```js
const StringOps = require("@jsundefined/algojs/stringops");

console.log(StringOps.capitalize("algojs"));
console.log(StringOps.swapcase("AlgoJS"));
```

## Testing

Run the package test suite with:

```bash
npm test
```

## Notes

- The package is CommonJS-first.
- TypeScript declaration files are not bundled yet.
- Legacy modules such as `math/matrix` and `stringops` are still included alongside the newer algorithm families.

## Root package surface

The root package exports the legacy sort/search API, the legacy collections, matrix and string helpers, and the newer category modules listed below.

### Sorting

`bubbleSort`, `selectionSort`, `insertionSort`, `mergeSort`, `quickSort`, `heapSort`, `radixSort`, `bucketSort`, `shellSort`, `timSort`, `pholeSort`, `cycleSort`, `cocktailSort`, `bitonicSort`, `pancakeSort`, `countSort`, `bogoSort`, `gnomeSort`, `stoogeSort`, `sleepSort`, `combSort`, `beadSort`

### Searching

`linearSearch`, `binarySearch`, `jumpSearch`, `interpolationSearch`, `exponentialSearch`, `fibonacciSearch`

### Collections and data structures

Count: `27`

`LinkedList`, `DoublyLinkedList`, `Stack`, `Queue`, `Deque`, `AVLTree`, `RedBlackTree`, `Treap`, `BTree`, `BPlusTree`, `IntervalTree`, `OrderStatisticTree`, `BinaryHeap`, `PriorityQueue`, `DisjointSetUnion`, `Trie`, `PersistentTrie`, `SegmentTree`, `PersistentSegmentTree`, `FenwickTree`, `SparseTable`, `MonotonicQueue`, `MonotonicStack`, `BinaryTrie`, `KDTree`, `SqrtDecomposition`, `FenwickTree2D`

### Array and selection utilities

Count: `29`

`slidingWindowMaximum`, `PrefixSum`, `DifferenceArray`, `quickSelect`, `medianOfMedians`, `nextPermutation`, `majorityVote`, `fisherYatesShuffle`, `reservoirSampling`, `coordinateCompression`, `inversionCount`, `kWayMerge`, `meetInTheMiddleSubsetSum`, `slidingWindowMedian`, `ternarySearch`, `mergeIntervals`, `intervalPartitioning`, `twoSum`, `threeSum`, `fourSum`, `maximumSubarrayCircular`, `containerWithMostWater`, `trappingRainWater`, `nextGreaterElement`, `nextSmallerElement`, `dailyTemperatures`, `longestConsecutiveSequence`, `maximumSumRectangle`, `medianTwoSortedArrays`

### Greedy

Count: `2`

`activitySelection`, `optimalMergePattern`

### Probabilistic and streaming

Count: `6`

`BloomFilter`, `CountMinSketch`, `ConsistentHashing`, `HyperLogLog`, `misraGries`, `AliasMethod`

### Statistics

Count: `2`

`WelfordOnlineVariance`, `simpleLinearRegression`

### Graph algorithms

Count: `57`

`Graph`, `WeightedGraph`, `breadthFirstSearch`, `depthFirstSearch`, `topologicalSort`, `directedCycleDetection`, `undirectedCycleDetection`, `connectedComponents`, `dijkstra`, `bellmanFord`, `floydWarshall`, `aStar`, `kruskalMST`, `primMST`, `tarjanSCC`, `articulationPoints`, `bridges`, `bipartiteCheck`, `dinicMaxFlow`, `hopcroftKarp`, `kosarajuSCC`, `johnsonShortestPaths`, `edmondsKarp`, `dagShortestPath`, `dagLongestPath`, `bidirectionalSearch`, `boruvkaMST`, `eulerianPath`, `eulerianCircuit`, `bronKerbosch`, `dsaturColoring`, `pageRank`, `hits`, `transitiveClosure`, `kargerMinCut`, `topologicalSortDFS`, `gabowSCC`, `biconnectedComponents`, `treeDiameter`, `treeIsomorphism`, `binaryLiftingLCA`, `tarjanOfflineLCA`, `idaStar`, `yenKShortestPaths`, `kCoreDecomposition`, `stoerWagnerMinCut`, `chuLiuEdmonds`, `pushRelabel`, `minCostMaxFlow`, `allTopologicalSorts`, `transitiveReduction`, `multiSourceBFS`, `widestPath`, `degeneracyOrdering`, `cycleBasis`, `hungarianAlgorithm`, `blossomAlgorithm`

### String algorithms and indexing

Count: `48`

`prefixFunction`, `kmpSearch`, `zAlgorithm`, `rabinKarp`, `AhoCorasick`, `suffixArray`, `lcpArray`, `manacher`, `boyerMoore`, `RollingHash`, `longestCommonSubstring`, `shortestCommonSupersequence`, `hirschbergLCS`, `damerauLevenshtein`, `boyerMooreHorspool`, `bitapSearch`, `boothMinimalRotation`, `duvalLyndonFactorization`, `longestCommonPrefix`, `naiveStringSearch`, `zFunctionSearch`, `PolynomialHash`, `SuffixAutomaton`, `SuffixTree`, `UkkonenSuffixTree`, `FMIndex`, `smithWaterman`, `needlemanWunsch`, `burrowsWheelerTransform`, `inverseBurrowsWheelerTransform`, `huffmanCoding`, `runLengthEncoding`, `lz77`, `minimumWindowSubstring`, `longestUniqueSubstring`, `longestRepeatedSubstring`, `prefixAutomaton`, `finiteAutomatonSearch`, `anagramSearch`, `shortestPalindrome`, `longestPrefixSuffix`, `Eertree`, `wuManber`, `shannonFanoCoding`, `lz78`, `lzw`, `crc32`, `soundex`

### Number theory

Count: `16`

`binaryGCD`, `sieveOfEratosthenes`, `linearSieve`, `segmentedSieve`, `primeFactorization`, `eulerTotient`, `extendedEuclidean`, `chineseRemainderTheorem`, `fermatPrimalityTest`, `millerRabin`, `pollardsRho`, `fastModularExponentiation`, `modularInverse`, `lucasTheorem`, `tonelliShanks`, `babyStepGiantStep`

### Algebra

Count: `14`

`karatsubaMultiplication`, `gaussianElimination`, `hornerMethod`, `matrixDeterminant`, `matrixInverse`, `luDecomposition`, `choleskyDecomposition`, `lagrangeInterpolation`, `matrixExponentiation`, `strassenMatrixMultiplication`, `gramSchmidt`, `qrDecomposition`, `polynomialLongDivision`, `newtonInterpolation`

### Math combinatorics

Count: `6`

`pascalTriangle`, `binomialCoefficient`, `catalanNumber`, `derangements`, `stirlingSecondKind`, `bellNumber`

### Math sequences

Count: `1`

`fastDoublingFibonacci`

### Transforms

Count: `5`

`fft`, `ifft`, `convolutionFFT`, `ntt`, `convolutionNTT`

### Numerical methods

Count: `6`

`newtonRaphson`, `secantMethod`, `bisectionMethod`, `trapezoidalRule`, `simpsonRule`, `goldenSectionSearch`

### Dynamic programming

Count: `57`

`longestIncreasingSubsequence`, `editDistance`, `longestCommonSubsequence`, `kadane`, `zeroOneKnapsack`, `coinChange`, `subsetSum`, `unboundedKnapsack`, `matrixChainMultiplication`, `rodCutting`, `eggDropping`, `wordBreak`, `palindromePartitioning`, `weightedIntervalScheduling`, `jobSequencingWithDeadlines`, `longestPalindromicSubsequence`, `longestBitonicSubsequence`, `partitionEqualSubsetSum`, `booleanParenthesization`, `interleavingStrings`, `distinctSubsequences`, `decodeWays`, `minimumSubsetSumDifference`, `longestRepeatingSubsequence`, `targetSum`, `optimalBST`, `houseRobber`, `houseRobberCircular`, `minimumPathSum`, `uniquePaths`, `uniquePathsWithObstacles`, `minimumCostClimbingStairs`, `burstBalloons`, `wildcardMatching`, `regularExpressionMatching`, `wordWrap`, `countPalindromicSubstrings`, `heldKarpTSP`, `assignmentBitmaskDP`, `longestAlternatingSubsequence`, `maximumSumIncreasingSubsequence`, `partitionKEqualSumSubsets`, `stockBuySellKTransactions`, `stockBuySellCooldown`, `stockBuySellFee`, `longestArithmeticSubsequence`, `minimumCostTickets`, `partitionArrayForMaxSum`, `diceThrowWays`, `subsetSumCount`, `minimumJumps`, `integerBreak`, `maximalSquare`, `maximalRectangle`, `minimumFallingPathSum`, `longestStringChain`, `longestDivisibleSubset`

### Backtracking

Count: `18`

`nQueens`, `sudokuSolver`, `generateParentheses`, `towerOfHanoi`, `letterCombinationsPhone`, `ratInMaze`, `wordSearch`, `floodFill`, `combinationSum`, `combinationSum2`, `subsetsWithDup`, `permuteUnique`, `restoreIpAddresses`, `knightTour`, `mColoringProblem`, `deBruijnSequence`, `binaryStringsWithoutAdjacentOnes`, `generateAbbreviations`

### Combinatorics helpers

Count: `6`

`permutations`, `combinations`, `powerSet`, `grayCode`, `kthPermutation`, `josephus`

### Geometry

Count: `15`

`shoelaceArea`, `pointInPolygon`, `convexHullMonotoneChain`, `lineSegmentIntersection`, `bresenhamLine`, `grahamScan`, `closestPairOfPoints`, `polygonCentroid`, `ramerDouglasPeucker`, `midpointCircle`, `deCasteljauBezier`, `skylineProblem`, `rectangleUnionArea`, `intervalUnionLength`, `rotatingCalipersDiameter`

### String helpers

Count: `25`

`capitalize`, `casefold`, `center`, `count`, `expandtabs`, `isUpperCase`, `isLowerCase`, `swapcase`, `toUpperFirstLetter`, `format`, `formatter`, `isPositive`, `returnSign`, `numberChangeWithChar`, `isAlnum`, `isDecimal`, `isAlpha`, `isDigit`, `isIdentifier`, `isSpace`, `unicodeToChar`, `binaryToDec`, `decToBinary`, `zfill`, `jsonCleaner`

### Matrix helpers

`Matrices`

## Direct category imports

You can import from the package root or directly from categories:

```js
const { dijkstra, Trie, suffixArray, zeroOneKnapsack } = require("@jsundefined/algojs");

const graph = require("@jsundefined/algojs/graph");
const strings = require("@jsundefined/algojs/strings");
const dp = require("@jsundefined/algojs/dp");
```

## Repository

- GitHub: `https://github.com/raynirmalya/algojs`
- npm: `https://www.npmjs.com/package/@jsundefined/algojs`
