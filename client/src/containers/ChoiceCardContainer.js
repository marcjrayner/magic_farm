import React, { Component } from 'react';
import ChoiceCard from '../components/ChoiceCard.js';

class ChoiceCardContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedCard: null,
            choiceType: 'Room',
            cardArray: [
                {
                cellArray: [
                    [1, 1], [2, 1],
                    [1, 2], [2, 2]
                ],
                roomMaxWidth: 2,
                roomMaxHeight: 2,
                roomStatus: 'room',
                roomType: 'red',
                roomContents: [],
                roomName: '2x2 Square'
            },

                {
                    cellArray: [
                        [1, 1], [2, 1],
                        [3, 1], [4, 1]
                    ],
                    roomMaxWidth: 4,
                    roomMaxHeight: 1,
                    roomStatus: 'room',
                    roomType: 'red',
                    roomContents: [],
                    roomName: '4x1 Rectangle'
                }
        ]
            
        }
        this.handleCardSelected = this.handleCardSelected.bind(this);
    }

    handleCardSelected(cardID) {
        this.setState({selectedCard: cardID});
    } 

    

    render() {
        return (
            <div id="choice-card-container">

                {this.state.cardArray.map((card, index) => {

                    return (
                        <ChoiceCard
                            key={index}
                            onCardSelected={this.handleCardSelected}
                            type={this.state.choiceType}
                            choiceData={card}
                        />
                    )

                })}
                
                
                {/* <h2>Choice Card Container</h2> */}
                {/* <ChoiceCard
                key={0}
                onCardSelected={this.handleCardSelected}
                type={this.state.choiceType} /> */}
            </div>
        )
    }
}

export default ChoiceCardContainer;