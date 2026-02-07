import React, { useState } from "react";
import { Todos } from "./Todos.jsx";

export const TodoInput = () => {
  const [text, setText] = useState('');
  const [todo, setTodo] = useState([]);

  const handleAdd = () => {
    if (text.trim() === '') return;

    setTodo([
      ...todo,
      {
        id: Date.now(),
        text,
        isEdit: false,
        isCompleted: false,
      },
    ]);
    setText('');
  };

  const handleDelete = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  const handleToggle = (id) => {
    setTodo(
      todo.map((item) =>
        item.id === id
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      )
    );
  };

  const handleEdit = (id) => {
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, isEdit: true } : item
      )
    );
  };

  const handleSave = (id, newText) => {
    setTodo(
      todo.map((item) =>
        item.id === id
          ? { ...item, text: newText, isEdit: false }
          : item
      )
    );
  };

  return (
    <div className="todo-container">
      <h2 className="title">Todo App</h2>

      <div className="input-box">
        <input
          type="text"
          value={text}
          placeholder="Enter todo..."
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAdd}>Confirm</button>
      </div>

      <Todos
        todo={todo}
        onDelete={handleDelete}
        onToggle={handleToggle}
        onEdit={handleEdit}
        onSave={handleSave}
      />
    </div>
  );
};
