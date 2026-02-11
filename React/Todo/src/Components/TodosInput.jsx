import { useState } from "react";
import { Todos } from "./Todos";

export const TodosInput = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  const handleAdd = () => {
    if (text.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text,
      isChecked: false,
    };

    setTodo([...todo, newTodo]);
    setText("");
  };

  return (
    <div className="MainDiv">
      <div className="input-row">
        <input
          type="text"
          value={text}
          placeholder="Add todo..."
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <Todos todo={todo} setTodo={setTodo} />
    </div>
  );
};
