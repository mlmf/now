import Now from '../src/index';

test('expect to return Minute', () => {
  const now = new Now(2017, 10, 10, 10, 10, 10, 100);
  expect(now.Minute()).toBe(10);
});
