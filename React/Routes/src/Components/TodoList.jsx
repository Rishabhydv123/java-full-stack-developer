import React, { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoContext";

export const TodoList = () => {
  const { todos, deleteTodo, toggleTodo, editTodo } =
    useContext(TodoContext);

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleUpdate = (id) => {
    if (editText.trim() === "") return;
    editTodo(id, editText);
    setEditId(null);
    setEditText("");
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} style={{ margin: "10px" }}>
          {editId === todo.id ? (
            <>
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => handleUpdate(todo.id)}>
                Update
              </button>
            </>
          ) : (
            <>
              <span
                onClick={() => toggleTodo(todo.id)}
                style={{
                  textDecoration: todo.completed
                    ? "line-through"
                    : "none",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
              >
                {todo.text}
              </span>

              <button onClick={() => handleEdit(todo)}>
                Edit
              </button>

              <button onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};