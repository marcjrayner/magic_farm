import React, {Component} from 'react';
import GameBoardContainer from '../gameBoard/GameBoardContainer';
import ChoiceCardContainer from '../choiceCards/ChoiceCardContainer';

class MainBox extends Component {

    // This is the highest level where state is stored.
    // The data currently stored here is example data
    // which should be replaced with an API Fetchdata.  
  
    constructor(props) {
        super(props);
        this.state = {
            selectedOnChoiceCardContainer: null,
            mouseObject: null,
            selectedOnGameBoardContainer: null,
            hoverGameBoardLocation: null,
            gameBoardData: {
                gridData: {
                    width: 20,
                    height: 10,
                    cellSize: 20
                },
                
                objectsArray: [
                    {   id: 'GBR1',
                        objectType: 'Room',
                        objectPosition: [1, 1],
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

                    {
                        id: 'GBR2',
                        objectType: 'Room',
                        objectPosition: [10, 5],
                        objectData: {
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
            },
            choiceContainerData: {
                selectedCard: null,
                choiceType: 'Room',
                cardArray: [
                    {   id: 'CC1',
                        objectType: 'Room',
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
                        objectType: 'Room',
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

            }
        };

        this.handleChoiceCardSelection = this.handleChoiceCardSelection.bind(this);
        this.handleHoverGameBoardLocation = this.handleHoverGameBoardLocation.bind(this);
        this.handleGameBoardSelection = this.handleGameBoardSelection.bind(this);
        this.handleMouseObject = this.handleMouseObject.bind(this);
        this.clearCardChoice = this.clearCardChoice.bind(this);
        this.handlePlaceRoom = this.handlePlaceRoom.bind(this);
    }

    handleHoverGameBoardLocation(positionArray) {
        this.setState({ hoverGameBoardLocation: positionArray })
    }

    handleChoiceCardSelection(choice){
        // if the object selected is the same as what you've clicked
        if (choice === this.state.selectedOnChoiceCardContainer) {
            this.setState({ selectedOnChoiceCardContainer: null });
            this.setState({ mouseObject: null })
        }
        else {
            this.setState({ selectedOnChoiceCardContainer:choice.objectData});
            const type = choice.objectType;
            this.setState(
                {mouseObject:{
                    objectType: type,
                    placedStatus: 'possible',
                    objectData: choice.objectData
                    }
                }
            )
        }   
    }

    handleMouseObject(){
        this.setState({mouseObject: null});
        this.setState({selectedOnChoiceCardContainer:null});
        this.setState({ selectedOnGameBoardContainer: null});
    }

    handleGameBoardSelection(choice){
        this.setState({selectedObject: choice});
    }

    clearCardChoice(){
        this.setState({selectedOnChoiceCardContainer: null});
        this.setState({mouseObject: null});
    }

    handlePlaceRoom(room, newPosition){
        let newArray = this.state.gameBoardData.objectsArray;
        let newRoom = {
            id: Date.now(),
            objectType: 'Room',
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
        this.setState({gameBoardData: newArray})
    }

    render() {
        return(
            <>               
                <GameBoardContainer
                    hoverLocation={this.state.hoverGameBoardLocation}
                    mouseObject={this.state.mouseObject}
                    clickMethod={this.handleGameBoardSelection}
                    hoverMethod={this.handleHoverGameBoardLocation}
                    gameBoardData={this.state.gameBoardData}
                    placeRoom={this.handlePlaceRoom} />
                <ChoiceCardContainer
                    cellSize={this.state.gameBoardData.gridData.cellSize}
                    clickMethod={this.handleChoiceCardSelection}
                    choiceCardData={this.state.choiceContainerData}
                    globalCardSelected={this.state.selectedOnChoiceCardContainer}
                    clearSelection={this.clearCardChoice} />
        
            </>

        )
    }
}

export default MainBox;