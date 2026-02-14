import { useEffect, useState } from 'react'
import './App.css'

 export function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    console.log('this is without depn');
  });

   useEffect(() => {
    console.log('this is Empty depn');
  }, []);

  useEffect(() => {
    console.log('this is when count update then this effect depn work');
  }, [count]);

  return (
    <>
     <h1>Hello</h1> 
     <button onClick={handleClick}>click</button>
    </>
  )
}

export default App
