import React, {Component} from "react"
import "./LoginForm.css"

import Input from "../input/Input"
import {Link, browserHistory} from "react-router-dom";

class LoginForm extends Component {
    render() {
        return (
            <div className="LoginForm">
                <Input InputType="text"/>
                <Input InputType="password"/>
                <button onClick={() => hashHistory.push('/q2')}>
                     
                </button>
            </div>
        )
    }
}

export default LoginForm;