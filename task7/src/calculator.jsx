import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  return (
    <div>
      <h1>Calculator</h1>

      <input
        type="number"
        placeholder="First Number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Second Number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br /><br />

      <button onClick={() => setResult(Number(num1) + Number(num2))}>
        Add
      </button>

      <button onClick={() => setResult(Number(num1) - Number(num2))}>
        Subtract
      </button>

      <button onClick={() => setResult(Number(num1) * Number(num2))}>
        Multiply
      </button>

      <button onClick={() => setResult(Number(num1) / Number(num2))}>
        Divide
      </button>

      <div>
        <h2>Result: {result}</h2>
      </div>
    </div>
  );
}

export default Calculator;