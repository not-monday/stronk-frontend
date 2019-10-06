import * as actions from "../actions/constants"
import { Action } from "redux";
import {LoginAction} from "../actions";

const initialState = {
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
        default : {
            console.log(action)
            return state
        }
    }
}

export default rootReducer