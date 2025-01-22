import { NavLink } from "react-router";

const PokemonList = (props) => {
  return (
    <>
      <h2>Pokemon</h2>
      <ul>
        {props.pokemon.map((currentPokemon) => (
          <li key={currentPokemon._id}>
            <NavLink to={`/pokemon/${currentPokemon._id}`}>
              {currentPokemon.name} --- {`/pokemon/${currentPokemon._id}`}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PokemonList;
