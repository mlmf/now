import Now from '../src/index';

test('return the time elapsed since specify date', () => {
  const now = new Now();
  const compare = new Date(2017, 9, 29, 17, 35, 20, 100);
  const cb = () => {
    const recent = new Date();
    expect(now.since(compare)).toBe(recent - compare);
  }
  const timer = (cb, time) => {
    setTimeout(() => {
      cb && cb();
    }, time)
  };
  timer(cb, 100);
});

