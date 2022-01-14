const sum = require('./index');

test ('sum does addition correctly', () => {
  expect(sum(1, 2)).toBe(3);
});