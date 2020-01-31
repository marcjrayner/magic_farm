import React from 'react';

const Cell = (props) => {

    // If no position is given to a cell, returns null
    const x = props.cell.position ? props.cell.position[0] : null;
    const y = props.cell.position ? props.cell.position[1] : null;

    // Gives cell a position as an inline style
    const cellStyle ={
        gridColumnStart: x,
        gridRowStart: y,
        gridColumnEnd: x+1,
        gridRowEnd: y+1
    };

    // const handleClick = function(){
    //     if (!props.cell.empty){
    //         props.cell.empty != props.cell.empty
    //     }
    // };

    // Returns a cell
        return (
       
            <article
                // onClick={handleClick}
                style={cellStyle}
                className={`cell ` + (props.cell.empty? `empty` : `full`) 
            }
         />
        )
}

export default Cell;