const swap = require("./swap.js");

const sleepSort = (arr)=>{
    let sortedArr = [];
    arr.forEach( (n) => {
		setTimeout( () => { sortedArr.push(n); console.log(sortedArr, n) }, 5 * n)
	});
    return sortedArr;
}

module.exports = sleepSort;