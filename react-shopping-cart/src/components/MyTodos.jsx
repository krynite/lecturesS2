import { useState } from "react";
import NewTodo from "./NewTodo";
import TodoList from "./TodoList";

export default function MyTodos() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    const updatedTodos = [...todos, newTodo];
    // updatedTodos.push(newTodo);
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>To-do App</h1>
      <NewTodo addTodo={addTodo} />
      <TodoList todos={todos} />
    </>
  );
}
