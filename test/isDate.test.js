import Now from '../src/index';

test('expect return true if the date is Monday', () => {
  const now = new Now(2017, 9, 30, 17, 35, 20, 100);
  expect(now.isMonday()).toBe(true);
});

test('expect return true if the date is Tuesday', () => {
  const now = new Now(2017, 9, 31, 17, 35, 20, 100);
  expect(now.isTuesday()).toBe(true);
});

test('expect return true if the date is Wednesday', () => {
  const now = new Now(2017, 10, 1, 17, 35, 20, 100);
  expect(now.isWednesday()).toBe(true);
});

test('expect return true if the date is Thursday', () => {
  const now = new Now(2017, 10, 2, 17, 35, 20, 100);
  expect(now.isThursday()).toBe(true);
});

test('expect return true if the date is Friday', () => {
  const now = new Now(2017, 10, 3, 17, 35, 20, 100);
  expect(now.isFriday()).toBe(true);
});

test('expect return true if the date is Saturday', () => {
  const now = new Now(2017, 10, 4, 17, 35, 20, 100);
  expect(now.isSaturday()).toBe(true);
});

test('expect return true if the date is Sunday', () => {
  const now = new Now(2017, 10, 5, 17, 35, 20, 100);
  expect(now.isSunday()).toBe(true);
});
