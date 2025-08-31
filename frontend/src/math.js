export function isIntInRange(n, min, max) {
  const k = Number(n);
  return Number.isInteger(k) && k >= min && k <= max;
}
