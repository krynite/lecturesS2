import { useState } from "react";
import { useNavigate } from "react-router";
import petService from "../services/petService";

export default function CreatePetForm({ addPet }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    breed: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPet = { ...formData, age: Number(formData.age) };
    petService.create(newPet);
    // addPet(newPet);
    navigate("/pets");
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>New Pet</legend>

          <label>
            Name:
            <input name="name" value={formData.name} onChange={handleChange} />
          </label>

          <br />
          <label>
            Age:
            <input
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
            />
          </label>

          <br />
          <label>
            Breed:
            <input
              name="breed"
              value={formData.breed}
              onChange={handleChange}
            />
          </label>

          <br />

          <button>Add</button>
        </fieldset>
      </form>
    </>
  );
}
