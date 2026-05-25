const prefixFunction = require("./prefix-function");
const kmpSearch = require("./kmp");
const zAlgorithm = require("./z-algorithm");
const rabinKarp = require("./rabin-karp");
const AhoCorasick = require("./aho-corasick");
const suffixArray = require("./suffix-array");
const lcpArray = require("./lcp-array");
const manacher = require("./manacher");
const boyerMoore = require("./boyer-moore");
const RollingHash = require("./rolling-hash");
const longestCommonSubstring = require("./longest-common-substring");
const shortestCommonSupersequence = require("./shortest-common-supersequence");
const hirschbergLCS = require("./hirschberg-lcs");
const damerauLevenshtein = require("./damerau-levenshtein");
const boyerMooreHorspool = require("./boyer-moore-horspool");
const bitapSearch = require("./bitap-search");
const boothMinimalRotation = require("./booth-minimal-rotation");
const duvalLyndonFactorization = require("./duval-lyndon-factorization");
const longestCommonPrefix = require("./longest-common-prefix");
const naiveStringSearch = require("./naive-string-search");
const zFunctionSearch = require("./z-function-search");
const PolynomialHash = require("./polynomial-hash");
const SuffixAutomaton = require("./suffix-automaton");
const smithWaterman = require("./smith-waterman");
const needlemanWunsch = require("./needleman-wunsch");
const burrowsWheelerTransform = require("./burrows-wheeler-transform");
const inverseBurrowsWheelerTransform = require("./inverse-burrows-wheeler-transform");
const huffmanCoding = require("./huffman-coding");
const runLengthEncoding = require("./run-length-encoding");
const lz77 = require("./lz77");
const minimumWindowSubstring = require("./minimum-window-substring");
const longestUniqueSubstring = require("./longest-unique-substring");
const longestRepeatedSubstring = require("./longest-repeated-substring");
const prefixAutomaton = require("./prefix-automaton");
const finiteAutomatonSearch = require("./finite-automaton-search");
const anagramSearch = require("./anagram-search");
const shortestPalindrome = require("./shortest-palindrome");
const longestPrefixSuffix = require("./longest-prefix-suffix");
const Eertree = require("./eertree");
const wuManber = require("./wu-manber");
const shannonFanoCoding = require("./shannon-fano-coding");
const lz78 = require("./lz78");
const lzw = require("./lzw");
const crc32 = require("./crc32");
const soundex = require("./soundex");
const SuffixTree = require("./suffix-tree");
const UkkonenSuffixTree = require("./ukkonen-suffix-tree");
const FMIndex = require("./fm-index");

module.exports = {
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
};
