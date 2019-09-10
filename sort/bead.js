const beadSort = (arr)=>{
    let max = 0;
		for(let i=1;i<arr.length;i++){
			if(arr[i]>max){
                max=arr[i];
            }
        }
		//Set up abacus
		let grid=new Array(arr.length) // [max];
		let levelcount=new Array(max);
		for(let i=0;i<max;i++){
			levelcount[i]=0;
			for(let j=0;j<arr.length;j++){
                grid[j] = []; 
                grid[j][i]='_';
            }
		}

		for(let i=0;i<arr.length;i++) {
			let num=arr[i];
			for(let j=0;num>0;j++){
				grid[levelcount[j]++][j]='*';
				num--;
			}
		}
		
		let sorted=new Array(arr.length);
		for(let i=0;i<arr.length;i++){
			let putt=0;
			for(let j=0;j<max&&grid[arr.length-1-i][j]=='*';j++) {
                putt++;
            }
			sorted[i]=putt;
		}
 
		return sorted;
}
// export default beadSort;
module.exports = beadSort;