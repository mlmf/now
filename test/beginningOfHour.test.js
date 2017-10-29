import Now from '../src/index';

test('beginningOfHour if specific date', () => {
  const now = new Now(2017, 9, 29, 17, 35, 20, 100);
  expect(now.beginningOfHour().parse()).toBe('2017-10-29 17:00:00');
});

