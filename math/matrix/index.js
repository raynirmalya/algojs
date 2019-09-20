class Matrix {
    constructor(data) {
        this.matrix = data;
    }

    get() {
        return this.matrix;
    }

    makeItZero(data) {
        return isNaN(data) ? 0 : data;
    }
    add(m2data) {
        if(!m2data) {
            return false;
        } 
        if(m2data.length === undefined && m2data.get().length) {
            m2data = m2data.get();
        }
        let sum = [];
        const m1rows = this.matrix.length;  
        const m1cols = this.matrix[0].length;
        const m2rows = m2data.length;  
        const m2cols = m2data[0].length;  
        if( m1cols === m2cols && m1rows === m2rows) {
            for(let i = 0; i < m1rows; i++){  
                sum[i] = [];
                for(let j = 0; j < m1cols; j++){  
                    sum[i][j] = this.makeItZero(this.matrix[i][j]) + this.makeItZero(m2data[i][j]);  
                }  
            }  
            return sum;
        } else {
            return false;
        }
    }

    sub(m2data) {
        if(!m2data) {
            return false;
        } 
        if(m2data.length === undefined && m2data.get().length) {
            m2data = m2data.get();
        }
        let sum = [];
        const m1rows = this.matrix.length;  
        const m1cols = this.matrix[0].length;
        const m2rows = m2data.length;  
        const m2cols = m2data[0].length;  
        if( m1cols === m2cols && m1rows === m2rows) {
            for(let i = 0; i < m1rows; i++){  
                sum[i] = [];
                for(let j = 0; j < m1cols; j++){  
                    sum[i][j] = this.makeItZero(this.matrix[i][j]) - this.makeItZero(m2data[i][j]);  
                }  
            }  
            return sum;
        } else {
            return false;
        }
    }

    isIdentityMatrix() {
        const rows = this.matrix.length;  
        const cols = this.matrix[0].length;
        let flag = true;
        if(rows != cols){  
            return -1;
        } else{  
            for(let i = 0; i < rows; i++) {  
                for(let j = 0; j < cols; j++){  
                  if(i === j && this.matrix[i][j] !== 1){  
                      flag = false;  
                      break;  
                  }  
                  if(i !== j && this.matrix[i][j] !== 0){  
                      flag = false;  
                      break;  
                  }  
                }  
            }  
            return flag; 
        }  
    }

    isSparseMatrix() {
        const rows = this.matrix.length;  
        const cols = this.matrix[0].length;
        let size = rows * cols;
        let count = 0;
        if(rows != cols){  
            return -1;
        } else{  
            for(let i = 0; i < rows; i++){  
                for(let j = 0; j < cols; j++){  
                  if(this.matrix[i][j] == 0)  
                    count++;  
                }  
            }
            return (count > (size/2)); 
        }  
    }
}

module.exports = Matrix;