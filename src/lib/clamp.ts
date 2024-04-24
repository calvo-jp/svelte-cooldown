export function clamp(value: number, min: number, max: number): number;
export function clamp(value: number, max: number): number;

export function clamp(v: number, i: number, j?: number) {
  return !j ? (v > i ? i : v) : v < i ? i : v > j ? j : v;
}
