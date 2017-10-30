import Now from '../src/index';

test('endOfYear if specific date', () => {
  const now = new Now(2017, 9, 29, 17, 35, 20, 100);
  expect(now.endOfYear().parse('all')).toBe('2017-12-31 23:59:59.999');
});

