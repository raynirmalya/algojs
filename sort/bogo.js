
const swap = require("./swap.js");
function shuffle(a) { 
    for (let i=0; i < a.length; i++) { 
        console.log('1112',a);
        a = swap(a, i, parseInt(Math.random()*i)); 
    }
    return a;
} 
  
function isSorted(a) { 
    for (let i=0; i<a.length; i++) {
        if (a[i] < a[i-1]) {
            return false; 
        }
    }
    return true; 
}

const bogoSort = (arr)=>{
    while (isSorted(arr) == false) {
        shuffle(arr); 
        console.log(isSorted(arr));
    }
    return arr;
}

module.exports = bogoSort;
