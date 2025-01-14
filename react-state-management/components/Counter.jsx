import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(10);

  const handlePlus = () => {
    console.log("plus");
    // count = count + 1;
    console.log(count); 
    setCount(++count) // for readabiliy use (count + 1)
    // console.log(++count); 
    // console.log(count); 
  };

  const handleMinus = () => {
    console.log("minus");
    console.log(count) 
    setCount(count - 1) // you can use (--count)
  };

  return (
    <>
      <p>Count: {count} </p>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </>
  );
}

//? document.getElementById("plusButton").addEventListenr("click", f)
