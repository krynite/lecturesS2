// src/App.jsx

// import the useState() hook
import { useState } from 'react';

const App = () => {
  // add placeholder text for the title
  // we'll use the form to update this state by the end of this lesson
  const [title, setTitle] = useState('The full name will appear here.');
  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')
  // const [middleName, setMiddleName] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: ''
  })

  const handleFirstNameChange = (event) => {
    setFormData({...FormDataEvent, firstName: event.target.value})
  }


  const handleLastNameChange = (event) => {
    // setLastName(event.target.value)
    setFormData({...FormDataEvent, lastName: event.target.value})
  }

  const handleMiddleNameChange = (event) => {
    // setMiddleName(event.target.value)
    setFormData({...FormDataEvent, middleName: event.target.value})
  }

    const handleChange = (event) => {             //Thihs is to combine the both functions and mke it one function to run
    setFormData({ ...formData, [event.target.name] : event.target.value });
  };
  return (
    <>
      <h2>{title}</h2>
      <form>
        <label htmlFor="firstName">First Name: </label>
        {/* <input id="firstName" name="firstName" value={firstName} onChange={handleFirstNameChange} /> */}
        <input id="firstName" name="firstName" value={formData.firstName} onChange={handleFirstNameChange} />
      </form>
      <form>
        <label htmlFor="lastName">Last Name: </label>
        <input id="lastName" name="lastName" value={formData.lastName} onChange={handleLastNameChange} />   
      </form>
      <form>
        <label htmlFor="middleName">Middle Name: </label>
        <input id="middleName" name="middleName" value={formData.middleName} onChange={handleMiddleNameChange}  />
      </form>
    </>
  );
};

export default App;
