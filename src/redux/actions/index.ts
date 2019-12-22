import * as actions from "./constants";

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
    payload: workoutPayload
}

export interface LoginPayload {
    username : string
}

export interface workoutPayload {
    workout_id : string
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


export function addWorkout(workout_id : string) : AddWorkoutAction  {
    return {
        type : actions.ADD_WORKOUT,
        payload : {
            workout_id : workout_id
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