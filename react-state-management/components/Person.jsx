import { useState } from "react";

export default function Person() {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Smith",
    hasPets: 10,
    age: 77,
  });

  const handleChangeName = () => {
    console.log("change");
    // const x = { firstName: "Simon " };
    // const x = person;
    // x.firstName = "Simon";
    // console.log(x);
    const newPerson = { ...person };
    newPerson.firstName = "Kerin";
    setPerson(newPerson);
    // setPerson({ ...person, firstName: "Simon" });
    // person.firstName = "Simon";
    // console.log(person);
  };

  return (
    <>
      <p>
        Hello, my name is {person.firstName + person.lastName}, I am{" "}
        {person.age}
        years old, and I have {person.hasPets ? "" : "no"} pets.
      </p>
      <button onClick={handleChangeName}>Change Name</button>
    </>
  );
}
