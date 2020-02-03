import React from 'react'; 
import Grid from '../components/Grid';

const GameBoardContainer = (props) => {
    
    function cellClickLogic(cellObject) {
        // console.log('this is the position you have clicked ' + cellObject.position);
        // console.log('this cell is affiliated to ' + cellObject.affiliation);
        // console.log('if I am empty I will say true: ' + cellObject.position);

        // Are we placing something from the mouseObject?
        if (props.mouseObject !== null) {
            
            // What is the object held by the mouse?
            switch (props.mouseObject.objectType) {

            // if room, try to place room.
                case 'Room':

            // are all the spaces the room will occupy empty?
            // if placement is valid, place the room.
            console.log(props.mouseObject);
            console.log(cellObject);
            props.placeRoom(props.mouseObject, cellObject.objectData.position);
            // clear the mouseObject

            // props.clearMouseObject()
            // force user information to update.
                default:
                    return null;
            }
        } else if (props.mouseObject === null)
            {
            console.log("you have nothing to place, click on a choice")

           
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
//         objectType: 'Room',
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
