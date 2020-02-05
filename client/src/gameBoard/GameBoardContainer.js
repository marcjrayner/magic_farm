import React, {useState} from 'react'; 
import Grid from '../components/Grid';

const GameBoardContainer = (props) => {
    
    const [busyCells, setBusyCells] = useState([]);

    function updateBusyCells(cellArray){
        setBusyCells(cellArray)
    }

    function cellClickLogic(cellAnimalOrRoomObject) {

        // Are we placing something from the mouseObject?
        if (props.mouseObject !== null) {
            
            // What is the object held by the mouse?
            switch (props.mouseObject.objectType) {

            // if room, try to place room.
                case "room":

            // are all the spaces the room will occupy empty?

            // if placement is valid, place the room.
                    props.placeRoom(props.mouseObject, props.hoverLocation);
            break;
            // clear the mouseObject

            // props.clearMouseObject()
            // force user information to update.
                default:
                    return null;
            }
        } else if (props.mouseObject === null)
            {
                // check what you are clicking
            // const cellRef = props.hoverLocation;
            
            var clickedObject;

            // busyCells.forEach((cells) => {
            //     if (cells.position === cellRef){
            //         clickedObject = cells.affiliation;
            //         return true;
            //     } else {
            //     return null;}
            // })

            // if it's an array with multiple positions, its a room
            if (cellAnimalOrRoomObject.position.length > 1){
                // its a room.
            }

            if (clickedObject !== null){
                props.clickMethod(cellAnimalOrRoomObject)
            }

            else {
                console.log("you have nothing to place, click on a choice" + (props.hoverLocation))
            }
    
            } 
            // console.log('this is the position you have clicked ' + cellObject.position);
            // console.log('this cell is affiliated to ' + cellObject.affiliation);
            // console.log('if I am empty I will say true: ' + cellObject.position);

        }

    return (
        <section id="game-board-container">
            <h2>Game Board Container</h2>
            
            <Grid
                hoverLocation={props.hoverLocation}
                mouseObject={props.mouseObject}
                gridData={props.gameBoardData.gridData}
                objectsArray={props.gameBoardData.objectsArray}
                clickMethod={cellClickLogic}
                hoverMethod={props.hoverMethod}
                updateBusyCells={updateBusyCells}
                id="game-board-grid"
                />
        </section>
    )
};

export default GameBoardContainer;
