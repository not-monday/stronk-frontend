import { createStore } from "redux";
import rootReducer from "../reducers/combineReducer";

const store = createStore(rootReducer);
console.log(store.getState().workout.workouts[0])
export default store;
