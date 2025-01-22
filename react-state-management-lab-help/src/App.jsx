// src/App.jsx

import { useState } from "react";
import zombies from "./zombies";

const INITAL_MONEY = 50;

const App = () => {
  //? const [var, setVar] = useState([])
  const [team, setTeam] = useState([]);
  //? how to do away with money?
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState(zombies);

  console.log("testing");
  const totalStrength = team[0].strength + 10;

  const handleRemove = () => {
    console.log("remove");
  };

  const handleAddFighter = (fighter) => {
    if (fighter.price > money) {
      console.log("money not enough");
      return;
    }

    //? change state -> setXXX
    // const newState = [];

    // for (const zombie of zombieFighters) {
    //   if (fighter.id !== zombie.id) {
    //     newState.push(zombie);
    //   }
    // }
    // setZombieFighters(newState);
    setMoney(money - fighter.price);
    //? derived state
    // setTotalStrength (totalStrength + fighter.strength)
    setZombieFighters(
      zombieFighters.filter((zombie) => zombie.id !== fighter.id)
    );
    setTeam([fighter, ...team]);
  };

  return (
    <>
      <p>Money: {money}</p>
      <p>{totalStrength}</p>
      <button>Add Budget</button>
      <h2>Team</h2>

      {team.length === 0 ? (
        <p>Nobody</p>
      ) : (
        <ul>
          {team.map((zombie) => (
            <li key={zombie.id}>
              {zombie.name} <button onClick={handleRemove}>Remove</button>
            </li>
          ))}
        </ul>
      )}

      <h2>Fighters</h2>
      <ul>
        {zombieFighters.map((zombie) => (
          <li key={zombie.id}>
            {zombie.name}{" "}
            <button onClick={() => handleAddFighter(zombie)}>Add</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
