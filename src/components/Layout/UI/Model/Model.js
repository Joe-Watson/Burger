import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
const Model = (props) => {
    return (<div className="container">
        {props.children}
    </div>)
}
export default Model