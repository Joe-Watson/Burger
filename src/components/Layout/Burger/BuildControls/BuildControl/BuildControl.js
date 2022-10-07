import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

const BuildControl = (props) => {
    return (<div className="container bg-waring ">
        <div className="text-dark fs-3 text-success " style={{ textTransform: 'capitalize' }}>{props.label}</div>
        <button className=" btn btn-outline-success shadow-sm m-2 " onClick={props.removed} disabled={props.disabled}>Less</button>
        <button className="btn btn-outline-success shadow-sm m-2 " onClick={props.added}>More</button>
    </div>)
}
export default BuildControl