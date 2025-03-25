import { useNavigate } from "react-router";
import petService from "../services/petService";

export default function DeleteButton({ petId, type, delPet }) {
  // const [bool, setBool] = useState(false);
  // const location = "/pets"
  const navigate = useNavigate();

  const handleDelete = () => {
    petService.del(petId);
    //? Navigate() in OnePetPage

    if (type === "updateState") {
      delPet(petId); //? update state in AllPets
    } else if (type === "navigate") {
      navigate("/pets");
    }
  };

  return <button onClick={handleDelete}>Delete??</button>;
}
