import Now from '../src/index';

test('fullYear return this year if no specific', () => {
  const now = new Now();
  const fullYear = new Date().getFullYear();
  expect(now.fullYear()).toBe(fullYear);
});

test('fullYear return corresponding full year if specific', () => {
  const now = new Now(2013, 1, 9, 11, 22, 33);
  expect(now.fullYear()).toBe(2013);
});

