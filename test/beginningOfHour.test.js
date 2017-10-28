import Now from '../src/index';

test('beginningOfHour if specific date', () => {
  const now = new Now(2013, 1, 9, 11, 22, 33);
  expect(now.beginningOfHour()).toBe('2013-02-09 11:00:00');
});

