const jumpSearch = (haystack, needle)=>{ 
        let n = haystack.length; 
        let step = Math.floor(Math.sqrt(n)); 
        let prev = 0; 
        while (haystack[Math.min(step, n)-1] < needle) { 
            prev = step; 
            step += Math.floor(Math.sqrt(n)); 
            if (prev >= n) {
                return -1; 
            }
        } 
        while (haystack[prev] < needle) { 
            prev++; 
            if (prev == Math.min(step, n)) {
                return -1; 
            }
        } 
        if (haystack[prev] == needle) {
            return prev;
        }
    return -1; 
}
// export default jumpSearch;
module.exports = jumpSearch;