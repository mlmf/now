/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
const ArrayProto = Array.prototype;
const { toString } = Object.prototype.toString;

export const { slice } = ArrayProto.slice;
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

export function truncate(name) {
  switch (name) {
    case 'minute':
      return `${this._year}-${this._month}-${this._date} ${this._hour}:${this._minute}:00`;
    case 'hour':
      return `${this._year}-${this._month}-${this._date} ${this._hour}:00:00`;
    case 'date':
      return `${this._year}-${this._month}-${this._date} 00:00:00`;
    default:
      return `${this._year}-${this._month}-${this._date} ${this._hour}:${this._minute}:${this._second}`;
  }
}

