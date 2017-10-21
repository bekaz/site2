import React, {Component} from "react"
import "./LoginForm.css"

import Input from "../input/Input"

class LoginForm extends Component {
    render() {
        return (
            <div className="LoginForm">
                <Input />
                <Input />
            </div>
        )
    }
}

export default LoginForm;