/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
import {
  invalidDateError,
  invalidDateRegExp,
  isDate,
} from './utils';

const metaSecond = 1000;
const metaMinute = 60 * metaSecond;
const metaHour = 60 * metaMinute;
const metaDay = 24 * metaHour;

class Now {
  constructor(...args) {
    this._firstDayMonday = false;
    this.now = new Date(...args);
    if (invalidDateRegExp.test(this.now)) {
      throw new TypeError(invalidDateError);
    }
    this.now.parse = this.parse;
  }

  get value() {
    return +this.now;
  }

  get year() {
    return this.now.getFullYear();
  }

  get month() {
    return this.now.getMonth() + 1;
  }

  get day() {
    return this.now.getDate();
  }

  get weekDay() {
    return this.now.getDay();
  }

  get hour() {
    return this.now.getHours();
  }

  get minute() {
    return this.now.getMinutes();
  }

  get second() {
    return this.now.getSeconds();
  }

  get milliSecond() {
    return this.now.getMilliseconds();
  }

  get firstDayMonday() {
    return this._firstDayMonday;
  }

  set firstDayMonday(value) {
    this._firstDayMonday = value;
  }

  addMilliSeconds(value) {
    this.now.setMilliseconds(this.now.getMilliseconds() + value);
    return this;
  }

  addSeconds(value) {
    this.now.setSeconds(this.now.getSeconds() + value);
    return this;
  }

  addMinutes(value) {
    this.now.setMinutes(this.now.getMinutes() + value);
    return this;
  }

  addHours(value) {
    this.now.setHours(this.now.getHours() + value);
    return this;
  }

  addDays(value) {
    this.now.setDate(this.now.getDate() + value);
    return this;
  }

  addWeeks(value) {
    return this.now.addDays(7 * value);
  }

  addMonths(value) {
    this.now.setMonth(this.now.getMonth() + value);
    return this;
  }

  addYears(value) {
    this.now.setFullYear(this.now.getFullYear() + value);
    return this;
  }

  clone() {
    const clone = new Now(this.now);
    clone.firstDayMonday = this.firstDayMonday;
    return clone;
  }

  truncate(name) {
    const context = this.now;
    switch (name) {
      case 'year':
        context.setMonth(0);
        context.setDate(1);
        context.setHours(0);
        context.setMinutes(0);
        context.setSeconds(0);
        context.setMilliseconds(0);
        return this;
      case 'month':
        context.setDate(1);
        context.setHours(0);
        context.setMinutes(0);
        context.setSeconds(0);
        context.setMilliseconds(0);
        return this;
      case 'day':
        context.setHours(0);
        context.setMinutes(0);
        context.setSeconds(0);
        context.setMilliseconds(0);
        return this;
      case 'hour':
        context.setMinutes(0);
        context.setSeconds(0);
        context.setMilliseconds(0);
        return this;
      case 'minute':
        context.setSeconds(0);
        context.setMilliseconds(0);
        return this;
      default:
        return this;
    }
  }

  parse(ifMiliSecond) {
    let context;
    if (this instanceof Now) {
      context = this.now;
    } else {
      context = this;
    }
    const year = context.getFullYear();
    let month = context.getMonth() + 1;
    let date = context.getDate();
    let hour = context.getHours();
    let minute = context.getMinutes();
    let second = context.getSeconds();
    const milliSecond = context.getMilliseconds();
    month = month < 10 ? `0${month}` : month;
    date = date < 10 ? `0${date}` : date;
    hour = hour < 10 ? `0${hour}` : hour;
    minute = minute < 10 ? `0${minute}` : minute;
    second = second < 10 ? `0${second}` : second;
    if (ifMiliSecond) {
      return `${year}-${month}-${date} ${hour}:${minute}:${second}.${milliSecond}`;
    }
    return `${year}-${month}-${date} ${hour}:${minute}:${second}`;
  }

  computeBeginningOfMinute() {
    const clone = this.clone();
    return clone.truncate('minute');
  }

  computeBeginningOfHour() {
    const clone = this.clone();
    return clone.truncate('hour');
  }

  computeBeginningOfDay() {
    const clone = this.clone();
    return clone.truncate('day');
  }

  computeBeginningOfWeek() {
    const clone = this.clone();
    let weekDay = clone.now.getDay();
    if (clone.firstDayMonday) {
      if (weekDay === 0) {
        weekDay = 7;
      }
      weekDay -= 1;
    }
    clone.addDays(-weekDay);
    return clone.truncate('day');
  }

  computeBeginningOfMonth() {
    const clone = this.clone();
    return clone.truncate('month');
  }

  computeBeginningOfQuarter() {
    const clone = this.clone().computeBeginningOfMonth();
    const offset = clone.now.getMonth() % 3;
    return clone.addMonths(-offset);
  }

  computeBeginningOfYear() {
    const clone = this.clone();
    return clone.truncate('year');
  }

  beginningOfMinute() {
    return this.computeBeginningOfMinute().now;
  }

  beginningOfHour() {
    return this.computeBeginningOfHour().now;
  }

  beginningOfDay() {
    return this.computeBeginningOfDay().now;
  }

  beginningOfWeek() {
    return this.computeBeginningOfWeek().now;
  }

  beginningOfMonth() {
    return this.computeBeginningOfMonth().now;
  }

  beginningOfQuarter() {
    return this.computeBeginningOfQuarter().now;
  }

  beginningOfYear() {
    return this.computeBeginningOfYear().now;
  }

  endOfMinute() {
    const clone = this.clone();
    return clone.computeBeginningOfMinute().addMilliSeconds(metaMinute - 1).now;
  }

  endOfHour() {
    const clone = this.clone();
    return clone.computeBeginningOfHour().addMilliSeconds(metaHour - 1).now;
  }

  endOfDay() {
    const clone = this.clone();
    return clone.computeBeginningOfDay().addMilliSeconds(metaDay - 1).now;
  }

  endOfWeek() {
    const clone = this.clone();
    return clone.computeBeginningOfWeek().addMilliSeconds((7 * metaDay) - 1).now;
  }

  endOfMonth() {
    const clone = this.clone();
    return clone.computeBeginningOfMonth().addMonths(1).addMilliSeconds(-1).now;
  }

  endOfQuarter() {
    const clone = this.clone();
    return clone.computeBeginningOfQuarter().addMonths(3).addMilliSeconds(-1).now;
  }

  endOfYear() {
    const clone = this.clone();
    return clone.computeBeginningOfYear().addYears(1).addMilliSeconds(-1).now;
  }

  before(obj) {
    if (obj === undefined || obj === null) {
      throw new Error('before should not receive undefined');
    } else if (!isDate(obj)) {
      throw new TypeError('before require a Date type');
    } else {
      return this.now < obj;
    }
  }
}

export default Now;

