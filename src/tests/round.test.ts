import { round } from '../lib/round.js';

test('round', () => {
  expect(round(1.234)).toBe(1.23);
  expect(round(-3.456)).toBe(-3.46);
  expect(round(7.8)).toBe(7.8);
  expect(round(9.8765)).toBe(9.88);
  expect(round(0)).toBe(0);
});
