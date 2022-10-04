import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

const BuildControlDiv = (props) => {
    return (<div className="container bg-waring ">
        <div className="text-dark fs-1 text-success">{props.label}</div>
        <button className=" btn btn-outline-success shadow-sm m-2 ">Less</button>
        <button className="btn btn-outline-success shadow-sm m-2 ">More</button>
    </div>)
}
export default BuildControlDiv