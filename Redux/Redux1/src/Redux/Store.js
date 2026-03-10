import { legacy_createStore } from "redux";

import { Reducer as RegularReducer } from "./Reducer";
import { Reducer as ExtraReducer } from "./ExtraRedux";

import { DOUBLE } from "./Action";

const myStore = legacy_createStore(RegularReducer);

setTimeout(() => {

  myStore.replaceReducer(ExtraReducer);

  myStore.dispatch({ type: DOUBLE });

}, 2000);

const observed = myStore["@@observable"]();

observed.subscribe({
  next: (event) => {
    console.log("this is from observe subscribe function value", event);
  },
});

export { myStore };