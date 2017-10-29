import Now from '../src/index';

test('beginningOfMonth if specific date', () => {
  const now = new Now(2017, 9, 29, 17, 35, 20, 100);
  expect(now.beginningOfMonth().parse()).toBe('2017-10-01 00:00:00');
});

