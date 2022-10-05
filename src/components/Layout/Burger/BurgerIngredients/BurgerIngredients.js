import React, { Component } from "react"
import PropTypes from "prop-types"
import "../BurgerIngredients/BurgerIngredient.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
class BurgerIngredients extends Component {
    render() {
        let ingredients = null;
        switch (this.props.type) {
            case ("bread-top"):
                ingredients = (<div className="BreadTop  topp container">
                    <div className="Seeds1"><p className=" top text-white" >Seeds1</p></div>
                    <div className="Seeds2"><p className=" top text-white">Seeds1</p></div>
                </div>
                )
                break;
            case ("meat"):
                ingredients = (< div className="Meat container">
                    <p className="fs-3 Meat1">Meat</p>
                </div >

                )
                break;
            case ("cheese"):
                ingredients = (< div className="Cheese container" >
                    <p className="fs-6 Cheese1">Cheese</p>
                </div >
                )
                break;
            case ("bacon"):
                ingredients = (< div className="Bacon container">
                    <p className="fs-6">salad</p>
                </div >
                )
                break;
            case ("salad"):
                ingredients = (< div className="Salad container">
                    <p className="fs-6 Salad1">bacon</p>
                </div >
                )
                break;
            case ("bread-bottom"):
                ingredients = (<div className="BreadBottom container">
                    <p className="BreadBottom1 text-warning">BreadBottom</p>
                </div>
                )
                break;
            default:
                ingredients = null
        }
        return ingredients

    }
}
BurgerIngredients.propTypes = { type: PropTypes.string.isRequired }


export default BurgerIngredients