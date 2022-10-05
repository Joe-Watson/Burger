import React from "react"
import BuildControl from "./BuildControl/BuildControl"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

const Control = [
    { label: "Bacon", type: "bacon" },
    { label: "Salad", type: "salad" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" }

]


const BuildControls = (props) => {

    return <div className="container-fluid  d-flex flex-column shadow-sm ">
        <p className="text-primary">Current Prize : {props.prize.toFixed(2)}</p>
        {Control.map((ctrl) =>
        (<BuildControl
            key={ctrl.label}
            label={ctrl.type}
            added={() => props.ingrdientAdded(ctrl.type)}
            removed={() => props.ingrdientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
        />
        )
        )}
        <button className="btn btn-success m-4" disabled={!props.purchasable}>ODER NOW</button>
    </div>
}
export default BuildControls