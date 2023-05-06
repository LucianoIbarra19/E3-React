import React from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TotalItems from "./components/TotalItems";

function App() {
  return (
    <div className="">
      <h1>My Todo List App</h1>
      <AddTodoForm />
      <TodoList />
      <TotalItems />
    </div>
  );
}

export default App;
