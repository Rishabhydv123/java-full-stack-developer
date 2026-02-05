import './App.css';
import { useState } from 'react';
import { Countes } from './Components/countes';
import { Data } from './Components/Data';
import { AxiosData } from './Components/Axios';

export function App() {
  const [count, setCount] = useState(0);

  const API = 'https://fakestoreapi.com/products';

  const data = [];

  return (
    <>
      <Countes xyz={{ setCount, count }} />

      <Data props={{ data }} />

      <AxiosData url={API} />
    </>
  );
}
