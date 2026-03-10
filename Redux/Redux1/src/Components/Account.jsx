import { myStore } from '../Redux/Store';
import { DEPOSIT, WITHDRAW } from '../Redux/Action';
import { useState, useEffect } from 'react';

export const Account = () => {
  const { dispatch, subscribe, getState } = myStore;

  const [jugad, setJugad] = useState(0);

  useEffect(() => {
    const unsubscribe = subscribe(() => {
      setJugad((prev) => prev + 1);
    });

    return () => unsubscribe(); // cleanup
  }, []);

  const handleDeposit = () => {
    dispatch({ type: DEPOSIT, payload: 10 });
  };

  const handleWithdraw = () => {
    dispatch({ type: WITHDRAW, payload: 20 });
  };

  const handleDOUBLE = () => {
    dispatch({ type: 'DOUBLE' });
  };

  return (
    <>
      <h1>Account {getState().amount}</h1>
      <button onClick={handleDeposit}>deposit</button>
      <button onClick={handleWithdraw}>withdraw</button>
      <button onClick={handleDOUBLE}>DOUBLE</button>
    </>
  );
};