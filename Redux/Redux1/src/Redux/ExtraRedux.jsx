import * as types from './Action';

const initialValue = {
  amount: 100,
};

const Reducer = (oldState = initialValue, { type, payload }) => {

  console.log("type:", type);

  switch (type) {

    case types.DOUBLE:
      return {
        ...oldState,
        amount: oldState.amount * 25,
      };

    case types.DEPOSIT:
      return {
        ...oldState,
        amount: oldState.amount + payload,
      };

    case types.WITHDRAW:
      return {
        ...oldState,
        amount: oldState.amount - payload,
      };

    default:
      return oldState;
  }
};

export { Reducer };