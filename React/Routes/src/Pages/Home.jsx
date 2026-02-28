import React, { useState } from "react";

export const Home = () => {
  const [count, setCount] = useState(0);
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  const deleteTodo = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  return (
    <div style={container}>
      <h1 style={title}>Todo And Counter</h1>

      <div style={grid}>

        <div style={card}>
          <h2>Counter</h2>
          <h3 style={{ fontSize: "40px" }}>{count}</h3>
          <div>
            <button style={btn} onClick={() => setCount(count + 1)}>+</button>
            <button style={btn} onClick={() => setCount(count - 1)}>-</button>
            <button
              style={{ ...btn, background: "#f01404" }}
              onClick={() => setCount(0)}
            >
              🔄
            </button>
          </div>
        </div>

        <div style={card}>
          <h2>Todo List</h2>

          <div style={{ marginBottom: "15px" }}>
            <input
              type="text"
              value={task}
              placeholder="Enter task"
              onChange={(e) => setTask(e.target.value)}
              style={input}
            />
            <button style={btn} onClick={addTodo}>Add</button>
          </div>

          <ul style={{ listStyle: "none", padding: 0 }}>
            {todos.map((item, index) => (
              <li key={index} style={todoItem}>
                {item}
                <button
                  style={{ ...btn, background: "#ff4d4d", padding: "5px 10px" }}
                  onClick={() => deleteTodo(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div style={card}>
          <h2>Stats</h2>
          <p>Total Tasks: {todos.length}</p>
          <p>Counter Value: {count}</p>
        </div>

      </div>
    </div>
  );
};

const container = {
  padding: "40px",
  fontFamily: "Arial, sans-serif",
  background: "#f4f6f9",
  minHeight: "100vh",
};

const title = {
  textAlign: "center",
  marginBottom: "40px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "20px",
};

const card = {
  background: "white",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  textAlign: "center",
};

const btn = {
  padding: "8px 15px",
  margin: "5px",
  border: "none",
  background: "#4CAF50",
  color: "white",
  borderRadius: "5px",
  cursor: "pointer",
};

const input = {
  padding: "8px",
  width: "60%",
  marginRight: "10px",
};

const todoItem = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "10px",
  background: "#f1f1f1",
  padding: "8px 12px",
  borderRadius: "6px",
};

// import React from 'react'

// export const Home = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

