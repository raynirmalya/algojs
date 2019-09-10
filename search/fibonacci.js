const fibonacciSearch = (haystack, needle)=>{  
    return search(haystack, needle); 
}

function search(haystack, needle){
    let n = haystack.length;
    let fibMMm2 = 0;  
    let fibMMm1 = 1; 
    let fibM = fibMMm2 + fibMMm1; 
    while (fibM < n) { 
        fibMMm2 = fibMMm1; 
        fibMMm1 = fibM; 
        fibM = fibMMm2 + fibMMm1; 
    } 

    let offset = -1; 

    while (fibM > 1) { 
        let i = Math.min(offset+fibMMm2, n-1); 
        if (haystack[i] < needle) { 
            fibM = fibMMm1; 
            fibMMm1 = fibMMm2; 
            fibMMm2 = fibM - fibMMm1; 
            offset = i; 
        } else if (haystack[i] > needle) { 
            fibM = fibMMm2; 
            fibMMm1 = fibMMm1 - fibMMm2; 
            fibMMm2 = fibM - fibMMm1; 
        } else {
            return i;
        }
    } 
    if(fibMMm1 == 1 && haystack[offset+1] == needle) {
        return offset+1; 
    }
    return -1; 
  }

// export default fibonacciSearch;
module.exports = fibonacciSearch;