import * as actions from "./constants";

export interface LoginAction {
    type: typeof actions.LOGIN
    payload : LoginPayload
}

export interface AddWorkoutAction {
    type: typeof actions.ADD_WORKOUT
    payload: workoutPayload
}

export interface deleteWorkoutAction {
    type: typeof actions.DELETE_WORKOUT
    payload: workoutPayload
}

export interface LoginPayload {
    username : string
}

export interface workoutPayload {
    workoutName : string
}

export function login(username : string) : LoginAction {
    return {
        type : actions.LOGIN,
        payload : {
            username : username
        }
    }
}

export function addWorkout(workoutName : string) : AddWorkoutAction  {
    return {
        type : actions.ADD_WORKOUT,
        payload : {
            workoutName : workoutName
        }
    }
}

export function deleteWorkout(workoutName : string) : deleteWorkoutAction  {
    return {
        type : actions.DELETE_WORKOUT,
        payload : {
            workoutName : workoutName
        }
    }
}