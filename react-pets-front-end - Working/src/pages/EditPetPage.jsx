import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import petService from "../services/petService";

export default function EditPetPage() {
  //? hooks -> law of hooks
  const { petId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    breed: "",
  });

  useEffect(() => {
    const getPet = async () => {
      const data = await petService.show(petId);
      setFormData(data);
    };
    getPet();
  }, [petId]);

  //? logic -> eventHandler
  const handleSubmit = (event) => {
    event.preventDefault();
    const pet = { ...formData, age: Number(formData.age) };
    petService.edit(pet);
    navigate("/pets");
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  //? JSX
  return (
    <>
      <p>{petId}</p>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Edit Pet</legend>

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
          <button>Edit</button>
        </fieldset>
      </form>
    </>
  );
}
