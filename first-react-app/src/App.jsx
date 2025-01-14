// src/App.jsx



// const AddTen = (x) => {
//   return (
  
//   <h1>Hi</h1>
//   )
// }

// const App = () => {

//   const names = [`Simon`,`Jonathan`,`Kristie`]
//   const x = names.map((name) =>  <p>Hi {name}</p>)

//   return (
//     <>
//     <h1>Hello, world!</h1>
//     {/* <h2>Hi {names}</h2> */}
//     <h2> {x}</h2>
//     </>
//   );
// };

// export default App;

// src/App.jsx

// const App = () => {
  
//   return (
//     <h1>Hello world!</h1>
//   );
// };



// const App = () => {
//   const todo = { text: 'A brand new task', done: true };

//   return (
//     <>
//       <h1>JavaScript in JSX</h1>
//       <p>{todo.text}</p>
//     </>
//   );
// };


const App = () => {
const todo = { text: 'A brand new task', done: true };
const todos = [
    {text: 'Learn JavaScript', done: true},
    {text: 'Learn JSX', done: false},
    {text: 'Learn HTML', done: true},
    {text: 'Learn CSS', done: true},
    {text: 'Master React', done: false},
  ];

return (
    <>
      <h1>JavaScript in JSX</h1>
      <p>{todo.text}</p>

      <h2>Conditional Rendering</h2>
      <p>{todo.done ? `Task Completed - ${todo.text}` : todo.text}</p>

      <h2>Looping with JSX</h2>
      <ul>
        {todos.map((todo, index) =>
          <li key={index}>{todo.text}</li>
        )}
      </ul>
    </>


  );
}


export default App;