import React, {Component} from 'react';

const BlankGrid = (props) => {

    createBlankGrid(props.width, props.height) {

        let x = width;
        let y = height;
        let area = x * y;
        const blankGrid = [];

        // Loop through the total number of cells
        for (var i = 0; i <= area; i++) {

            // For every x row in the grid, loop through
            for (var j = 0; j <= x; j++) {

                for (var k = 0; k <= y; k++) {

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
        }

            return blankGrid;

        }

}


export default BlankGrid;