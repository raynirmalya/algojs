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

    mult(m2data) {
        if(!m2data) {
            return false;
        } 
        if(m2data.length === undefined && m2data.get().length) {
            m2data = m2data.get();
        }
        let product = [];
        const m1rows = this.matrix.length;  
        const m1cols = this.matrix[0].length;
        const m2rows = m2data.length;  
        const m2cols = m2data[0].length;  
        if( m1cols === m2rows || m1rows === m2cols) {
            for(let i = 0; i < m1rows; i++){  
                product[i] = [];
                for(let j = 0; j < m2cols; j++){  
                    product[i][j] = 0;
                    for(let k = 0; k < m1cols; k++){  
                        product[i][j] += this.makeItZero(this.matrix[i][k]) * this.makeItZero(m2data[k][j]);  
                    }
                }  
            }  
            return product;
        } else {
            return false;
        }
    }

    kroneckerProduct(m2data) {
        if(!m2data) {
            return false;
        } 
        if(m2data.length === undefined && m2data.get().length) {
            m2data = m2data.get();
        }
        let product = [];
        const m1rows = this.matrix.length;  
        const m1cols = this.matrix[0].length;
        const m2rows = m2data.length;  
        const m2cols = m2data[0].length;  
        if( m1cols === m2rows || m1rows === m2cols) {

            for( let a = 0; a < m1rows*m2rows; a++) {
                product[a] = []
                for( let b = 0; b < m1cols*m2cols; b++) {
                    product[a][b] = 0;
                }
            }
            for(let i = 0; i < m1rows; i++){  
                for(let j = 0; j < m2rows; j++){  
                    for(let k = 0; k < m1cols; k++){               
                        for(let l = 0; l < m2cols; l++){ 
                            product[i+l+1][j+k+1] = this.makeItZero(this.matrix[i][j]) * this.makeItZero(m2data[k][l]);
                        }  
                    }
                }  
            }  
            return product;
        } else {
            return false;
        }
    }

    isIdentityMatrix() {
        const rows = this.matrix.length;  
        const cols = this.matrix[0].length;
        let flag = true;
        if(rows !== cols){  
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
        if(rows !== cols){  
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

    isEqual(m2data) {
        if(!m2data) {
            return false;
        } 
        if(m2data.length === undefined && m2data.get().length) {
            m2data = m2data.get();
        }
        let flag =  true;
        const m1rows = this.matrix.length;  
        const m1cols = this.matrix[0].length;
        const m2rows = m2data.length;  
        const m2cols = m2data[0].length;  
        if( m1cols === m2cols && m1rows === m2rows) {
            for(let i = 0; i < m1rows; i++){  
                for(let j = 0; j < m1cols; j++){  
                  if(this.matrix[i][j] != m2data[i][j]){  
                      flag = false;  
                      break;  
                  }  
                }  
            } 
            return flag;
        } else {
            return false;
        }
    }

    getLowerTraingularMatrix() {
        const rows = this.matrix.length;  
        const cols = this.matrix[0].length;
        let lMatrix = [];
        if(rows !== cols){  
            return -1;
        } else{  
            for(let i = 0; i < rows; i++){  
                lMatrix[i] = [];
                for(let j = 0; j < cols; j++){  
                    if (j > i) {
                      lMatrix[i].push(0);
                    } else {
                        lMatrix[i].push(this.matrix[i][j]);
                    } 
                }  
            }
            return lMatrix; 
        }  
    }

    getUpperTraingularMatrix() {
        const rows = this.matrix.length;  
        const cols = this.matrix[0].length;
        let uMatrix = [];
        if(rows !== cols){  
            return -1;
        } else{  
            for(let i = 0; i < rows; i++){  
                uMatrix[i] = [];
                for(let j = 0; j < cols; j++){  
                    if (i > j) {
                      uMatrix[i].push(0);
                    } else {
                        uMatrix[i].push(this.matrix[i][j]);
                    } 
                }  
            }
            return uMatrix; 
        }  
    }

    getTransposeMatrix() {
        const rows = this.matrix.length;  
        const cols = this.matrix[0].length;
        let tMatrix = [];
        if(rows !== cols){  
            return -1;
        } else{  
            for(let i = 0; i < rows; i++){  
                tMatrix[i] = [];
                for(let j = 0; j < cols; j++){  
                    tMatrix[i][j] = this.matrix[j][i];  
                }  
            }
            return tMatrix; 
        }  
    }
}

module.exports = Matrix;