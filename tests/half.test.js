import engine from '../dist/example';

test('engine', () => {
  expect(engine([7, 2, 3, 4])).toBe({});
});
