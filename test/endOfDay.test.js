import Now from '../src/index';

test('endOfDay if specific date', () => {
  const now = new Now(2017, 9, 29, 17, 35, 20, 100);
  expect(now.endOfDay().parse('all')).toBe('2017-10-29 23:59:59.999');
});

