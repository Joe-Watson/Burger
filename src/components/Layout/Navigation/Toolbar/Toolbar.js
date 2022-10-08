import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Logo from "../../Logo/Logo";

const Toolbar = (props) => {
    return (<header className="navbar navbar-expand-lg  text-white " style={{ height: 60, backgroundColor: '#E14D2A' }}>
        <div>Menu</div>
        <div><Logo /></div>
        <nav>....</nav>
    </header>)

}
export default Toolbar