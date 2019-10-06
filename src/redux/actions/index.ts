import * as actions from "./constants";

export interface LoginAction {
    type: typeof actions.LOGIN
    payload : LoginPayload
}

interface AddWorkoutPayload {

}

export interface LoginPayload {
    username : string
}

export function login(username : string) : LoginAction {
    return {
        type : actions.LOGIN,
        payload : {
            username : username
        }
    }
}

export function addWorkout(payload : AddWorkoutPayload) {
    return {
        type : actions.ADD_WORKOUT,
        payload
    }
}

