import React, {Component} from 'react';
import GameBoardContainer from '../gameBoard/GameBoardContainer';
import ChoiceCardContainer from '../choiceCards/ChoiceCardContainer';
import InventoryContainer from '../inventory/InventoryContainer';
import Request from '../helpers/request';
import update from 'immutability-helper';

class MainBox extends Component {

    // This is the highest level where state is stored.
    // The data currently stored here is example data
    // which should be replaced with an API Fetchdata.  
  
    constructor(props) {
        super(props);
        this.state = {
            selectedCardID: null,
            mouseObject: null,
            selectedOnGameBoardContainer: null,
            hoverGameBoardLocation: null,
            gameBoardData: {
                gridData: { width: 20, height: 10, cellSize: 35},
                objectsArray: []
            },
            choiceObjects: [],
            choiceContainerData: {
                choiceType: 'room'
            },
            userInventoryData: {
                tryAnimals: false,
                coins: 100,
                numberOfRooms: 0,
                areaCovered: 0,
                animals: 0,
                level: 1,
                score: 0,
            }
        };

        this.handleChoiceCardSelection = this.handleChoiceCardSelection.bind(this);
        this.handleHoverGameBoardLocation = this.handleHoverGameBoardLocation.bind(this);
        this.handleGameBoardSelection = this.handleGameBoardSelection.bind(this);
        this.handleMouseObject = this.handleMouseObject.bind(this);
        this.clearCardChoice = this.clearCardChoice.bind(this);
        this.handlePlaceRoom = this.handlePlaceRoom.bind(this);
        this.handleClickBoardObject = this.handleClickBoardObject.bind(this);
        this.handleLoadSomeChoices = this.handleLoadSomeChoices.bind(this);
        this.tryAnimals = this.tryAnimals.bind(this);
    }

    tryAnimals() {
        const tryAnimalsState = this.state.userInventoryData
        tryAnimalsState.tryAnimals = true;
        this.setState({ userInventoryData: tryAnimalsState });
    }

    handleLoadSomeAnimalChoices(){
         this.setState({ choiceContainerData: { choiceType: 'animal' } })
        const request = new Request();
        const choices = []

        for (var i = 0; i < 3; i++) {
            let index = (Math.floor(Math.random() * 10) + 1);
            request.get('http://localhost:8080/animalTypes/' + index)
                .then((data) => {
                    choices.push(data);
                })
        }

        this.setState({ choiceObjects: choices })
    }

    handleLoadSomeChoices(){
        const request = new Request();
        const choices = []

        for (var i = 0; i < 3; i++){
        let index = (Math.floor(Math.random() * 10)+1);
        request.get('http://localhost:8080/roomTypes/'+index)
            .then((data) => {
                choices.push(data);
            })
        }

        this.setState({choiceObjects: choices})
    }

    handleHoverGameBoardLocation(positionArray) {
        this.setState({ hoverGameBoardLocation: positionArray })
    }

    handleChoiceCardSelection(cardID, cardType, cardObject){
        // if the object selected is the same as what you've clicked
        if (cardID === this.state.selectedCardID) {
            this.setState({selectedCardID: null});
            this.setState({ mouseObject: null });
        }

        else {
            this.setState({ selectedCardID: cardID});
            this.setState(
                {mouseObject:{
                    objectData: cardObject,
                    objectType: cardType,
                    placedStatus: 'possible'                   
                    }
                }
            )
        }   
    }

    handleLoadData(){
        
    }

    handleMouseObject(){
        this.setState({mouseObject: null});
        this.setState({selectedCardID:null});
        this.setState({ selectedOnGameBoardContainer: null});
    }

    handleClickBoardObject(cellAnimalOrRoomDataObject){
        console.log(cellAnimalOrRoomDataObject.type + ' has been clicked at ' + cellAnimalOrRoomDataObject.position[0]);
    }

    handleGameBoardSelection(choice){
        this.setState({selectedObject: choice});
    }

    clearCardChoice(){
        this.setState({selectedOnChoiceCardContainer: null});
        this.setState({mouseObject: null});
    }

    handlePlaceRoom(room, newPosition){
        let gridData = { width: this.state.gameBoardData.gridData.width,
            height: this.state.gameBoardData.gridData.height,
            cellSize: this.state.gameBoardData.gridData.cellSize}
        let newArray = this.state.gameBoardData.objectsArray;
        let newRoom = {
            id: Date.now(),
            objectType: 'room',
            objectPosition: newPosition,
            objectData: { cellArray: room.objectData.cellArray,
                roomMaxWidth: room.objectData.roomMaxWidth,
                roomMaxHeight: room.objectData.roomMaxHeight,
                roomStatus: room.objectData.roomStatus,
                roomType: room.objectData.roomType,
                area: room.objectData.area,
                roomContents: [],
                roomName: room.objectData.roomName
            }           
        }
        // let postRoom = {
        //     "cellArray": [
        //         [
        //             1,
        //             1
        //         ]
        //     ],
        //     "roomMaxWidth": 1,
        //     "roomMaxHeight": 1,
        //     "area": 1,
        //     "roomStatus": "room",
        //     "roomType": "red",
        //     "roomName": "roomOneOne"
        // }
        // const request = new Request();
        // request.post('http://localhost:8080/rooms', postRoom);
        newArray.push(newRoom);
        this.setState({gameBoardData:{gridData: gridData, objectsArray: newArray}});
        
        // updateRoomTotal & Area
        const roomTotal = this.state.userInventoryData
        roomTotal.numberOfRooms += 1;
        roomTotal.areaCovered += room.objectData.area;
        const newScore = (roomTotal.areaCovered * roomTotal.numberOfRooms)
        roomTotal.score += newScore;
        this.setState({userInventoryData: roomTotal})

        // const newData = update(myData, {
        //     x: { y: { z: { $set: 7 } } },
        //     a: { b: { $push: [9] } }
        // });
        
        this.setState({mouseObject: null});
        this.setState({selectedCardID: null});
        this.setState({selectedOnChoiceCardContainer: null});
        this.setState({choiceObjects: []});
        if(this.state.userInventoryData.tryAnimals === false){
        this.handleLoadSomeChoices();
        }
        else {
            this.handleLoadSomeAnimalChoices();
            const tryAnimalsState = this.state.userInventoryData
            tryAnimalsState.tryAnimals = false;
            this.setState({ userInventoryData: tryAnimalsState })
        };
        
        }

    render() {
        return(
            <main id="app-container">  
                <InventoryContainer
                    userInventoryData={this.state.userInventoryData}
                    gameBoard={this.state.gameBoardData.gridData}
                    loadChoices={this.handleLoadSomeChoices}
                    tryAnimals={this.tryAnimals}
                />
                <GameBoardContainer

                    hoverLocation={this.state.hoverGameBoardLocation}
                    mouseObject={this.state.mouseObject}
                    clickMethod={this.handleClickBoardObject}
                    hoverMethod={this.handleHoverGameBoardLocation}
                    gameBoardData={this.state.gameBoardData}
                    placeRoom={this.handlePlaceRoom} />
                <ChoiceCardContainer
                    cellSize={this.state.gameBoardData.gridData.cellSize}
                    clickMethod={this.handleChoiceCardSelection}
                    choiceCardData={this.state.choiceContainerData}
                    selectedCard={this.state.selectedCardID}
                    clearSelection={this.clearCardChoice}
                    objects={this.state.choiceObjects}/>

                <footer id="footer"></footer> 
        
            </main>

        )
    }
}

export default MainBox;