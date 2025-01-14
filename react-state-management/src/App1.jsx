// src/App.jsx

import { useState } from "react";
import Counter from "../components/Counter";
import Person from "../components/Person";
import "./App.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mode, setMode] = useState("light");

  console.log("Our isDarkMode state value is:", isDarkMode);

  const handleMode = (mode) => {
    console.log(mode);
    setMode(mode);
  };

  // use `className` instead of `class` to apply styles in react
  return (
    <div className={mode}>
      <Counter />
      <Counter />
      <Person />

      <div>
        <button onClick={() => handleMode("dark")}>Change to Dark</button>
        <button onClick={() => handleMode("light")}>Change to Light</button>
      </div>
    </div>
  );
};

export default App;
