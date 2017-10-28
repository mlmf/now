import Now from '../src/index';

test('expect to return Month', () => {
  const now = new Now(2017, 10, 10, 10, 10, 100);
  expect(now.Month()).toBe(11);
});
