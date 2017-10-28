import Now from '../src/index';

test('expect to return WeekDay', () => {
  const now = new Now(2017, 10, 10, 10, 10, 10, 100);
  expect(now.WeekDay()).toBe(5);
});

