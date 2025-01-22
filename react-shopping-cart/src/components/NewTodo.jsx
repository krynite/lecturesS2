import { useState } from "react";

export default function NewTodo({ addTodo }) {
  const [newTodo, setNewTodo] = useState("newTodo");

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Creating a new to-do...");
    addTodo(newTodo);
  };

  const handleChange = (event) => {
    // console.log(event.target.value);
    setNewTodo(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Todo:
        <input name="todo" value={newTodo} onChange={handleChange} />
      </label>
      <button type="submit">Create to-do</button>
    </form>
  );
}
