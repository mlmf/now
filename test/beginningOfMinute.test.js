import Now from '../src/index';

// test('beginningOfMinute if no specific date', () => {
// const now = new Now();
// const fullYear = new Date().beginningOfMinute();
// expect(now.beginningOfMinute()).toBe(fullYear);
// });

test('beginningOfMinute if specific date', () => {
  const now = new Now(2013, 1, 9, 11, 22, 33);
  expect(now.beginningOfMinute()).toBe('2013-02-09 11:22:00');
});

