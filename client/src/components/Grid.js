import React from 'react';
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

    const gridStyle = {
        display: 'grid',
        gridGap: '1px',
        gridTemplateRows: 'repeat(' + props.height + ', 20px)',
        gridTemplateColumns: 'repeat(' + props.width + ', 20px)'
    };

    return (
        <>

            <main
            style={gridStyle}

            className={'grid ' + props.gridName}>

                {cells}

            </main>

        </>
    )

}


export default Grid;