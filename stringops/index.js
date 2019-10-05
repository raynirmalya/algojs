
const jsonCleaner = require("./json-cleaner.js");
const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.substring(1, str.length);
};

const casefold = (str) => {
    return str.toLowerCase();
}

const isUpperCase = (str) => {
    return str === str.toUpperCase();
}

const isLowerCase = (str) => {
    return str === str.toLowerCase();
}

const center = (str, length, char) => {
    let finalStr = '';
    const strLength = str.length;
    const left = Math.ceil((length) / 2);
    const right = length - left;
    for ( let i = 0; i<left; i++) {
        finalStr+= !char ? ' ': char; 
    }
    finalStr+= str;
    for ( let i = 0; i<right; i++) {
        finalStr+= !char ? ' ': char; 
    }
    return finalStr;
}

const count = (str, needle, isCaseSensitive) => {
     
   return (str.match(new RegExp(needle, ( isCaseSensitive ? "g" : "gi" ) )) || []).length;
}


const expandtabs = (str, chars) => {
    let replaceWith = '';
    chars = !chars ? 8: chars;
    for ( let i = 0; i<chars; i++) {
        replaceWith+= ' '; 
    }
    return str.split("\t").join(replaceWith);
}

const replaceAll = (str, replaceStr, replaceWith) => {
    return str.split(replaceStr).join(replaceWith);
}

const isAlnum = (str)=>{
    const regex = /^[0-9a-zA-Z]+$/;
    return str.match(regex)? true: false;
}

const isAlpha = (str)=>{
    const regex = /^[a-zA-Z]+$/;
    return str.match(regex)? true: false;
}

const swapcase = (str) =>{
    let finalStr = '';
    const chars = str.split('');
    for ( let i = 0; i < chars.length; i++) {
        if (isUpperCase(chars[i])) {
            finalStr+= chars[i].toLowerCase();
        } else {
            finalStr+= chars[i].toUpperCase();
        }
    }
    return finalStr;
}

const zfill = (str, num, isRight) =>{
    let finalStr = '';
    const left = num - str.length;
    for ( let i = 0; i<left;i++){
        finalStr += '0';
    }
    return finalStr + str;
}

const toUpperFirstLetter = (str) => {
    let finalStr = '';
    const arr = str.split(' ');
    for ( let i = 0; i < arr.length; i++) {
        finalStr += capitalize(arr[i]) + ' ';
    }
    return finalStr.trim();
}
const isPositive = (num) => {
    return isNaN(num) ? null : (num > 0);
}
const returnSign = (num) => {
    return isPositive(num) ? '+' : '-';
}
const numberChangeWithChar = (str, operator) => {
    return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g,  !operator ? "," : operator );
}
const isIdentifier = (str) => {
    const regex = /^[A-Za-z][A-Za-z0-9_]*$/;
    return str.match(regex)? true: false;
}
const isDigit = (str) => {
    const regex = /^\d+/;
    return str.toString().match(regex)? true: false;
}


const formatTypes = (type, arr, str, replaceWith, indexOfValue) => {
    let operator, finalStr = '',sign;
    switch(type) {
        case '<':
                operator = arr[indexOfValue].substring(0,arr[indexOfValue].indexOf("}"));
                finalStr += arr[0] + replaceWith;
                for ( let i = 0; i < operator;i++ ){
                    finalStr += ' ';
                }
                finalStr += arr[indexOfValue].substring(arr[indexOfValue].indexOf("}") + 1, arr[indexOfValue].length);
                break;
        case '>':
                operator = arr[indexOfValue].substring(0,arr[indexOfValue].indexOf("}"));
                finalStr += arr[0];
                for ( let i = 0; i < operator;i++ ){
                    finalStr += ' ';
                }
                finalStr += replaceWith;
                finalStr += arr[indexOfValue].substring(arr[indexOfValue].indexOf("}") + 1, arr[indexOfValue].length);
                break;
        case '^':
                operator = arr[indexOfValue].substring(0,arr[indexOfValue].indexOf("}"));
                finalStr += arr[0];
                finalStr += center(replaceWith, operator);
                finalStr += arr[indexOfValue].substring(arr[indexOfValue].indexOf("}") + 1, arr[indexOfValue].length);
                break;
        case '=': 
                operator = arr[indexOfValue].substring(0,arr[indexOfValue].indexOf("}"));
                sign = returnSign(replaceWith);
                finalStr += arr[0]+sign;
                for ( let i = 0; i < operator;i++ ){
                    finalStr += ' ';
                }
                finalStr += Math.abs(replaceWith);
                finalStr += arr[indexOfValue].substring(arr[indexOfValue].indexOf("}") + 1, arr[indexOfValue].length);
                break;
        case '+':
                operator = arr[indexOfValue].substring(0,arr[indexOfValue].indexOf("}"));
                sign = returnSign(replaceWith);
                finalStr += arr[0]+sign;
                finalStr += Math.abs(replaceWith);
                finalStr += arr[indexOfValue].substring(arr[indexOfValue].indexOf("}") + 1, arr[indexOfValue].length);
                break;
        case '-':
                operator = arr[indexOfValue].substring(0,arr[indexOfValue].indexOf("}"));
                finalStr += arr[0]+replaceWith;
                finalStr += arr[indexOfValue].substring(arr[indexOfValue].indexOf("}") + 1, arr[indexOfValue].length);
                break;
        case ' ':
                operator = arr[indexOfValue].substring(0,arr[indexOfValue].indexOf("}"));
                finalStr += arr[0]+' '+ replaceWith;
                finalStr += arr[indexOfValue].substring(arr[indexOfValue].indexOf("}") + 1, arr[indexOfValue].length);
                break;
        case ',':
                operator = arr[indexOfValue].substring(0,arr[indexOfValue].indexOf("}"));
                finalStr += arr[0]+ numberChangeWithChar(replaceWith);
                finalStr += arr[indexOfValue].substring(arr[indexOfValue].indexOf("}") + 1, arr[indexOfValue].length);
                break;
        case '_':
                operator = arr[indexOfValue].substring(0,arr[indexOfValue].indexOf("}"));
                finalStr += arr[0]+ numberChangeWithChar(replaceWith, "_");
                finalStr += arr[indexOfValue].substring(arr[indexOfValue].indexOf("}") + 1, arr[indexOfValue].length);
                break;
        case 'b':
                operator = arr[indexOfValue].substring(0,arr[indexOfValue].indexOf("}"));
                finalStr += arr[0]+ decToBinary(replaceWith);
                finalStr += arr[indexOfValue].substring(arr[indexOfValue].indexOf("}") + 1, arr[indexOfValue].length);
                break;
        case 'c':
                break;
        case 'd':
                operator = arr[indexOfValue].substring(0,arr[indexOfValue].indexOf("}"));
                finalStr += arr[0]+ binaryToDec(replaceWith);
                finalStr += arr[indexOfValue].substring(arr[indexOfValue].indexOf("}") + 1, arr[indexOfValue].length);
                break;
        case 'e':
                operator = arr[indexOfValue].substring(0,arr[indexOfValue].indexOf("}"));
                finalStr += arr[0]+ replaceWith.toExponential();
                finalStr += arr[indexOfValue].substring(arr[indexOfValue].indexOf("}") + 1, arr[indexOfValue].length);
                break;
        case 'E':
        break;
        case 'f':
        break;
        case 'g':
        break;
        case 'G':
        break;
        case 'o':
        break;
        case 'x':
        break;
        case 'X':
        break;
        case 'n':
        break;
        case '%':
        break;
    }
    return finalStr;
}

