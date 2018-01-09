import { fn, fn2 } from '../src/scripts';

test('fn', () => {
  expect(fn(6)).toBe(12);
});
test('fn', () => {
  expect(fn2(6)).toBe(12);
});
