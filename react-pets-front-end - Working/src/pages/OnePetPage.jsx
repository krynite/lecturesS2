import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import DeleteButton from "../components/DeleteButton";
import PetDetail from "../components/PetDetail";
import petService from "../services/petService";

export default function OnePetPage() {
  const [pet, setPet] = useState({});
  const { petId } = useParams();

  useEffect(() => {
    const getPet = async () => {
      const data = await petService.show(petId);
      setPet(data);
    };
    getPet();
  }, [petId]);

  return (
    <>
      <PetDetail pet={pet} />

      <Link to={`/pets/${petId}/edit`}>
        <button>Edit</button>
      </Link>
      <DeleteButton petId={petId} type="navigate" />
    </>
  );
}
