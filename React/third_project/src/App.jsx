import { useState } from 'react';

import './App.css';
import { Countes } from './Components/Countes';

export function App() {
  const [count, setCount] = useState(0); // 'count' is assigned a value but never used

  return (
    <>
      <h1 id="count">count {count}</h1>
      <Countes xyz={{ setCount }} />
    </>
  );
}
