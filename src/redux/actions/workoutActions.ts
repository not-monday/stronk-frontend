import * as actions from "./constants";
import { exercise } from "../../domain/model/exercise";
import { Workout } from "../../domain/model/workout";

import {ADD_WORKOUT, DELETE_WORKOUT, EDIT_WORKOUT, GET_WORKOUT} from "../actions/constants";


export interface LoginAction {
    type: typeof actions.LOGIN
    payload : LoginPayload
}

export interface AddWorkoutAction {
    type: typeof ADD_WORKOUT
    payload: workoutPayload
}

export interface GetWorkoutAction {
    type: typeof GET_WORKOUT
}

export interface EditWorkoutAction {
    type : typeof EDIT_WORKOUT
    payload : workoutPayload
}


export interface DeleteWorkoutAction {
    type: typeof DELETE_WORKOUT
    payload: idPayload
}

export interface LoginPayload {
    username : string
}

export interface idPayload {
    workout_id : string
}

export interface workoutPayload {
    workout : Workout
}

export interface editPayload {
    workout : Workout
}


export function login(username : string) : LoginAction {
    return {
        type : actions.LOGIN,
        payload : {
            username : username
        }
    }
}

export function getWorkouts() : GetWorkoutAction  {
    return {
        type : GET_WORKOUT
    }
}


export function addWorkout(workout : Workout) : AddWorkoutAction  {
    return {
        type : ADD_WORKOUT,
        payload : {
            workout : workout
        }
    }
}

export function editWorkout(workout : Workout) : EditWorkoutAction {
    return {
        type : EDIT_WORKOUT,
        payload : {
            workout : workout
        }
    }
}

export function deleteWorkout(workout_id : string) : DeleteWorkoutAction  {
    return {
        type : DELETE_WORKOUT,
        payload : {
            workout_id : workout_id
        }
    }
}




export type WorkoutAction = | AddWorkoutAction | DeleteWorkoutAction | GetWorkoutAction | EditWorkoutAction
