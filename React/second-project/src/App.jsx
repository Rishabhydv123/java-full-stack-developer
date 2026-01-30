import './App.css';

function App() {
  // logic js syntax

  const data = [
    "mehfooz",
    "khan",
    "nillu",
    "parru",
    "shaddu",
    "rissu",
    "hummu",
  ];

  // HOF - [filter, map, reduce, forEach]

  return (
    <>
      {/* html syntax */}

      {/* 
      <h1>{data[0]}</h1>
      <h1>{data[1]}</h1>
      <h1>{data[2]}</h1>
      <h1>{data[3]}</h1>
      <h1>{data[4]}</h1>
      <h1>{data[5]}</h1>
      <h1>{data[6]}</h1> 
      */}

      {data.map((el) => (
        <h1>{el}</h1>
      ))}
    </>
  );
}

export {App};
