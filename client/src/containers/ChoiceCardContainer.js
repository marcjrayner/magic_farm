import React, { Component } from 'react';
import ChoiceCard from '../components/ChoiceCard.js';

class ChoiceCardContainer extends Component {

    render() {
        return (
            <div id="choice-card-container">
                {/* <h2>Choice Card Container</h2> */}
                <ChoiceCard />
            </div>
        )
    }
}

export default ChoiceCardContainer;