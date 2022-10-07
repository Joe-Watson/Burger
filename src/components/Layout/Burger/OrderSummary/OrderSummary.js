import React from "react";
import Aux from "../../../../Hoc/jux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Button from "../../UI/Button/Button";
const Summary = (props) => {
    const IngredientSummary = Object.keys(props.ingrdients).map(isKey => {
        return (<li key={isKey} className="text-info list-group-item">
            <span style={{ textTransform: 'capitalize' }}>{isKey}</span>:{props.ingrdients[isKey]}
        </li>)

    })

    return (<Aux>
        <h3 className="text-primary">Your Order</h3>
        <p className="text-warning fs-4"> A Delicious Buger with the following ingrdients</p>
        <ul className="p-5">
            {IngredientSummary}
        </ul>
        <p>Total Price:{props.price}</p>
        <p className="text-success fs-3" >Continu to checkout?</p>
        <Button btnType="btn btn-success m-2" clicked={props.purchaseContinu}>Continu</Button>
        <Button btnType="btn btn-danger m-2" clicked={props.purchaseCancel}>Cancel</Button>


    </Aux>)
}
export default Summary