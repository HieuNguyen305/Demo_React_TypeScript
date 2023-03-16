import { useState } from "react";
export default function DemoState() {
  const [number, setNumber] = useState<number>(0);
  return (
    <div>
      <h3>DemoState</h3>
      <h4>Number: {number}</h4>
      <button onClick={() => {setNumber(number - 1)}}>-</button>
      <button onClick={() => {setNumber(number + 1)}}>-</button>
    </div>
  );
}
