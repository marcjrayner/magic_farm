import React, {useState} from 'react';
import ChoiceCard from '../cards/ChoiceCard';

const ChoiceCardContainer = (props) => {

        // this.handleCardSelected = this.handleCardSelected.bind(this);

    // handleCardSelected(cardID) {
    //     this.setState({selectedCard: cardID});
    // } 

    // function handleCardSelection(e) {
    //     setSelectedCard(e.target.value)
    //     console.log(e.target.value);
    // }

    // function handleHover(e) {
    //     // props.onCardHover()
    //     return null;
    // }


    const cards = props.choiceCardData.cardArray.map((card, index) => {
        return (
            <ChoiceCard
                // onClick={handleCardSelection}
                key={index}
                value={index}
                type={props.choiceType}
                choiceData={card}
            ></ChoiceCard>
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