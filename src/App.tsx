import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Store } from "redux"
import store from "./redux/store/index";
import * as actions from "./redux/actions/index"


interface StronkWindow extends Window {
  store : Store;
  login(payload : string) : actions.LoginAction;
}

declare var window : StronkWindow;
window.store = store;
window.login = actions.login

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
