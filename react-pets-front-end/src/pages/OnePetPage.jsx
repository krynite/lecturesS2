import { Link } from "react-router";
import PetDetail from "../components/PetDetail";

export default function OnePetPage() {
  return (
    <>
      <h2>One Pet</h2>

      <PetDetail />

      <Link to="/pets/sample/edit">
        <button>Edit</button>
      </Link>
      <button>Delete</button>
    </>
  );
}
