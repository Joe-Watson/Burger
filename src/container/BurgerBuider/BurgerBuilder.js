import React, { Component } from "react";
import Aux from "../../Hoc/jux";
import Buger from "../../components/Layout/Burger/Burger";
import BuildControls from "../../components/Layout/Burger/BuildControls/BuildControls";
import Model from "../../components/Layout/UI/Model/Model";
import Summary from "../../components/Layout/Burger/OrderSummary/OrderSummary";



const INGRDIENT_PRIZE = {
    salad: 30,
    bacon: 40,
    cheese: 70,
    meat: 80

}

class BugerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { ...}
    // }
    state = {
        ingrdients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0

        },
        totalPrize: 100,
        purchasable: false
    }
    udatePurchaseState(ingrdients) {
        const sum = Object.keys(ingrdients)
            .map((isKey) => { return ingrdients[isKey] })
            .reduce((sum, el) => { return sum + el }, 0);

        this.setState({ purchasable: sum > 0 })

    }
    addIngrdientsHander = (type) => {
        ///First I need to know old ingrdient
        const oldCount = this.state.ingrdients[type]
        const updatedCount = oldCount + 1
        ///Update all new ingrdient///
        const updatedIngrdients = {
            ...this.state.ingrdients
        }
        updatedIngrdients[type] = updatedCount
        const prizeAddition = INGRDIENT_PRIZE[type]
        const oldPrize = this.state.totalPrize
        const newPrize = oldPrize + prizeAddition
        this.setState({ totalPrize: newPrize, ingrdients: updatedIngrdients })
        this.udatePurchaseState(updatedIngrdients);
    }
    removeIngrdientsHander = (type) => {
        const oldCount = this.state.ingrdients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngrdients = {
            ...this.state.ingrdients
        }
        updatedIngrdients[type] = updatedCount;
        const prizeAddition = INGRDIENT_PRIZE[type]
        const oldPrize = this.state.totalPrize;
        const newPrize = oldPrize - prizeAddition;
        this.setState({ totalPrize: newPrize, ingrdients: updatedIngrdients })
        this.udatePurchaseState(updatedIngrdients);
    }
    render() {
        const disableInfro = {
            ...this.state.ingrdients
        };
        for (let key in disableInfro) {
            disableInfro[key] = disableInfro[key] <= 0
        }
        return (
            <Aux>
                <Model>
                    <Summary ingrdients={this.state.ingrdients} />
                </Model>
                <Buger ingrdients={this.state.ingrdients} />
                <BuildControls
                    ingrdientAdded={this.addIngrdientsHander}
                    ingrdientRemoved={this.removeIngrdientsHander}
                    disabled={disableInfro}
                    prize={this.state.totalPrize}
                    purchasable={this.state.purchasable} />
            </Aux>
        )
    }
}
export default BugerBuilder