const swap = require("./swap.js");
// import swap from './swap.js'

const cycleSort = (arr) => {  
    let writes = 0, n = arr.length; 
    for (let cycleStart = 0; cycleStart <= n - 2; cycleStart++) { 
        let item = arr[cycleStart]; 
        let pos = cycleStart; 
        for (let i = cycleStart + 1; i < n; i++) {
            if (arr[i] < item) {
                pos++; 
            }
        }
        if (pos == cycleStart) {
            continue; 
        }

        while (item == arr[pos]) {
            pos += 1; 
        }

        if (pos != cycleStart) { 
            const temp = item; 
            item = arr[pos]; 
            arr[pos] = temp; 
            writes++; 
        } 

        while (pos != cycleStart) { 
            pos = cycleStart; 
            for (let i = cycleStart + 1; i < n; i++) {
                if (arr[i] < item) {
                    pos += 1; 
                }
            }
             
            while (item == arr[pos]) {
                pos += 1; 
            }
            
            if (item != arr[pos]) { 
                const temp = item; 
                item = arr[pos]; 
                arr[pos] = temp; 
                writes++; 
            } 
        } 
    }
    return arr;
} 

// export default cycleSort;
module.exports = cycleSort;