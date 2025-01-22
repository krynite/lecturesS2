import { useState } from "react";
import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import PokemonDetails from "./components/PokemonDetails/PokemonDetails";
import PokemonForm from "./components/PokemonForm/PokemonForm";
import PokemonList from "./components/PokemonList/PokemonList";

const initialState = [
  { _id: 1, name: "bulbasaur", weight: 69, height: 7 },
  { _id: 2, name: "ivysaur", weight: 130, height: 10 },
  { _id: 3, name: "venusaur", weight: 1000, height: 20 },
  { _id: 4, name: "charmander", weight: 85, height: 6 },
  { _id: 5, name: "charmeleon", weight: 190, height: 11 },
];

const App = () => {
  const [pokemon, setPokemon] = useState(initialState);
  // const [count, setCount] = useState(10);

  return (
    <>
      <h1>Pokemon!</h1>
      <NavBar />
      {/* <p>
        {count} <button onClick={() => setCount(count + 1)}>+</button>
      </p>
      <a href="/main/123">Main 123</a>
      <a href="../testing">Testing</a>
      <Link to="/newThing">New</Link> */}
      <hr />
      <Routes>
        <Route path="/" element={<PokemonForm />} />
        <Route path="/pokemon" element={<PokemonList pokemon={pokemon} />} />
        <Route
          path="/pokemon/:pokemonId"
          element={<PokemonDetails pokemon={pokemon} />}
        />
        <Route path="/pokemon/simon" element={<p>Simon</p>} />
        <Route path="/pokemon/new" element={<PokemonForm />} />
        {/* <Route path="/main/112" element={<NavBar />} />
        <Route path="/main/113" element={<NavBar />} />
        <Route path="/main/114" element={<NavBar />} />
        <Route path="/main/115" element={<NavBar />} /> */}
      </Routes>
    </>
  );
};

export default App;
