import React, { useContext} from "react";
import { TodosValContext } from "../Context/TodoContext";

export const TodoList = () => {
  const { todo } = useContext (TodosValContext);
  console.log('todo:from list', todo);

  return <div>TodoList</div>
};