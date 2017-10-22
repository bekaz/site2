import React, { Component } from 'react';
import './App.css';

import LoginForm from "./coponents/LoginForm/LoginForm"

class App extends Component {
  render() {
    return (
      <div className="App">
          <LoginForm />
          Remain before stage 1 '24:00:00'
      </div>
    );
  }
}

export default App;
