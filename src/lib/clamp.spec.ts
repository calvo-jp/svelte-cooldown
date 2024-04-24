import { expect, test } from 'vitest';
import { clamp } from './clamp.js';

test('clamp', () => {
  expect(clamp(0, 1, 2)).toBe(1);
  expect(clamp(1, 1, 2)).toBe(1);
  expect(clamp(2, 1, 2)).toBe(2);
  expect(clamp(0, 1)).toBe(0);
  expect(clamp(1, 1)).toBe(1);
  expect(clamp(2, 1)).toBe(1);
});
