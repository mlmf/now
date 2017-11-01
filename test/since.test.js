import Now from '../src/index';

test('return the time elapsed since specify date', () => {
  const now = new Now();
  const compare = new Date(2017, 9, 29, 17, 35, 20, 100);
  const cb = () => {
    const recent = new Date();
    const since = now.since(compare);
    const result = Math.abs(since - (recent - compare)) <= 1;
    expect(result).toBe(true);
  }
  const timer = (cb, time) => {
    setTimeout(() => {
      cb && cb();
    }, time)
  };
  timer(cb, 100);
});

