import { useRef  } from "react";
import './App.css';

export function App(){
  const inputvalue = useRef(null);

  const showData = () => {
    const answer = inputvalue.current.value;
    console.log('answer:', answer);
  };

  return (
    <>
    <input type="text" ref={inputvalue}/>
    <button onClick={showData}>click</button>
    </>
  )
}