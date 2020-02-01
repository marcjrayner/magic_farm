import React from 'react';

const Cell = (props) => {

    const x = props.cell.position ? props.cell.position[0] : null;
    const y = props.cell.position ? props.cell.position[1] : null;

    const cellStyle =
    {
        gridColumnStart: x,
        gridRowStart: y
    };

        return (
       
            <article
                style={cellStyle}
                className={`cell ` + (props.cell.empty? `empty` : `full`) 
                // + ` grid-column-`+ x + ` grid-row-`+ y
            }
         />
        )
}

export default Cell;