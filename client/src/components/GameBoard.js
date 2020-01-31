import React from 'react';
// import Cell from './Cell';
import Grid from './Grid';

const GameBoard = ({grid}) => {

    return (
            <>
                <h2>Game Board</h2>
                
            <Grid width="16" height="8" gridName="gameboard-container" />

            </>
        );
}

export default GameBoard;