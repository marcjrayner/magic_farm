import React from 'react';

const Cell = (props) => {

    // console.log(props.cell);
    

    const x = props.cell.position ? props.cell.position[0] : null;
    // console.log(x);
    const y = props.cell.position ? props.cell.position[1] : null;

        return (
       
            <article
                className={`cell ` + (props.cell.empty? `empty` : `full`) 
                + ` grid-column-`+ x + ` grid-row-`+ y
            }
         />
        )
}

export default Cell;