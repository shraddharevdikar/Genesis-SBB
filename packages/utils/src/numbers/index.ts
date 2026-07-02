/**
 * Restricts a number to remain between a minimum and maximum value (inclusive).
 */
export function clamp(val: number, min: number, max: number): number {
  return Math.min(Math.max(val, min), max);
}

/**
 * Rounds a number to a specified number of decimal places.
 */
export function roundTo(val: number, decimals = 0): number {
  const factor = Math.pow(10, decimals);
  return Math.round(val * factor) / factor;
}

/**
 * Calculates the percentage of a value over a total, rounded to a specified decimal length.
 */
export function percentage(value: number, total: number, decimals = 0): number {
  if (total === 0) return 0;
  return roundTo((value / total) * 100, decimals);
}
