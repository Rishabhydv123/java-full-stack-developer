/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const TodosValContext = createContext(null);

export const TodosContext = ({ children }) => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  return (
    <TodosValContext.Provider value={{ text, todo, setText, setTodo }}>
      {children}
    </TodosValContext.Provider>
  );
};
