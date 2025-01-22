// src/App.jsx

import { useRef, useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn R", done: false },
    { id: 2, title: "Do HW", done: false },
    { id: 3, title: "Do JS", done: true },
  ]);

  // const [title, setTitle] = useState("");

  //* uncontrolled -> use diff hook
  const titleInputRef = useRef();

  const doneTodos = todos.filter((todo) => todo.done);
  console.log(doneTodos);

  const doneJSX = [];
  for (const todo of doneTodos) {
    const newItem = <li>{todo.title}</li>;
    doneJSX.push(newItem);
  }

  const notDoneTodos = todos.filter((todo) => !todo.done);

  const handleCreate = () => {
    // console.log("create");
    // console.log(titleInputRef);
    const title = titleInputRef.current.value;
    const newTodo = { title, done: false };
    setTodos([...todos, newTodo]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log;

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  };

  return (
    <>
      <h1>Todo List</h1>
      <pre>{JSON.stringify(doneTodos)}</pre>

      <form>
        <label>
          Title: <input ref={titleInputRef} />
        </label>
        <button type="button" onClick={handleCreate}>
          Create todo
        </button>
      </form>

      <form onSubmit={handleSubmit}>
        <select name="title">
          {notDoneTodos.map((todo) => (
            <option key={todo.title}>{todo.title}</option>
          ))}
        </select>
        <input name="country" type="text" defaultValue="MY" />
        <button>Done</button>
      </form>

      <h2>Current Todos</h2>

      <ul>
        {notDoneTodos.map((todo) => (
          <li key={todo.title}>{todo.title}</li>
        ))}
      </ul>

      <h2>Done Todo</h2>

      <ul>{doneJSX}</ul>
    </>
  );
};

export default App;
