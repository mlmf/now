/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["createNow"] }] */
import {
  truncate,
  invalidDateError,
  invalidDateRegExp,
} from './utils';

class Now {
  constructor(...args) {
    this.now = this.createNow(args);
    if (invalidDateRegExp.test(this.now)) {
      throw new TypeError(invalidDateError);
    }
    this.init();
  }

  year() {
    return this.year;
  }

  month() {
    return this.month;
  }

  date() {
    return this.date;
  }

  weekDay() {
    return this.weekDay;
  }

  hour() {
    return this.hour;
  }

  minute() {
    return this.minute;
  }

  second() {
    return this.second;
  }

  milliSecond() {
    return this.milliSecond;
  }

  get value() {
    return +this.now;
  }

  createNow(args) {
    const len = args.length;
    switch (len) {
      case 0:
        return new Date();
      case 1:
        return new Date(args[0]);
      case 2:
        return new Date(args[0], args[1]);
      case 3:
        return new Date(args[0], args[1], args[2]);
      case 4:
        return new Date(args[0], args[1], args[2], args[3]);
      case 5:
        return new Date(args[0], args[1], args[2], args[3], args[4]);
      case 6:
        return new Date(args[0], args[1], args[2], args[3], args[4], args[5]);
      default:
        return new Date(args);
    }
  }

  init() {
    this.year = this.now.getFullYear();
    this.month = this.now.getMonth() + 1;
    this.date = this.now.getDate();
    this.hour = this.now.getHours();
    this.minute = this.now.getMinutes();
    this.second = this.now.getSeconds();
    this.milliSecond = this.now.getMilliseconds();
    this.weekDay = this.now.getDay();
    this._year = this.year;
    this._month = this.month < 10 ? `0${this.month}` : this.month;
    this._date = this.date < 10 ? `0${this.date}` : this.date;
    this._hour = this.hour < 10 ? `0${this.hour}` : this.hour;
    this._minute = this.minute < 10 ? `0${this.minute}` : this.minute;
    this._second = this.second < 10 ? `0${this.second}` : this.second;
    this._milliSecond = this.milliSecond < 10 ? `0${this.milliSecond}` : this.milliSecond;
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

  fullYear() {
    return this.now.getFullYear();
  }
}

export default Now;

