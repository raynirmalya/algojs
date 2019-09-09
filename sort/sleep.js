const swap = require("./swap.js");
// import swap from './swap.js'
const sleepSort = (arr)=>{
    let sortedArr = [];
    arr.forEach( (n) => {
		setTimeout( () => { sortedArr.push(n); console.log(sortedArr, n) }, 5 * n)
	});
    return sortedArr;
}
// export default sleepSort;
module.exports = sleepSort;