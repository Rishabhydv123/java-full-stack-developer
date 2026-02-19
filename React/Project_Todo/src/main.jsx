import React, { useInsertionEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextTodo from "./Context/ContextTodo";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextTodo>
      <App />
    </ContextTodo>
  </React.StrictMode>
);



