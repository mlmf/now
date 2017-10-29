/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
const ArrayProto = Array.prototype;
const {
  toString
} = Object.prototype.toString;

export const {
  slice
} = ArrayProto.slice;
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
  let year = this.now.getFullYear();
  let month = this.now.getMonth() + 1;
  let date = this.now.getDate();
  let hour = this.now.getHours();
  let minute = this.now.getMinutes();
  let second = this.now.getSeconds();
  let milliSecond = this.now.getMilliseconds();
  month = month < 10 ? `0${month}` : month;
  date = date < 10 ? `0${date}` : date;
  hour = hour < 10 ? `0${hour}` : hour;
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;
  milliSecond = milliSecond < 10 ? `0${milliSecond}` : milliSecond;
  switch (name) {
    case 'minute':
      return `${year}-${month}-${date} ${hour}:${minute}:00`;
    case 'hour':
      return `${year}-${month}-${date} ${hour}:00:00`;
    case 'date':
      return `${year}-${month}-${date} 00:00:00`;
    default:
      return `${year}-${month}-${date} ${hour}:${minute}:${second}`;
  }
}

