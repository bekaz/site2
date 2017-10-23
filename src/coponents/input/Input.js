import React, {Component} from "react";
import "./Input.css";

class Input extends Component {
    render () {
        return (
            <input 
                type = "text" 
                placeholder="your text"
                className = "Input">
            </input> 
        )
    }
}

export default Input;