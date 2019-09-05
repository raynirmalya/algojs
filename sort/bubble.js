const swap = require("./swap.js");
// import swap from './swap.js'
const bubbleSort = (unsortedArr)=>{
    let i, j, isSwapped; 
    for (i = 0; i < unsortedArr.length-1; i++) { 
      isSwapped = false; 
      for(let j= 0; j < unsortedArr.length-i-1; j++){ 
         if (unsortedArr[j] > unsortedArr[j+1]) 
         { 
           unsortedArr = swap(unsortedArr,j,j+1); 
           isSwapped = true; 
         } 
      } 
   
      // IF no two elements were swapped by inner loop, then break 
      if (isSwapped == false) {
        break; 
      }   
    } 
    return unsortedArr;
}
// export default bubbleSort;
module.exports = bubbleSort;