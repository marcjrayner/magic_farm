import React from 'react';
// import Cell from './Cell';
import Grid from './Grid';

const GameBoard = (props) => {

    return (
            <>
                <h2>Game Board</h2>
                
            <Grid
                width={props.boardData.width}
                height={props.boardData.height}
                gridName="gameboard-container" />

            </>
        );
}

export default GameBoard;