import Now from '../src/index';

test('expect to return MilliSecond', () => {
  const now = new Now(2017, 10, 10, 10, 10, 10, 100);
  expect(now.MilliSecond()).toBe(100);
});
