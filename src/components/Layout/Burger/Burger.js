import React from "react";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../Burger/Burger.css"
const Burgur = {
    width: '100%',
    margin: 'auto',
    height: '250',
    overflow: 'scroll',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1.2'
}
const Buger = (props) => {
    let tranformIngredient = Object.keys(props.ingrdients)
        .map(isKey => {
            //iskey store all the string value of Object
            return [...Array(props.ingrdients[isKey])]
                .map((_, i) => { return <BurgerIngredients key={isKey + i} type={isKey} /> })
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, [])
    if (tranformIngredient.length === 0) {
        tranformIngredient = <p>Please enter the ingrdients</p>
    }

    return (

        <div style={Burgur}>
            <BurgerIngredients type="bread-top" />
            {tranformIngredient}
            <BurgerIngredients type="bread-bottom" />
        </div>
    )
}
export default Buger