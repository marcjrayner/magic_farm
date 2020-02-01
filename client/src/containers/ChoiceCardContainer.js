import React from 'react';
import ChoiceCard from '../components/ChoiceCard.js';

const ChoiceCardContainer = (props) => {


        // this.handleCardSelected = this.handleCardSelected.bind(this);

    // handleCardSelected(cardID) {
    //     this.setState({selectedCard: cardID});
    // } 

    const cards = props.choiceCardData.cardArray.map((card, index) => {

        return (
            <ChoiceCard
                key={index}
                value={index}
                // onCardSelected={this.handleCardSelected}
                type={props.choiceType}
                choiceData={card}
            />
        )

    });

        return (
            // The parent element for the choice cards, and a map of the array 
            // to populate it with cards
            <div id="choice-card-container">
                {cards} 
            </div>
        )
    }

export default ChoiceCardContainer;