import React, {Component} from "react"
import "./LoginForm.css"

import Input from "../input/Input"

import {Redirect} from "react-router-dom";

class LoginForm extends Component {
    render() {
        return (
            <div className="LoginForm">
                <Input InputType="text"/>
                <Input InputType="password"/>
                <p>
                  <Redirect to="/q1">LogIn Me</q1>
                </p>
            </div>
        )
    }
}

export default LoginForm;
