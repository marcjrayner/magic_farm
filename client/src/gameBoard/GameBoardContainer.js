import React from 'react'; 
import Grid from '../components/Grid';

const GameBoardContainer = (props) => {
    
    return (
        <>
            <h2>Game Board Container</h2>
            
            <Grid
                gridData={props.gameBoardData.gridData}
                objectsArray={props.gameBoardData.objectsArray}
                clickMethod={props.clickMethod}
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
