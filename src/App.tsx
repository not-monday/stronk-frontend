import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import { Store } from "redux"
import store from "./redux/store/index";
import * as actions from "./redux/actions/index"

import UserPreview from './components/userpreview/userpreview';
import {User} from './domain/model/user';


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
    return (
      <Switch>
        <Route exact path="/" render={(props) => <UserPreview {...props} user={user}/>}/>
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
  return new User("test user");
}

export default App;
