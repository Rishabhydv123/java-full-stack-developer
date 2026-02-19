import React from "react";
import TodoInput from "../Components/TodoInput";
import TodoList from "../Components/TodoList";

const Todo = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Todo App (Context API)</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default Todo;
