import React from "react";
import {TodoInput} from "../Components/TodoInput";
import {TodoList} from "../Components/TodoList";
import { TodoContext } from "../Context/TodoContext";

export const Todo = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Todo App (Router)</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
};


