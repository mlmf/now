import Now from '../src/index';

test('expect to return Second', () => {
  const now = new Now(2017, 10, 10, 10, 10, 10, 100);
  expect(now.Second()).toBe(10);
});
