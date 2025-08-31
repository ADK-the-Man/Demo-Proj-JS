import React, { useState } from "react";
import { add, factorial } from "./api";
import { isIntInRange } from "./math";

export default function App() {
  const [a, setA] = useState("2");
  const [b, setB] = useState("3");
  const [n, setN] = useState("5");
  const [sum, setSum] = useState("");
  const [fact, setFact] = useState("");
  const [err, setErr] = useState("");

  const doAdd = async () => {
    setErr("");
    try {
      const { data } = await add(a, b);
      setSum(data.sum);
    } catch (e) {
      setErr(e.response?.data?.error || "Add failed");
    }
  };

  const doFactorial = async () => {
    setErr("");
    if (!isIntInRange(n, 0, 20)) {
      setErr("n must be integer 0..20");
      return;
    }
    try {
      const { data } = await factorial(n);
      setFact(data.value);
    } catch (e) {
      setErr(e.response?.data?.error || "Factorial failed");
    }
  };

  return (
    <div style={{ fontFamily: "sans-serif", margin: 24 }}>
      <h1>React Frontend (Math Demo)</h1>

      <section style={{ marginBottom: 16 }}>
        <h2>Add</h2>
        <input value={a} onChange={e => setA(e.target.value)} placeholder="a" />
        <input value={b} onChange={e => setB(e.target.value)} placeholder="b" />
        <button onClick={doAdd}>Compute</button>
        {sum !== "" && <p>Sum: {sum}</p>}
      </section>

      <section>
        <h2>Factorial</h2>
        <input value={n} onChange={e => setN(e.target.value)} placeholder="n (0..20)" />
        <button onClick={doFactorial}>Compute</button>
        {fact !== "" && <p>Factorial: {fact}</p>}
      </section>

      {err && <p style={{ color: "crimson" }}>{err}</p>}
    </div>
  );
}
