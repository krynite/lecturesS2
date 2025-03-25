import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router";
import PetList from "../components/PetList";
import petService from "../services/petService";

async function addOwner() {
  //? info from bruno -> URL
  const url = "https://api.airtable.com/v0/appfPOUufQUjrWkOe/Table%201?maxRecords=3&view=Grid%20view";
  //? info from bruno Body
  const data = {
    "fields": {
    "ID": "f9ef",
    "Owner": "testing on js #2 adding new prop",
    "Age": "3",
    "Name": "Buddy",
    "Breed": "Golden Retriever"
    },
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer patyNwS3TS4fEIOsH.00e89440c4d24c460e50374c8ca2514902eb1cd8d3a562abeff98f818ac3acff",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}

export default function AllPetsPage() {
  const [pets, setPets] = useState([]);
  //? fetch on load -> useEffect

  useEffect(() => {
    const loadPets = async () => {
      const pets = await petService.index();
      setPets(pets);
    };
    loadPets();
  }, []);

  const addPet = (pet) => setPets([...pets, pet]);
  const delPet = (petId) => setPets([]);

  const handleClick = () => {
    addOwner();
  };

  return (
    <>
      <h2>Pet List</h2>

      {/* <PetForm addPet={addPet} /> */}

      <button onClick={handleClick}>Add Owner</button>

      <PetList pets={pets} delPet={delPet} />
      <Outlet />

      <Link to="/pets/new">
        <button>New Pet</button>
      </Link>
    </>
  );
}
