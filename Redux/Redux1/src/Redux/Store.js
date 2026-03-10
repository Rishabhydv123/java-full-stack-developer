import { legacy_createStore } from 'redux';

import { Reducer } from './Reducer';
import { DOUBLE } from './Action';

const initialValue = {
  amount: 0,
  isError: false,
  isComplete: false,
};

const myStore = legacy_createStore(Reducer, initialValue);

export { myStore };