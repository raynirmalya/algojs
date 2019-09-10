const binarySearch = require("./binary.js");
const exponentialSearch = (haystack, needle)=>{  
     if (haystack[0] == needle) {
        return 0; 
     }
 let i = 1; 
 while (i < haystack.length && haystack[i] <= needle) {
     i = i*2; 
 }

 return binarySearch(haystack, needle, i/2, Math.min(i, haystack.length-1));
}
// export default exponentialSearch;
module.exports = exponentialSearch;