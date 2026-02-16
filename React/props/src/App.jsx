import React from 'react';
import { NameShow } from './Components/Nameshow';
import { NameShow2 } from './Components/NameShow2';

export const App = () => {
  return (
    <>
      <h1>Props</h1>

      <NameShow label={"khan"} age={22} />
      <NameShow />
      <NameShow age={99} />

      <NameShow2 />
      <NameShow2 name="mehfooz" age="999" label="fsd" />
      <NameShow2 name="mehfooz" age="999" />
    </>
  );
};
