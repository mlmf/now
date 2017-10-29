import Now from '../src/index';

test('endOfMinute if specific date', () => {
  const now = new Now(2017, 9, 29, 17, 35, 20, 100);
  expect(now.endOfMinute().parse('all')).toBe('2017-10-29 17:35:59.999');
});

