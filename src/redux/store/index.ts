import { createStore } from "redux";
import rootReducer from "../reducers/combineReducer";


const InitialState = {};
const store = createStore(rootReducer, InitialState);

export default store;
