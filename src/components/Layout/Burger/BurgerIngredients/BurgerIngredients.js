import React, { Component } from "react"
import PropTypes from "prop-types"
import "../BurgerIngredients/BurgerIngredient.css"
class BurgerIngredients extends Component {
    render() {
        let ingredients = null;
        switch (this.props.type) {
            case ("bread-top"):
                ingredients = (<div className="BreadTop  topp">
                    <div className="Seeds1"><p className="fs-3 top">Seeds1</p></div>
                    <div className="Seeds2"><p className="fs-3 top">Seeds1</p></div>
                </div>
                )
                break;
            case ("meat"):
                ingredients = (< div className="Meat">
                    <p className="fs-3 Meat1">Meat</p>
                </div >

                )
                break;
            case ("cheese"):
                ingredients = (< div className="Cheese" >
                    <p className="fs-6 Cheese1">Cheese</p>
                </div >
                )
                break;
            case ("bacon"):
                ingredients = (< div className="Salad ">
                    <p className="fs-6 Salad1">Salad</p>
                </div >
                )
                break;
            case ("salad"):
                ingredients = (< div className="Bacon ">
                    <p className="fs-6">Bacon</p>
                </div >
                )
                break;
            case ("bread-bottom"):
                ingredients = (<div className="BreadBottom">
                    <p className="BreadBottom1">BreadBottom</p>
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