import Now from '../src/index';

test('beginningOfDay if specific date', () => {
  const now = new Now(2017, 9, 29, 17, 35, 20, 100);
  expect(now.beginningOfDay().parse()).toBe('2017-10-29 00:00:00');
});

