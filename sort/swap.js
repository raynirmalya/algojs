const swap = (arr, i, j)=>{
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}

module.exports = swap;