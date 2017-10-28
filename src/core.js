import {
  truncate,
  slice,
  invalidDateError,
  invalidDateRegExp,
} from './utils';

class Now {
  constructor() {
    this.now = this._now(arguments);
    if (invalidDateRegExp.test(this.now)) {
      throw new TypeError(invalidDateError);
    }
    this.init();
  }

  get value() {
    return +this.now;
  }

  _now(args) {
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
    let month = this.now.getMonth() + 1;
    let day = this.now.getDate();
    let hour = this.now.getHours();
    let minute = this.now.getMinutes();
    let second = this.now.getSeconds();
    let milliSecond = this.now.getMilliseconds();
    this._year = this.now.getFullYear();
    this._month = month < 10 ? `0${month}` : month;
    this._day = day < 10 ? `0${day}` : day;
    this._hour = hour < 10 ? `0${hour}` : hour;
    this._minute = minute < 10 ? `0${minute}` : minute;
    this._second = second < 10 ? `0${second}` : second;
    this._milliSecond = milliSecond < 10 ? `0${milliSecond}` : milliSecond;
  }

  beginningOfMinute() {
    return truncate.call(this, 'minute');
  }

  beginningOfHour() {
    return truncate.call(this, 'hour');
  }

  beginningOfDay() {
    return truncate.call(this, 'day');
  }

  fullYear() {
    return this.now.getFullYear();
  }
}

export default Now;

