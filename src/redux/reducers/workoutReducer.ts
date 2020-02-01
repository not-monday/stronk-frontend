import * as actions from "../actions/constants";
import { Action } from "redux";
import {
  LoginAction,
  AddWorkoutAction,
  DeleteWorkoutAction,
  GetWorkoutAction,
  WorkoutAction
} from "../actions/workoutActions";

import {
    ADD_WORKOUT,
    DELETE_WORKOUT,
    EDIT_WORKOUT,
    GET_WORKOUT
} from "../actions/constants"



import { Workout } from "../../domain/model/workout";

export interface workoutState {
  workouts: Workout[];
}

const WorkoutState: workoutState = {
  workouts: [
    {
      workout_id: "1",
      description: "Test workout",
      projectedTime: "69 min",
      exercises: ["test ups"]
    },
    {
      workout_id: "2",
      description: "Test workout",
      projectedTime: "69 min",
      exercises: ["test ups"]
    }
  ]
};

export const workoutReducer = (state = WorkoutState,action: WorkoutAction): workoutState => {
    switch (action.type) {
        case GET_WORKOUT:
            return {
                ...state
            };
        case ADD_WORKOUT:
            return {
                ...state,
                workouts: [action.payload.workout, ...state.workouts]
            };
        case EDIT_WORKOUT: 
            return {
              ...state,
              workouts: state.workouts.map( (workout) => {
                if(workout.workout_id !== action.payload.workout.workout_id) {
                  return workout
                }
                return {
                  ...workout,
                  ...action.payload.workout
                }
              }
              )
            }
        case DELETE_WORKOUT:
            //var deleteWorkout = action as deleteWorkoutAction;
            return {
                ...state,
                workouts: state.workouts.filter(
                    workout => action.payload.workout_id !== workout.workout_id
                )
            };
        default:
            console.log(action);
            return state;
    }
};
