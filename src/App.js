import React, { Component } from 'react';
import './App.css';

import LoginForm from "./components/LoginForm/LoginForm"

import {HashRouter, Route} from "react-router-dom";

class App extends Component {
  render() {   
    return ( 
    <HashRouter>
      <div className="App">
        <Route path='/' render={(props) => (<LoginForm />)}/>
        <Route path='/q2' render={(props) => (<LoginForm />)}/>        
      </div>      
    </HashRouter>
    );
  }
}

export default App;
