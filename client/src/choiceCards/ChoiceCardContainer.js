import React, {Component} from 'react';
import ChoiceCard from './ChoiceCard';

class ChoiceCardContainer extends Component {

    constructor(props){
        super(props);
        this.makeCardSelection = this.makeCardSelection.bind(this);
    }

    makeCardSelection(card){
        this.props.clickMethod(card.id, this.props.choiceCardData.choiceType, card.objectData);
    }

    render() {

        const cards = this.props.choiceCardData.cardArray.map((card, index) => {
            return (

                <ChoiceCard
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
                <section id="choice-card-container">
                    {cards} 
                </section>
            )
        }
    }

export default ChoiceCardContainer;