import React, {Component} from 'react';
import GameBoardContainer from '../gameBoard/GameBoardContainer';
import ChoiceCardContainer from '../choiceCards/ChoiceCardContainer';
import InventoryContainer from '../inventory/InventoryContainer';

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
                gridData: {
                    width: 20,
                    height: 10,
                    cellSize: 35
                },
                
                objectsArray: 
                [
                //     {   id: 'GBR1',
                //         objectType: 'room',
                //         objectPosition: [1, 1],
                //         objectData: {
                //             cellArray: [
                //                 [1, 1], [2, 1],
                //                 [1, 2], [2, 2]
                //             ],
                //             roomMaxWidth: 2,
                //             roomMaxHeight: 2,
                //             roomStatus: 'room',
                //             roomType: 'red',
                //             roomContents: [],
                //             roomName: '2x2 Square'
                //         }
                //     },

                //     {
                //         id: 'GBR2',
                //         objectType: 'room',
                //         objectPosition: [10, 5],
                //         objectData: {
                //             cellArray: [
                //                 [1, 1], [2, 1],
                //                 [3, 1], [4, 1]
                //             ],
                //             roomMaxWidth: 4,
                //             roomMaxHeight: 1,
                //             roomStatus: 'room',
                //             roomType: 'red',
                //             roomContents: [],
                //             roomName: '4x1 Rectangle'
                //         }
                //     }
                ]
            },
            choiceContainerData: {
                choiceType: 'room',
                cardArray: [
                    {   id: 'CC1',
                        objectType: 'room',
                        objectPosition: null,
                        objectData: {
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
                        }
                    },
                    {   id: 'CC2',
                        objectType: 'room',
                        objectPosition: null,
                        objectData: {
                        placedStatus: null,
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
                    }}
                ]

            },
            userInventoryData: {
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
                roomContents: [],
                roomName: room.objectData.roomName
            }
        }
        newArray.push(newRoom);
        this.setState({gameBoardData:{gridData: gridData, objectsArray: newArray}});
        this.setState({mouseObject: null});
        this.setState({selectedCardID: null});
        this.setState({selectedOnChoiceCardContainer: null});
        this.setState({choiceContainerData: {
            choiceType: 'room',
            cardArray: [
                {
                    id: 'BB1',
                    objectType: 'room',
                    objectPosition: null,
                    objectData: {
                        cellArray: [
                            [2, 1], [1, 2],
                            [2, 2], [3,2], [2, 3]
                        ],
                        roomMaxWidth: 3,
                        roomMaxHeight: 3,
                        roomStatus: 'room',
                        roomType: 'red',
                        roomContents: [],
                        roomName: '3x3 Cross'
                    }
                },
                {
                    id: 'BB2',
                    objectType: 'room',
                    objectPosition: null,
                    objectData: {
                        placedStatus: null,
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
                }
            ]

        }})
    }

    render() {
        return(
            <>  
                <InventoryContainer
                    userInventoryData={this.state.userInventoryData}
                    gameBoard={this.state.gameBoardData.gridData}
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
                    clearSelection={this.clearCardChoice} />
        
            </>

        )
    }
}

export default MainBox;