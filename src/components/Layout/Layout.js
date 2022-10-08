import React from "react";
import Aux from "../../Hoc/jux"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Toolbar from "./Navigation/Toolbar/Toolbar";
const Layout = (props) => (
    <Aux>
        <Toolbar />
        <main className="fs-1">{props.children}</main>
    </Aux>);
export default Layout