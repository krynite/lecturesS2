export default function CounterReset({ setCount }) {
  const handleReset = () => {
    setCount(0);
  };
  return <button onClick={handleReset}>Reset</button>;
}
