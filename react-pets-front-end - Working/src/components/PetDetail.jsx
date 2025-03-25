export default function PetDetail({ pet }) {
  return (
    <>
      <h3>{pet.name}</h3>

      <dl>
        <dt>Breed</dt>
        <dd>{pet.breed}</dd>
        <dt>Age</dt>
        <dd>{pet.age} years old</dd>
      </dl>
    </>
  );
}
