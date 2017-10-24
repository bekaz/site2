import React, { Component } from 'react';
import './App.css';

import LoginForm from "./components/LoginForm/LoginForm";
import MainForm from "./components/MainForm/MainForm";

import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="/q1" component={MainForm}/>
      </Switch>
    );
  }
}

export default App;
