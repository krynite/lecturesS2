import { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import CounterPlusButton from "./CounterPlusButton";
import CounterReset from "./CounterReset";

export default function Counter() {
  const [count, setCount] = useState(10);

  return (
    <>
      <CounterDisplay count={count} />
      <CounterReset setCount={setCount} />
      <CounterPlusButton setCount={setCount} />
    </>
  );
}
