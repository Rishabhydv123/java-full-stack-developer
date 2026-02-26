import { useContext, useEffect } from "react";

import { useReducer } from "react";
import { TodosValContext } from "../Context/TodoContext";
import * as types from '../Reducer/Action';
import { Reducer } from "../Reducer/Reducer";


export const TodoInput = () => {
  const { todo, setTodo, text, setText } = useContext(TodosValContext);
  
  const [state, dispatch] = useReducer(Reducer, todo);
  console.log('state:', state);

  const handleAdd = () => {
    dispatch({ payload: text, type: types.ADD_TODO_ITEMS});
  };
  console.log('todo:from input page', todo);


useEffect (() => {
  setTodo(state);
}, [state]);

return (
  <>
  <input type="text" onChange={(e) => setText(e.target.value)}/>
  <button onClick={handleAdd}>add</button>
  </>
);
};