export const Countes = ({ xyz}) => {
  console.log('🚀 ~ xyz:', xyz);

  const handleDec = () => {
    // setCount(count - 1);
    xyz.setCount((prv) => prv - 1);
  };

  const handleInc = () => {
    // setCount(count + 1);
    xyz.setCount((prv) => prv + 1);
  };

  return (
    <>
       {/* <h1 id="count">count {count}</h1> */}
      <button onClick={handleDec}>dec</button>
      <button onClick={handleInc}>inc</button>
    </>
  );
};
