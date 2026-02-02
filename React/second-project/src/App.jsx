// import './App.css';

// function App() {
//   // logic js syntax

//   const data = [
//     "mehfooz",
//     "khan",
//     "nillu",
//     "parru",
//     "shaddu",
//     "rissu",
//     "hummu",
//   ];

//   // HOF - [filter, map, reduce, forEach]

//   return (
//     <>
//       {/* html syntax */}

//       {/* 
//       <h1>{data[0]}</h1>
//       <h1>{data[1]}</h1>
//       <h1>{data[2]}</h1>
//       <h1>{data[3]}</h1>
//       <h1>{data[4]}</h1>
//       <h1>{data[5]}</h1>
//       <h1>{data[6]}</h1> 
//       */}

//       {data.map((el) => (
//         <h1>{el}</h1>
//       ))}
//     </>
//   );
// }

// export {App};


import React, { useState } from 'react';

import './App.css';

export function App() {
  // hooks
  const [count, setCount] = useState(0);

  const handleDec = () => {
    // setCount(count - 1);
    setCount((prv) => prv - 1);
  };

  const handleInc = () => {
    // setCount(count + 1);
    setCount((prv) => prv + 1);
  };

  // let count = 0;

  // const handleDec = () => {
  //   count--;
  //   document.getElementById('count').innerText = `count ${count}`;
  // };

  // const handleInc = () => {
  //   count++;
  //   document.getElementById('count').innerText = `count ${count}`;
  // };

  return (
    <>
      <h1 id="count">count {count}</h1>
      <button onClick={handleDec}>dec</button>
      <button onClick={handleInc}>inc</button>
    </>
  );
}
