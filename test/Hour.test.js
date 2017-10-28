import Now from '../src/index';

test('expect to return Hour', () => {
  const now = new Now(2017, 10, 10, 10, 10, 10, 100);
  expect(now.Hour()).toBe(10);
});
