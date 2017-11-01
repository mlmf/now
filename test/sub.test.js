import Now from '../src/index';

test('return subtract milliSecond value', () => {
  const now = new Now(2017, 9, 29, 17, 35, 20, 100);
  const compared = new Date(2017, 8, 29, 15, 35, 20, 100);
  const result = now.date - compared;
  expect(now.sub(compared)).toBe(result);
});

