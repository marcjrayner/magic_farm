import React, {Component} from 'react';
import ChoiceCard from './ChoiceCard';

class ChoiceCardContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedCardID: null
        };
        this.makeCardSelection = this.makeCardSelection.bind(this);
    }

    makeCardSelection(id){
       
        this.setState( {selectedCardID: id});
        const cardIndex = this.props.choiceCardData.cardArray.findIndex((card) => {
            return card.id === id;
        });
        this.props.clickMethod({
            objectType: this.props.choiceCardData.cardArray[cardIndex].objectType,
            objectData: this.props.choiceCardData.cardArray[cardIndex].objectData
        });
    }

    render() {

        const cards = this.props.choiceCardData.cardArray.map((card, index) => {
            return (
                <ChoiceCard
                    // onClick={handleCardSelection}
                    key={card.id}
                    value={card.id}
                    type={this.props.choiceType}
                    choiceData={card}
                    clickMethod={this.makeCardSelection}
                    hoverMethod={this.props.hoverMethod}
                    globalCardSelected={this.props.globalCardSelected}
                    selectedCardID={this.state.selectedCardID}
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