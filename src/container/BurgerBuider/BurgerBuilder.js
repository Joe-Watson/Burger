import React, { Component } from "react";
import Aux from "../../Hoc/jux";
import Buger from "../../components/Layout/Burger/Burger";
import BuildControls from "../../components/Layout/Burger/BuildControls/BuildControls";
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
            meet: 0

        }
    }
    render() {
        return (
            <Aux>
                <Buger ingrdients={this.state.ingrdients} />
                <BuildControls />
                <p>label</p>
            </Aux>
        )
    }
}
export default BugerBuilder