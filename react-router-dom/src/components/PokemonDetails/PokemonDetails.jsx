// src/components/PokemonDetails/PokemonDetails.jsx

import { useParams } from "react-router";

const PokemonDetails = (props) => {
  // Always verify that any props are being passed correctly!
  console.log(props);

  const { pokemonId } = useParams();
  // console.log("params", params);

  const pokemon = props.pokemon.find((p) => p._id === Number(pokemonId));
  console.log(pokemon);

  return (
    <>
      <h2>{pokemon.name} Details</h2>
      <dl>
        <dt>Weight:</dt>
        <dd>{pokemon.weight}</dd>
        <dt>Height:</dt>
        <dd>{pokemon.height}</dd>
      </dl>
    </>
  );
};

export default PokemonDetails;
