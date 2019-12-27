import * as actions from "./constants";
import { exercise } from "../../domain/model/exercise";

export interface LoginAction {
    type: typeof actions.LOGIN
    payload : LoginPayload
}

export interface AddWorkoutAction {
    type: typeof actions.ADD_WORKOUT
    payload: workoutPayload
}

export interface GetWorkoutAction {
    type: typeof actions.GET_WORKOUT
}


export interface deleteWorkoutAction {
    type: typeof actions.DELETE_WORKOUT
    payload: idPayload
}

export interface LoginPayload {
    username : string
}

export interface idPayload {
    workout_id : string
}

export interface workoutPayload {
    workout_id : string
    description : string
    projectedTime : string
    exercises : string[]
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
        type : actions.GET_WORKOUT
    }
}


export function addWorkout(workout_id : string, workout_exercises : string[], description : string, projectedTime : string) : AddWorkoutAction  {
    return {
        type : actions.ADD_WORKOUT,
        payload : {
            workout_id : workout_id,
            description : description,
            projectedTime : projectedTime,
            exercises : workout_exercises
        }
    }
}

export function deleteWorkout(workout_id : string) : deleteWorkoutAction  {
    return {
        type : actions.DELETE_WORKOUT,
        payload : {
            workout_id : workout_id
        }
    }

}