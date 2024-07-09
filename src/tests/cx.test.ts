import { cx } from '../lib/cx.js';

test('cx', () => {
  expect(cx('one', null, 'two', undefined, 'three')).toBe('one two three');
});
