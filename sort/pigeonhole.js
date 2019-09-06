const swap = require("./swap.js");
// import swap from './swap.js'

const pholeSort = (arr) => {  
    let min = Math.min(...arr); 
    let max = Math.min(...arr); 
    let range = max - min + 1, i, j, index = 0;  
    let phole = new Array(range).fill(0); 
    for(i = 0; i < arr.length; i++) {
        phole[arr[i] - min]++; 
    }
    for(j = 0; j<range; j++) {
        while(phole[j]-->0) {
            arr[index++]=j+min;
        } 
    }
    return arr;
} 

// export default pholeSort;
module.exports = pholeSort;