import React from "react";
import Aux from "../../Hoc/jux"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
const Layout = (props) => (
    <Aux>
        <div>Toobar,SideDraw, Backdrop</div>
        <main className="fs-1">{props.children}</main>
    </Aux>);
export default Layout