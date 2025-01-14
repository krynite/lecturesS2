// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar";
//Do once in in react
localStorage.debug = "react-components:*";
import Founders from './components/Founders';

// Do in every file you want to cnosole.
import debug from "debug"
const log = debug("react-components:App");

const App = () => {
  log("Hello");
  return (
    <>
    <Navbar />
    <Founders></Founders>
      <h1>Hello world!</h1>
      <button>Test</button>
    </>
  );
};

export default App;
