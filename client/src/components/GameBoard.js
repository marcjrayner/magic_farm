import React from 'react';
import Cell from './Cell';

const GameBoard = ({grid}) => {

    const cells = grid.map((cell, index) => {
        return (

            <Cell key={index} cell={cell} />

        )

    });

    return (
            <>
                <h2>Game Board</h2>
                
                <main id="game-board" className="grid grid-length-5 grid-height-2">
                    
                     {cells}
            
                </main>

            </>
        )
}

export default GameBoard;