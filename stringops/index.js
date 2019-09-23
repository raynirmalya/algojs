

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

function formatTypes(type) {
    switch(type) {
        case ':<':
        break;
        case ':>':
        break;
        case ':^':
        break;
        case ':=':
        break;
        case ':+':
        break;
        case ':-':
        break;
        case ':=':
        break;
        case ': ':
        break;
        case ':,':
        break;
        case ':_':
        break;
        case ':b':
        break;
        case ':c':
        break;
        case ':d':
        break;
        case ':e':
        break;
        case ':E':
        break;
        case ':f':
        break;
        case ':g':
        break;
        case ':G':
        break;
        case ':o':
        break;
        case ':x':
        break;
        case ':X':
        break;
        case ':n':
        break;
        case ':%':
        break;
    }
}

const format = (str) => {

}

console.log(toUpperFirstLetter('Welcome to my world'));
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