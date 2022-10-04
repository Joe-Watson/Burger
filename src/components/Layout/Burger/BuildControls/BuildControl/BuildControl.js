import React from "react";
const BuildControl1 = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '5 0'
}
const Button = {
    display: 'block',
    font: 'inherit',
    padding: ' 5',
    margin: '0 5',
    width: '80',
    border: '1 solid #aa6817',
    cursor: 'pointer',
    outline: 'none'
}
const Label = {
    padding: '10',
    fontWeight: 'bold',
    width: '80'
}
const Less = {
    backgroundColor: '#d39952',
    color: 'white'
}


const BuildControl = (props) => {
    return <div style={{ BuildControl1, Button }}>
        <div style={Label}>{props.label} Hello</div>
        <button style={Less}>Less</button>
        <button style={Less}>More</button>
    </div>
}
export default BuildControl