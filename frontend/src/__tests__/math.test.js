import { isIntInRange } from "../math";

test("isIntInRange", () => {
  expect(isIntInRange(5, 0, 20)).toBe(true);
  expect(isIntInRange(21, 0, 20)).toBe(false);
  expect(isIntInRange("10", 0, 20)).toBe(true);
  expect(isIntInRange("5.5", 0, 20)).toBe(false);
});
