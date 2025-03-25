import { Link } from "react-router";
import DeleteButton from "./DeleteButton";

export default function PetList({ pets, delPet }) {
  if (pets.length === 0) {
    return <p>No Pets yet</p>;
  }

  return (
    <>
      <ul>
        {pets.map((pet) => (
          <li key={pet.id}>
            <Link to={`/pets/${pet.id}`}>{pet.name}</Link>
            <DeleteButton petId={pet.id} type="updateState" delPet={delPet} />
          </li>
        ))}
      </ul>
    </>
  );
}
