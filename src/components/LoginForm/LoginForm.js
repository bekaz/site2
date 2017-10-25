import React, {Component} from "react"
import "./LoginForm.css"

import Input from "../input/Input"

import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom"

class LoginForm extends Component {
  Redir = () => {
    console.log("asd");
    this.props.history.push("/q1");
  }
    render() {
        return (
            <div className="LoginForm">
                <Input InputType="text"/>
                <Input InputType="password"/>
                  <button onClick={this.Redir}>Log Me </button>
            </div>
        )
    }
}

export default withRouter(LoginForm);
