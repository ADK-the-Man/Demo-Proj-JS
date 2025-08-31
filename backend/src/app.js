const express = require("express");
const cors = require("cors");
const { add, factorial } = require("./math");

const app = express();
app.use(cors());

app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.get("/api/add", (req, res) => {
  try {
    const { a, b } = req.query;
    const sum = add(a, b);
    res.json({ a: Number(a), b: Number(b), sum });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

app.get("/api/factorial", (req, res) => {
  try {
    const { n } = req.query;
    const value = factorial(n);
    res.json({ n: Number(n), value });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

module.exports = app;