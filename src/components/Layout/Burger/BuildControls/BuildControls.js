import React from "react"
import BuildControl from "./BuildControl/BuildControl"
const BuildControls1 = {
    height: '300',
    width: '100',
    backgroundColor: '#ce8c06',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 2 1 #ccc',
    margin: 'auto',
    padding: '10 0'
}

const Control = [
    { label: "Seed", type: "seed" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" }

]


const BuildControls = (props) => {

    return <div style={BuildControls1}>
        {Control.map((ctrl) => {
            <BuildControl key={ctrl.label} label={ctrl.type} />
        })}
    </div>
}
export default BuildControls