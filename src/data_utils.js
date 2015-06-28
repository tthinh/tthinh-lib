'use strict';

/**
 * Data Utils Module
 * @module data_utils
 */


/**
 * Updates an object with the given path to the value passed, missing path elements are added automatically
 * @param object - object to contain path
 * @param path - string of path
 * @param value - set the last property in the path to this value
 * @private
 */
function setPathValue(obj, path, value) {
  // replace [n] with .n to enable using array notation with index constants
  path = path.replace(/\[/g, '.').replace(/\]/g, '');
  var props = path.split('.');
  var lastPropIndex = props.length - 1;
  for (var i = 0; i < lastPropIndex; i++) {
    var prop = props[i];
    // if prop is not a property of object or its value is not an object, set to empty object
    // THIS DOES NOT SUPPORT obj[prop] being an array and will set to empty object
    if (!obj.hasOwnProperty(prop) || obj[prop] === null || typeof obj[prop] !== 'object') {
      obj[prop] = {};
    }
    obj = obj[prop];
  }
  obj[props[lastPropIndex]] = value;
}

/**
 * Safe get value an object with the given path, will return undefined if a path element is missing
 * @param object - object to contain path
 * @param path - string of path
 * @private
 */
function getPathValue(obj, path) {
  obj = obj || {};
  // replace [n] with .n to enable using array notation with index constants
  path = path.replace(/\[/g, '.').replace(/\]/g, '');
  var props = path.split('.');
  var lastPropIndex = props.length - 1;
  for (var i = 0; i < lastPropIndex; i++) {
    var prop = props[i];
    if (!obj.hasOwnProperty(prop) || obj[prop] === null || typeof obj[prop] !== 'object') {
      return undefined;
    }
    obj = obj[prop];
  }
  return obj[props[lastPropIndex]];
}

/**
 * If path exists, do nothing, else assign path to val or {} if val isn't provided
 * @param obj
 * @param path
 * @param val
 */
function ensurePathExists(obj, path, /* optional */ val) {
  var node = getPathValue(obj, path);
  // if path doesn't exist, set it to val
  if (typeof node === 'undefined') {
    if (typeof val === 'undefined') {
      val = {};
    }
    setPathValue(obj, path, val);
  }
}


/**
 * Wrapper function for JSON.parse to catch exception and return Error instance or obj of parsed string
 * @param jsonString
 * @return {Error|Object}
 */
function jsonParse(jsonString) {
  var obj;
  try {
    obj = JSON.parse(jsonString);
  }
  catch (e) {
    obj = new Error('parsing jsonString: ' + e);
  }
  return obj;
}

function stringify(obj) {
  // if null, undefined, empty string, then assign empty object
  obj = obj || {};

  var string;
  try {
    string = JSON.stringify(obj);
  }
  catch (e) {
    string = new Error('stringify object: ' + e);
  }
  return string;
}

module.exports = {
  setPathValue: setPathValue,
  getPathValue: getPathValue,
  ensurePathExists: ensurePathExists,
  jsonParse: jsonParse,
  stringify: stringify
};

