import Now from '../src/index';

test('beginningOfMinute if specific date', () => {
  const now = new Now(2017, 9, 29, 17, 35, 20, 100);
  expect(now.beginningOfMinute().parse()).toBe('2017-10-29 17:35:00');
});

