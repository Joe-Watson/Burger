import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
const Backdrop = (props) => {
    return (props.show ? <div className="conatiner-sm  justify-content-center text-danger " style={{ heigjt: 40 }} onClick={props.clicked}>Close</div> : null)

}
export default Backdrop