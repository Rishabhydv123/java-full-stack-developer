import React, { createContext, useState } from "react";
export const TodoContext = createContext();

const ContextTodo = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    )
  );
};

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodoContext.Provider
    value={{ todos, addTodo, deleteTodo, toggleTodo, editTodo }}
   >
    {children}
    </TodoContext.Provider>
  );
};

export default ContextTodo;
