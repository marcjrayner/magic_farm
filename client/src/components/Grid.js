import React from 'react';
import Cell from './Cell';
import Room from './Room';

const Grid = (props) => {

    const grid = props.gridData;

    console.log(grid);
    const objects = props.objectsArray.map((object, index) => {

        switch(object.objectType){
            case "Room": return(
                <Room
                key={index}
                room={object.objectData}
                position={object.objectPosition}
                clickMethod={props.clickMethod}
                hoverMethod={props.hoverMethod}
                />
            ); 
            case "Animal": return(
                <p key={index}>this will be an animal</p>
            );
            default: return null;
        }

    });

    // sets x and y
    const x = grid.width;
    const y = grid.height;
    const blankGrid = [];

    // For every x row in the grid, loop through
    for (var j = 1; j <= x; j++) {

        // For every y column in the grid, loop through
        for (var k = 1; k <= y; k++) {
            
            // For each cell, create a blank position array
            const position = [];

            // Add co-ordinates to array
            position.push(j);
            position.push(k);

            // Create an empty cell
            const cell = {
                'empty': true,
                'position': position,
                'affiliation': null,
                'hover': false
            };
            
            blankGrid.push(cell);
        }
    }

    const blankCells = blankGrid.map((cell, index) => {
        
        return (
            <Cell key={index} cell={cell} clickMethod={props.clickMethod}
                hoverMethod={props.hoverMethod}/>
        )

    });

    const gridStyle = {
        display: 'grid',
        gridGap: '1px',
        gridTemplateRows: 'repeat(' + y + ', ' + grid.cellSize +'px)',
        gridTemplateColumns: 'repeat(' + x + ', ' + grid.cellSize +'px)'
    };

    return (
        <>
        {/* Create a Grid Container */}
        <main style={gridStyle} className={'grid ' + props.id}>

        {/* Load in the Objects of the Grid    */}
            {objects}
            
        {/* Load in the Blank Cells Of The Grid */}
            {blankCells}

        </main>
        </>
    )

}

export default Grid;