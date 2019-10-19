import * as actions from "../actions/constants"
import { Action } from "redux";
import {LoginAction, AddWorkoutAction, deleteWorkoutAction} from "../actions";


interface initialState {
    user: null,
    workouts: any[];
  }

const initialState: initialState = {
    user : null,
    workouts: []
};

function rootReducer(state = initialState, action : Action) {
    switch(action.type) {
        case actions.LOGIN : {
            var sAction = action as LoginAction;
            return Object.assign({}, state, {
                user : { name : sAction.payload.username}
            });
        }
        case actions.ADD_WORKOUT : {
            var addWorkout = action as AddWorkoutAction;
            return {
                ...initialState,
                workouts: [addWorkout.payload.workoutName, ...initialState.workouts]
            }
        }
        case actions.DELETE_WORKOUT : {
            var deleteWorkout = action as deleteWorkoutAction
            return {
                ...initialState, 
                workouts: initialState.workouts.filter(workout => deleteWorkout.payload.workoutName !== workout)
            }
        }

        default : {
            console.log(action)
            return state
        }
    }
}

export default rootReducer