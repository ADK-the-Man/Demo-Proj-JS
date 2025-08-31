const request = require("supertest");
const app = require("../src/app");
const { add, factorial } = require("../src/math");

describe("unit math", () => {
  test("add works", () => {
    expect(add(2, 3)).toBe(5);
  });
  test("factorial works", () => {
    expect(factorial(5)).toBe(120);
  });
  test("factorial bounds", () => {
    expect(() => factorial(-1)).toThrow();
    expect(() => factorial(21)).toThrow();
  });
});

describe("api endpoints", () => {
  test("GET /api/add", async () => {
    const res = await request(app).get("/api/add?a=7&b=8");
    expect(res.statusCode).toBe(200);
    expect(res.body.sum).toBe(15);
  });
  test("GET /api/factorial", async () => {
    const res = await request(app).get("/api/factorial?n=6");
    expect(res.statusCode).toBe(200);
    expect(res.body.value).toBe(720);
  });
});
