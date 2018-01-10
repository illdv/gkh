import engine from '../src/scripts';

test('engine', () => {
  expect(engine(1,2,3,4,5)).toBe(511.7);
});
