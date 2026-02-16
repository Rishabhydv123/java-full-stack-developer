import React from 'react';

export const NameShow2 = ({ 
  label = "not define yet", age = "00", name = "hello123" 
}) => {
  return (
    <>
      <h4>{label} - {age} - {name}</h4>
    </>
  );
};
