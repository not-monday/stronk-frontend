import * as actions from "../actions/constants"
import { Action } from "redux";
import {LoginAction, AddWorkoutAction, deleteWorkoutAction, GetWorkoutAction} from "../actions";
import { Workout } from "../../domain/model/workout";

export interface workoutState {
    workouts: Workout[];
  }

export const WorkoutState: workoutState = {
    workouts: [{workout_id: "1", description: "Test workout", projectedTime: "69 min", exercises: ["test ups"]}]
};

export function workoutReducer(state = WorkoutState, action : Action) {
    switch(action.type) {
        case actions.LOGIN : {
            var sAction = action as LoginAction;
            return Object.assign({}, state, {
                user : { name : sAction.payload.username}
            });
        }
        case actions.GET_WORKOUT : {
            return {
                ...WorkoutState
            }
        }
        case actions.ADD_WORKOUT : {
            var addWorkout = action as AddWorkoutAction;
            return {
                ...WorkoutState,
                workouts: [addWorkout.payload.workout_id, ...WorkoutState.workouts]
            }
        }
        case actions.DELETE_WORKOUT : {
            var deleteWorkout = action as deleteWorkoutAction
            return {
                ...WorkoutState, 
                workouts: WorkoutState.workouts.filter(workout => deleteWorkout.payload.workout_id!== workout.workout_id)
            }
        }

        default : {
            console.log(action)
            return WorkoutState
        }
    }
}