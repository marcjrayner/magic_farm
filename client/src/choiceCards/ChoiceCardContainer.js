import React, {Component} from 'react';
import ChoiceCard from './ChoiceCard';

class ChoiceCardContainer extends Component {

    constructor(props){
        super(props);
        this.state ={
            roomTypes: [{
                cellArray: [[1,1]],
                roomMaxWidth: 1,
                roomMaxHeight: 1,
                roomArea: 1,
                roomName: 'ONExONE'},

                {
                    cellArray: [[1, 1], [1, 2], [2, 1], [2, 2]],
                    roomMaxWidth: 2,
                    roomMaxHeight: 2,
                    roomArea: 4,
                    roomName: 'TWOxTWO'
                },

                {
                    cellArray: [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3], [3, 1], [3, 2], [3, 3]],
                    roomMaxWidth: 3,
                    roomMaxHeight: 3,
                    roomArea: 9,
                    roomName: 'THREExTHREE'
                },

                { cellArray: [[1,1],[2,1]],
                    roomMaxWidth: 2,
                    roomMaxHeight: 1,
                    roomArea: 2,
                    roomName: 'ONExTWO'
                },

                {
                    cellArray: [[1, 1], [2, 1], [3, 1]],
                    roomMaxWidth: 3,
                    roomMaxHeight: 1,
                    roomArea: 3,
                    roomName: 'ONExTHREE'
                },

                {
                    cellArray: [[1, 1], [1, 2]],
                    roomMaxWidth: 1,
                    roomMaxHeight: 2,
                    roomArea: 2,
                    roomName: 'TWOxONE'
                },

                {
                    cellArray: [[1, 1], [1, 2], [1,3]],
                    roomMaxWidth: 1,
                    roomMaxHeight: 3,
                    roomArea: 3,
                    roomName: 'THREExONE'
                }
            
            ],
            buttonVisible: true  
        }
        this.makeCardSelection = this.makeCardSelection.bind(this);
        this.generateRoomChoices = this.generateRoomChoices.bind(this);
    }

    /// This is the new develop branch 
    generateRoomChoices(x){
        const roomTypes = this.state.roomTypes;
        var length = roomTypes.length;
        const choices = []
        for (var i = 0; i < x; i++){
            var index = (Math.random() * length + 1);
            choices.push(roomTypes[index]);
        }
        return choices;
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
                <>

                <section id="choice-card-container">
                        <button id="generate-room-choice" className={this.state.buttonVisible ? '' : 'hidden '} onClick={this.generateRoomChoices}>Get Room Choices</button>
                    {cards} 
                </section>
                </>
            )
        }
    }

export default ChoiceCardContainer;