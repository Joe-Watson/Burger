import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import classes from "./Button.css"
const Button = (props) => {
    return (<button className={props.btnType} onClick={props.clicked}>
        {props.children}
    </button>)
}
export default Button