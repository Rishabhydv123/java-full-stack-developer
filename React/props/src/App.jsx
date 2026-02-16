import React from 'react';
import { NameShow } from './Components/Nameshow';
import { NameShow2 } from './Components/NameShow2';

export const App = () => {
  return (
    <>
      <h1>Props</h1>

      <NameShow label={"Yadav"} age={22} />
      <NameShow />
      <NameShow age={19} />

      <NameShow2 />
      <NameShow2 name="Rishabh" age="20" label="fsd-Java" />
      <NameShow2 name="Yadav" age="21" />
    </>
  );
};
