import React from "react"
import BuildControlDiv from "./BuildControl/BuildControl"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

const Control = [
    { label: "Seed", type: "seed" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" }

]


const BuildControls = (props) => {

    return <div className="container-fluid  d-flex flex-column shadow-sm ">
        {Control.map((ctrl) => (<BuildControlDiv key={ctrl.label} label={ctrl.type} />)
        )}
    </div>
}
export default BuildControls