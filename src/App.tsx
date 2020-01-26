import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import { Store } from "redux"
import store from "./redux/store/index";
import * as actions from "./redux/actions/workoutActions"

import UserPreview from './components/userpreview/userpreview';
import {User} from './domain/model/user';
import { Workout } from './domain/model/workout';

import {addWorkout, deleteWorkout} from "./redux/actions/workoutActions";

interface StronkWindow extends Window {
  store : Store;
  login(payload : string) : actions.LoginAction;
}

declare var window : StronkWindow;
window.store = store;
window.login = actions.login



const App: React.FC = () => {
  const user = checkLogin();
  if (user) {
    const workout = checkWorkout();
    return (
      <Switch>
        <Route exact path="/" render={(props) => <UserPreview {...props} user={user} workouts={[workout]} addWorkout={addWorkout} deleteWorkout={deleteWorkout}/>}/>
        <Route exact path="/workoutPlans"/>
      </Switch>
    );
  } else {
    return <div>
      User not logged in
      // TODO please login
    </div>
  }
}

function checkLogin() : (User|void) {
  // TODO
  return new User("test user", "rrj", "rrj@stronk.com", "0");
}

/*Use the getWorkoutAction from the store*/
function checkWorkout() : (Workout|Workout) {
  return new Workout("1", "", "", [""])
}

export default App;
