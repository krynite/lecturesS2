import { useEffect, useState } from "react";
import { show } from "./services/weatherService";
//? Copied the using fetch from MDN

//? call the function -> check the network tab

//? React -> App -> show() -> setWeather()
//? pure -> no side effect
const addTen = (x) => x + 10;
console.log(addTen(7));

const App = () => {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("Seattle");
  const [loading, setLoading] = useState("");

  const A = () => {
    const fetchCity = async () => {
      const cityWeather = await show(city);
      console.log(cityWeather);
      setWeather(cityWeather);
    };
    fetchCity();
  };
  //? function (not ASYNC) to run
  //? array of things that when you change you want the function to run again
  useEffect(A, [city]);

  // const taipyei = show("Taipei");
  // console.log(taipei);

  const handleClick = async () => {
    //?
    setLoading("loading...");
    const data = await show("London");
    // console.log("data", data);
    setWeather(data);
    setLoading("");
    // setCity(count + 1);
  };

  return (
    <>
      <label>
        City:
        <select
          name="city"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        >
          <option>Singapore</option>
          <option>London</option>
          <option>Seoul</option>
        </select>
      </label>
      <p>Weather: {weather?.current?.humidity}</p>
      <button onClick={handleClick}>Click</button>
      <p>{loading}</p>
    </>
  );
};

export default App;
