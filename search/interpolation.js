const interpolationSearch = (haystack, needle)=>{  
    return search(haystack, needle, 0, haystack.length-1); ; 
}

function search(haystack, needle, low, high){
    if(low <= high 
          && needle >= haystack[low]
          && needle <= haystack[high]){
      var delta = (needle-haystack[low])/(haystack[high]-haystack[low]);
      var position = low + Math.floor((high-low)*delta);
      if (haystack[position] == needle){
        return position;
      }
      if (haystack[position] < needle){
        low = position + 1;
      } else {
        high = position - 1;
      }
      return search(haystack, needle, low, high)
    }
    return -1;
  }

// export default interpolationSearch;
module.exports = interpolationSearch;