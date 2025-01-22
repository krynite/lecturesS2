export default function CounterPlusButton({ setCount }) {
  const handlePlus = () => {
    // setCount(count + 1);
        setCount((c) => c + 1);         // 10 => 10 + 1 -> 11   aka, if you add two more of the same function, it will add 3 at a time. 
  };
  return <button onClick={handlePlus}>+</button>;
}
