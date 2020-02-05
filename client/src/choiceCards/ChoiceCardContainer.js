import React, {Component} from 'react';
import ChoiceCard from './ChoiceCard';

class ChoiceCardContainer extends Component {

    constructor(props){
        super(props);
        this.state ={
            objects: [

                // {
                //     "cellArray": [],
                //     "roomMaxHeight": 1,
                //     "area": 1,
                //     "roomStatus": "room",
                //     "roomType": "red",
                //     "roomName": "roomOneOne",
                //     "roomMaxWith": 1,
                //     "_links": {}
                // },

            ]
        }
        this.makeCardSelection = this.makeCardSelection.bind(this);
        this.generateRoomChoices = this.generateRoomChoices.bind(this);
    }

    componentDidMount() {
        const url = 'http://localhost:8080/roomTypes';

        fetch(url)
            .then(res => res.json())
            .then(roomTypes => this.setState({ objects: roomTypes._embedded.roomTypes }))
            .catch(err => console.err());
    }
    /// This is the new develop branch 
    generateRoomChoices(x){
        const roomTypes = this.state.ob;
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

        const cards = this.state.objects.map((card, index) => {
            return (

                <ChoiceCard
                    cellSize={this.props.cellSize}
                    key={index}
                    value={index}
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
                    <section id="current-cards">
                        {cards} 
                    </section>
                </section>
                </>
            )
        }
    }

export default ChoiceCardContainer;