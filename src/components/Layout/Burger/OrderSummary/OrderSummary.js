import React from "react";
import Aux from "../../../../Hoc/jux";
const Summary = (props) => {
    const IngredientSummary = Object.keys(props.ingrdients).map(isKey => {
        return (<li>
            <span>{isKey}</span>: {props.ingrdients[isKey]}
        </li>)
    })
    return (<Aux>
        <h3>Your Order</h3>
        <p> A Delicious Buger with the following ingrdients</p>
        <ul>
            <IngredientSummary />
        </ul>
        <p>Continu to checkout?</p>
    </Aux>)
}
export default Summary