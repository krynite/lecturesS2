import { Link } from "react-router";
import PetList from "../components/PetList";

export default function AllPetsPage() {
  return (
    <>
      <h2>Pet List</h2>

      <PetList />

      <Link to="/pets/new">
        <button>New Pet</button>
      </Link>
    </>
  );
}
