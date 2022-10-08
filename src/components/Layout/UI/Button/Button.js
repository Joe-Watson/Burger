import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
const Button = (props) => {
    return (<button className={props.btnType} onClick={props.clicked}>
        {props.children}
    </button>)
}
export default Button