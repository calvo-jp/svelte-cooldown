import { cx } from './cx.js';

test('cx', () => {
  expect(cx('one', null, 'two', undefined, 'three')).toBe('one two three');
});
