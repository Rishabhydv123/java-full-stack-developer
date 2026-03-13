import { legacy_createStore } from "redux";
import { Reducer } from "../Redux/Reducer";

const ownStore = legacy_createStore(Reducer);

export { ownStore };