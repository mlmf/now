/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
/* eslint prefer-destructuring: ["error", { "object": false }] */

const ArrayProto = Array.prototype;
const toString = Object.prototype.toString;
export const slice = ArrayProto.slice;
export const invalidDateError = 'Invalid Date';
export const invalidDateRegExp = /Invalid Date/;

export function isDate(value) {
  return toString.call(value) === '[object Date]';
}

export function isString(value) {
  return toString.call(value) === '[object String]';
}

export function isNumber(value) {
  return toString.call(value) === '[object Number]';
}

export function isNaN(value) {
  return isNumber && value !== +value;
}

export function isUndefined(value) {
  return value === undefined || value === null;
}

