function add(a, b) {
  const x = Number(a), y = Number(b);
  if (!Number.isFinite(x) || !Number.isFinite(y)) throw new Error("Invalid numbers");
  return x + y;
}
function factorial(n) {
  const k = Number(n);
  if (!Number.isInteger(k) || k < 0 || k > 20) throw new Error("n must be integer 0..20");
  let r = 1;
  for (let i = 2; i <= k; i++) r *= i;
  return r;
}
module.exports = { add, factorial };