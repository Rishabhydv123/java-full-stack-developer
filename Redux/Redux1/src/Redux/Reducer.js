import * as types from './Action';

const initialValue = {
  amount: 0,
  isError: false,
  isComplete: false,
};

const Reducer = (oldState = initialValue, { type, payload }) => {

  console.log("payload:", payload);

  switch (type) {

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