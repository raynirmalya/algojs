

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
function isPositive(num) {
    return isNaN(num) ? null : (num > 0);
}
function returnSign(num){
    return isPositive(num) ? '+' : '-';
}
function numberChangeWithChar(str, operator) {
    return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g,  !operator ? "," : operator );
}
function formatTypes(type, arr, str, replaceWith) {
    let operator, finalStr = '',sign;
    console.log(type);
    switch(type) {
        case '<':
                operator = arr[1].substring(0,arr[1].indexOf("}"));
                finalStr += arr[0] + replaceWith;
                for ( let i = 0; i < operator;i++ ){
                    finalStr += ' ';
                }
                finalStr += arr[1].substring(arr[1].indexOf("}") + 1, arr[1].length);
                break;
        case '>':
                operator = arr[1].substring(0,arr[1].indexOf("}"));
                finalStr += arr[0];
                for ( let i = 0; i < operator;i++ ){
                    finalStr += ' ';
                }
                finalStr += replaceWith;
                finalStr += arr[1].substring(arr[1].indexOf("}") + 1, arr[1].length);
                break;
        case '^':
                operator = arr[1].substring(0,arr[1].indexOf("}"));
                finalStr += arr[0];
                finalStr += center(replaceWith, operator);
                finalStr += arr[1].substring(arr[1].indexOf("}") + 1, arr[1].length);
                break;
        case '=': 
                operator = arr[1].substring(0,arr[1].indexOf("}"));
                sign = returnSign(replaceWith);
                finalStr += arr[0]+sign;
                for ( let i = 0; i < operator;i++ ){
                    finalStr += ' ';
                }
                finalStr += Math.abs(replaceWith);
                finalStr += arr[1].substring(arr[1].indexOf("}") + 1, arr[1].length);
                break;
        case '+':
                operator = arr[1].substring(0,arr[1].indexOf("}"));
                sign = returnSign(replaceWith);
                finalStr += arr[0]+sign;
                finalStr += Math.abs(replaceWith);
                finalStr += arr[1].substring(arr[1].indexOf("}") + 1, arr[1].length);
                break;
        case '-':
                operator = arr[1].substring(0,arr[1].indexOf("}"));
                finalStr += arr[0]+replaceWith;
                finalStr += arr[1].substring(arr[1].indexOf("}") + 1, arr[1].length);
                break;
        case ' ':
                operator = arr[1].substring(0,arr[1].indexOf("}"));
                finalStr += arr[0]+' '+ replaceWith;
                finalStr += arr[1].substring(arr[1].indexOf("}") + 1, arr[1].length);
                break;
        case ',':
                operator = arr[1].substring(0,arr[1].indexOf("}"));
                finalStr += arr[0]+ numberChangeWithChar(replaceWith);
                finalStr += arr[1].substring(arr[1].indexOf("}") + 1, arr[1].length);
                break;
        case '_':
                operator = arr[1].substring(0,arr[1].indexOf("}"));
                finalStr += arr[0]+ numberChangeWithChar(replaceWith, "_");
                finalStr += arr[1].substring(arr[1].indexOf("}") + 1, arr[1].length);
                break;
        case 'b':
                operator = arr[1].substring(0,arr[1].indexOf("}"));
                finalStr += arr[0]+ decToBinary(replaceWith);
                finalStr += arr[1].substring(arr[1].indexOf("}") + 1, arr[1].length);
                break;
        case 'c':
                break;
        case 'd':
                operator = arr[1].substring(0,arr[1].indexOf("}"));
                finalStr += arr[0]+ binaryToDec(replaceWith);
                finalStr += arr[1].substring(arr[1].indexOf("}") + 1, arr[1].length);
                break;
        case 'e':
                operator = arr[1].substring(0,arr[1].indexOf("}"));
                finalStr += arr[0]+ replaceWith.toExponential();
                finalStr += arr[1].substring(arr[1].indexOf("}") + 1, arr[1].length);
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

function formatter() {
  let arr;
  if ( arguments.length === 0) {
        return -1;
   }
   let str = arguments[0];
    for(let i = 1; i<arguments.length; i++) {
        arr = str.split("{:");
        if(arr.length > 1) {
            for(let j = 0; j<arr.length;j++) {
                const operator = arr[j+1].substring(0,1);
                console.log('operator', operator);
                str = formatTypes(operator, arr, str, arguments[i]);
        }
    }
  }

//    // formatter :<
//    arr = str.split("{:>");
//    console.log(arr.length, arr);
//    if(arr.length > 1) {
//      str = formatTypes(':>', arr, str, replaceWith);
//    }

//    // formatter :^
//    arr = str.split("{:^");
//    console.log(arr.length, arr);
//    if(arr.length > 1) {
//      str = formatTypes(':^', arr, str, replaceWith);
//    }

//    // formatter :=
//    arr = str.split("{:=");
//    console.log(arr.length, arr);
//    if(arr.length > 1) {
//      str = formatTypes(':=', arr, str, replaceWith);
//    }

//     // formatter :+
//     arr = str.split("{:+");
//     console.log(arr.length, arr);
//     if(arr.length > 1) {
//         str = formatTypes(':+', arr, str, replaceWith);
//     }

//     // formatter :-
//     arr = str.split("{:-");
//     console.log(arr.length, arr);
//     if(arr.length > 1) {
//         str = formatTypes(':-', arr, str, replaceWith);
//     }

//      // formatter : 
//      arr = str.split("{: ");
//      console.log(arr.length, arr);
//      if(arr.length > 1) {
//         str = formatTypes(': ', arr, str, replaceWith);
//      }

//      // formatter :, 
//      arr = str.split("{:,");
//      console.log(arr.length, arr);
//      if(arr.length > 1) {
//         str = formatTypes(':,', arr, str, replaceWith);
//      }

//      // formatter :, 
//      arr = str.split("{:_");
//      console.log(arr.length, arr);
//      if(arr.length > 1) {
//         str = formatTypes(':_', arr, str, replaceWith);
//      }

//     // formatter :b 
//     arr = str.split("{:b");
//     console.log(arr.length, arr);
//     if(arr.length > 1) {
//         str = formatTypes(':b', arr, str, replaceWith);
//     }

//     // formatter :d
//     arr = str.split("{:d");
//     console.log(arr.length, arr);
//     if(arr.length > 1) {
//         str = formatTypes(':d', arr, str, replaceWith);
//     }

//     // formatter :e
//     arr = str.split("{:e");
//     console.log(arr.length, arr);
//     if(arr.length > 1) {
//         str = formatTypes(':e', arr, str, replaceWith);
//     }
 
   
  return str;
}

function decToBinary(num) {
    if (num != Math.floor(num)) {
      return -1;
    } else if (num < 0) {
      return -1;    
    } else {
      const binary = parseInt(num, 10);
      return binary.toString(2);
    }
  }

  function binaryToDec(num) {
    const dec = parseInt(num, 2);
    return dec.toString(10);
  }

function format() {
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

console.log(formatter("The universe is {:e} years old. {:b}", 5, 5));
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

module.exports = StringOps;