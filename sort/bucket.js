const bucketSort = (arr) => {
    const maxValue = Math.max(...arr);
    let bucket = new Array(maxValue + 1).fill(0);
    let sortedArr = new Array(arr.length);
    for (let i = 0; i < arr.length; i++){
        bucket[arr[i]]++;
    }
    let outPos = 0;
    for (let i = 0; i < bucket.length; i++) {
        for (let j = 0; j < bucket[i]; j++) {
            sortedArr[outPos++] = i;
        }
    }
    return sortedArr;
} 

module.exports = bucketSort;