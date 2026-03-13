import { myStore } from "../Redux/Store";
import { DEPOSIT, DOUBLE, WITHDRAW } from "../Redux/Action";
import { useState } from "react";

export const Account = () => {

  const { dispatch, subscribe } = myStore;

  const [jugad, setJugad] = useState(0);

  const handleDeposit = () => {
    dispatch({ type: DEPOSIT, payload: 10 });
  };

  subscribe(() => {
    setJugad(jugad + 1);
  });

  const handleWithdraw = () => {
    dispatch({ type: WITHDRAW, payload: 20 });
  };

  const handleDouble = () => {
    dispatch({ type: DOUBLE });
  };

  return (
    <>
      <h1>Account {myStore.getState().amount}</h1>

      <button onClick={handleDeposit}>deposit</button>

      <button onClick={handleWithdraw}>withdraw</button>

      <button onClick={handleDouble}>double</button>
    </>
  );
};