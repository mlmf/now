import Now from '../src/index';

test('beginningOfDay if specific date', () => {
  const now = new Now(2013, 1, 9, 11, 22, 33);
  expect(now.beginningOfDay()).toBe('2013-02-09 00:00:00');
});

