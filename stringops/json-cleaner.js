  let dirtyJson;
  let cleanJson;
  let stringConstructor = 'test'.constructor;
  let arrayConstructor = [].constructor;
  let objectConstructor = {}.constructor;

  function getObjectType(object) {
    if (object === null) {
        return 'null';
    } else if (object === undefined) {
        return 'undefined';
    }  else if (object.constructor === stringConstructor) {
        return 'String';
    }  else if (object.constructor === arrayConstructor) {
        return 'Array';
    }   else if (object.constructor === objectConstructor) {
        return 'Object';
    }   else {
        return 'unknown';
    }
  }
  function recursiveParsing(prop) {
    const objectType = getObjectType(prop);
    let keys;
    switch (objectType) {
    case 'String':
      break;
    case 'Array':
        if (getObjectType(prop[0]) !== 'String') {
           keys = Object.keys(prop[0]);
           prop = parseArrayTypeJSON(prop, keys);
        }
    break;
    case 'Object':
        keys = Object.keys(prop);
        prop = parseObjectTypeJSON(prop, keys);
        break;
      }
      return prop;
}

function isDeletedKeyByValue(value) {
    let isDeleted;
    isDeleted = false;
    const objectType = getObjectType(value);
    let keys;
    switch (objectType) {
      case 'null':
        isDeleted = true;
        break;
      case 'undefined':
        isDeleted = true;
        break;
      case 'String':
        break;
      case 'Array':
        if (value.length === 0) {
          isDeleted = true;
        } else if (value.length === 1) {
          if (getObjectType(value[0]) !== 'String') {
            keys = Object.keys(value[0]);
            if ( keys.length === 0 ) {
              isDeleted = true;
            }
          }
        }
        break;
      case 'Object':
        keys = Object.keys(value);
        if ( keys.length === 0 ) {
          isDeleted = true;
        }
        break;
      }
      return isDeleted;
}

function parseArrayTypeJSON(arr, keys) {
  for ( let i = 0; i < arr.length ; i++ ) {
    for ( let j = 0; j < keys.length ; j++ ) {
      const isDeleted = isDeletedKeyByValue(arr[i][keys[j]]);
      if (isDeleted) {
        delete arr[i][keys[j]];
      } else {
        arr[i][keys[j]] = recursiveParsing(arr[i][keys[j]]);
        const isDeleted_ = isDeletedKeyByValue(arr[i][keys[j]]);
        if (isDeleted_) {
          delete arr[i][keys[j]];
        }
      }
    }
  }
  return arr;
}

function parseObjectTypeJSON(object, keys) {
    for ( let j = 0; j < keys.length ; j++ ) {
      const isDeleted = isDeletedKeyByValue(object[keys[j]]);
      if (isDeleted) {
        delete object[keys[j]];
      } else {
        object[keys[j]] = recursiveParsing(object[keys[j]]);
        const isDeleted_ = isDeletedKeyByValue(object[keys[j]]);
        if (isDeleted_) {
          delete object[keys[j]];
        }
      }
    }
  return object;
}

function jsonCleaner(json_) {
    let json = Object.assign({}, json_);
    const objectType = getObjectType(json);
    let keys;
    if (objectType === 'Array') {
      keys = Object.keys(json[0]);
      json = parseArrayTypeJSON(json, keys);
    } else if (objectType === 'Object' ) {
      keys = Object.keys(json);
      json = parseObjectTypeJSON(json, keys);
    }
    return json;
}

module.exports = jsonCleaner;