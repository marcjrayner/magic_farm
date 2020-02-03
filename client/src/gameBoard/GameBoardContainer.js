import React, {useState} from 'react'; 
import Grid from '../components/Grid';

const GameBoardContainer = (props) => {
    
    const [busyCells, setBusyCells] = useState([]);

    function updateBusyCells(cellArray){
        setBusyCells(cellArray)
    }

    function cellClickLogic(cellAnimalOrRoomObject) {
        // console.log('this is the position you have clicked ' + cellObject.position);
        // console.log('this cell is affiliated to ' + cellObject.affiliation);
        // console.log('if I am empty I will say true: ' + cellObject.position);

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
            const cellRef = props.hoverLocation;
            
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
                props.clickMethod(clickedObject)
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
        <>
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
        </>
    )
};

export default GameBoardContainer;

// gridData: {
//     width: 20,
//         height: 10,
//             cellsize: 20
// },
// objectsArray: [
//     {
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
//     }]
