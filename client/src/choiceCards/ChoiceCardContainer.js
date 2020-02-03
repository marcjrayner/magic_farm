import React, {Component} from 'react';
import ChoiceCard from './ChoiceCard';

class ChoiceCardContainer extends Component {

    constructor(props){
        super(props);
        this.state = {};
        this.makeCardSelection = this.makeCardSelection.bind(this);
    }

    makeCardSelection(card){
        this.props.clickMethod(card.id, this.props.choiceCardData.choiceType, card.objectData);
    }

    render() {

        const cards = this.props.choiceCardData.cardArray.map((card, index) => {
            return (
                <ChoiceCard
                    // onClick={handleCardSelection}
                    cellSize={this.props.cellSize}
                    key={card.id}
                    value={card.id}
                    type={this.props.choiceType}
                    choiceData={card}
                    clickMethod={this.makeCardSelection}
                    hoverMethod={this.props.hoverMethod}
                    selectedCard={this.props.selectedCard}
                    clearSelection={this.props.clearSelection}
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
    }

export default ChoiceCardContainer;