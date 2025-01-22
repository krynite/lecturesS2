// src/App.jsx

import { useState } from "react";

const App = () => {
  // const [title, setTitle] = useState("The full name will appear here.");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  //* combine the str states into an object state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const title = formData.firstName + " " + formData.lastName;

  const handleFirstNameChange = (event) => {
    // const { value } = target;
    // setFirstName(value);
    setFormData({ ...formData, firstName: event.target.value });
  };

  const handleLastNameChange = (event) => {
    // setLastName(event.target.value);
    setFormData({ ...formData, lastName: event.target.value });
  };

  //? function to do 2 differents -> vary the inputs
  const handleChange = (event) => {
    // const x = "firstName";
    // const y = ["firstName", "lastName"];
    // for (const n of y) {
    //   console.log(n);
    // }
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // handleChange(event, "firstName");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
    // setTitle(formData.firstName + " " + formData.lastName);
  };

  return (
    <>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name: </label>
        <input
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last Name: </label>
        <input
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <button>Click</button>
      </form>
    </>
  );
};

export default App;
