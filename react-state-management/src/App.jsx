// src/App.jsx

import { useState } from "react";
import Counter from "../components/Counter";
import "./App.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  console.log("Our isDarkMode state value is:", isDarkMode);
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Smith",
    hasPets: 10,
    age: 77,
  });

  const handleDarkMode = () => {
    // TODO: implement the logic to handle a user clicking the dark mode button
    console.log("Dark Mode!");
    setIsDarkMode(true);
  };

  const handleLightMode = () => {
    // TODO: implement the logic to handle a user clicking the light mode button
    console.log("Light Mode!");
    setIsDarkMode(false);
  };

  const mySetPerson = (newPerson) => {        
    if (person === newPerson) {
      return;
    }
  };

  const handleChangeName = () => {
    console.log("change");
    // const x = { firstName: "Simon " };
    // const x = person;
    // x.firstName = "Simon";
    // console.log(x);
    const x = { ...person };
    x.firstName = "Kerin";          //this is the same as line 45
    setPerson(x);                   //this is the same as line 45
    // setPerson({ ...person, firstName: "Simon" });
    // person.firstName = "Simon";
    // console.log(person);
  };

  // use `className` instead of `class` to apply styles in react
  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <Counter />
      <Counter />
      <p>
        Hello, my name is {person.firstName + person.lastName}, I am{" "}
        {person.age}
        years old, and I have {person.hasPets ? "" : "no"} pets.
      </p>
      <button onClick={handleChangeName}>Change Name</button>
      <div>
        <button onClick={handleDarkMode}>Dark Mode</button>
        <button onClick={handleLightMode}>Light Mode</button>
      </div>
    </div>
  );
};

export default App;
