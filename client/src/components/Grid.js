import React, {Component, useState} from 'react';
import Cell from './Cell';

const Grid = (props) => {

    const x = props.width;
    const y = props.height;
    // const area = x * y;
    const blankGrid = [];

            // For every x row in the grid, loop through
            for (var j = 1; j <= x; j++) {

                for (var k = 1; k <= y; k++) {
                    // For each cell, create a blank position array
                    const position = [];

                    position.push(j);
                    position.push(k);

                    const cell = {
                        'empty': true,
                        'position': position
                    };

                    blankGrid.push(cell);
                }
            }
        

    const cells = blankGrid.map((cell, index) => {
        return (

            <Cell key={index} cell={cell} />

        )

    });

    return (
        <>

            <main id={'grid ' + props.gridName} className={'grid' + ' grid-length-' + props.width + ' grid-height-' + props.height}>

                {cells}

            </main>

        </>
    )

}


export default Grid;