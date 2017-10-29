/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["createNow"] }] */
import {
  truncate,
  invalidDateError,
  invalidDateRegExp,
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
    // this.init();
  }

  get value() {
    return +this.now;
  }

  get firstDayMonday() {
    return this._firstDayMonday;
  }

  set firstDayMonday(value) {
    this._firstDayMonday = value;
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

  clone() {
    return new Now(this.now);
  }

  beginningOfMinute() {
    return truncate.call(this, 'minute');
  }

  beginningOfHour() {
    return truncate.call(this, 'hour');
  }

  beginningOfDay() {
    return truncate.call(this, 'date');
  }

  beginningOfWeek() {
    let weekDay = this.now.getDay();
    if (this._firstDayMonday) {
      console.log(weekDay);
      if (weekDay === 0) {
        weekDay = 7;
      }
      weekDay -= 1;
    }
    let clone = this.clone();
    clone.addDays(-weekDay);
    return truncate.call(clone, 'date');
  }
}

export default Now;