const formatter = () => {
  let arr;
  if ( arguments.length === 0) {
        return -1;
   }
   let str = arguments[0];
    for(let i = 1; i<arguments.length; i++) {
        arr = str.split("{:");
        while(arr.length > 1) {
            const operator = arr[1].substring(0,1);
            str = formatTypes(operator, arr, str, arguments[i], 1);
            arr[0] = str;
            arr.splice(1,1);
         }
    }   
  return str;
}

const decToBinary = (num) => {
    if (num != Math.floor(num)) {
      return -1;
    } else if (num < 0) {
      return -1;    
    } else {
      const binary = parseInt(num, 10);
      return binary.toString(2);
    }
  }

  const binaryToDec = (num) => {
    const dec = parseInt(num, 2);
    return dec.toString(10);
  }

const format = () => {
    let formattedText = '';
    if ( arguments.length === 0) {
        return -1;
    }
    let str = arguments[0];
    for(let i = 1; i<arguments.length; i++) {
        if(typeof(arguments[i]) === 'object') {
          const keys = Object.keys(arguments[i]);
          for ( let j = 0; j<keys.length; j++) {            
            str = replaceAll(str,'{' + keys[j] + '}', arguments[i][keys[j]]);
          }
        } else {
            formattedText = arguments[i].replace(str,'{' + i + '}');
            str = str.replace('{}', '{' + i + '}');
            str = replaceAll(str,'{' + i + '}', arguments[i]);
        }
        formattedText = str;
    }
   return formattedText;
}
const unicodeToChar = (str)=> {
    return str.replace(/\\u[\dA-F]{4}/gi, 
            (match) => {
                return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
           });
 }

 const isDecimal = (str) => {
    const regex = /^[0-9]+$/;
    return unicodeToChar(str).match(regex)? true: false;
 }

 const isSpace = (str) => {
    return str.trim().length === 0;
 }

 const getInitials = (str, seperatedWith) => {
     const arr = str.split(" ");
     return arr[0].charAt(0).toUpperCase() + seperatedWith + arr[arr.length-1].charAt(0).toUpperCase() + seperatedWith;
 }
console.log(isSpace("    "), isDigit(" s   "), getInitials("Nirmalya Roy", '.'));
dirtyJson = [{a: null, b: 'abcd', c:null, d:[{x:{y:{o:{s:null,k:[{}], p:'test'}}}, z:['abc'], t:[{}], m:[], u:{c:[{d:'abcd'}]}}]}, {a: null, b: 'abcd', c:'xyz'}];
    console.log(JSON.stringify(jsonCleaner(dirtyJson)));
const StringOps = {};
StringOps.capitalize = capitalize;
StringOps.casefold = casefold;
StringOps.count = center;
StringOps.count = count;
StringOps.expandtabs = expandtabs;
StringOps.isUpperCase = isUpperCase;
StringOps.isLowerCase = isLowerCase;
StringOps.swapcase = swapcase;
StringOps.toUpperFirstLetter =  toUpperFirstLetter;
StringOps.format = format;
StringOps.formatter = formatter;
StringOps.isPositive = isPositive;
StringOps.returnSign = returnSign;
StringOps.numberChangeWithChar = numberChangeWithChar;
StringOps.isAlnum = isAlnum;
StringOps.isDecimal = isDecimal;
StringOps.isAlpha = isAlpha;
StringOps.isDigit = isDigit;
StringOps.isIdentifier = isIdentifier;
StringOps.isSpace = isSpace;
StringOps.unicodeToChar = unicodeToChar;
StringOps.binaryToDec = binaryToDec;
StringOps.decToBinary = decToBinary;
StringOps.zfill = zfill;
StringOps.jsonCleaner = jsonCleaner;

module.exports = StringOps;