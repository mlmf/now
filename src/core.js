/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["createNow"] }] */
import {
  truncate,
  invalidDateError,
  invalidDateRegExp,
} from './utils';

class Now {
  constructor(...args) {
    this.now = new Date(...args);
    if (invalidDateRegExp.test(this.now)) {
      throw new TypeError(invalidDateError);
    }
    this.init();
  }

  Year() {
    return this.year;
  }

  Month() {
    return this.month;
  }

  Date() {
    return this.date;
  }

  WeekDay() {
    return this.weekDay;
  }

  Hour() {
    return this.hour;
  }

  Minute() {
    return this.minute;
  }

  Second() {
    return this.second;
  }

  MilliSecond() {
    return this.milliSecond;
  }

  get value() {
    return +this.now;
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
}

export default Now;

