import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Aux from "../../../../Hoc/jux";
import Backdrop from "../BackDrop/Backdrop";

// show={props.show} clicked={props.modelCloser}
const Model = (props) => {
    return (<Aux>
        <Backdrop show={props.show} clicked={props.closed} />
        <div className="container-sm  shadow p-3 mb-5 mt-5 model bg-body rounded bg-secondary"
            style={{ opacity: props.show ? '1' : '0' }}>
            {props.children}
        </div>
    </Aux>)
}
export default Model