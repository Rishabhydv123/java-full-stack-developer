export const Countes = ({ xyz }) => {
  console.log('🚀 ~ xyz:', xyz);

  const handleDec = () => {
    // setCount(count - 1);
    xyz.setCount((prev) => prev - 1);
  };

  const handleInc = () => {
    // setCount(count + 1);
    xyz.setCount((prev) => prev + 1);
  };

  return (
    <>
      <h1 id="counter">Count : {xyz.count}</h1>

      <button onClick={handleDec}>dec</button>
      <button onClick={handleInc}>inc</button>
    </>
  );
};
