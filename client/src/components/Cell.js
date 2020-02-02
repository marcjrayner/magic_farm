import React, {useState} from 'react';

const Cell = (props) => {

    const [hover, setHover] = useState(false);

    // If no position is given to a cell, returns null
    const x = props.cell.position ? props.cell.position[0] : null;
    const y = props.cell.position ? props.cell.position[1] : null;

    // Gives cell a position as an inline style
    var cellStyle ={
        gridColumnStart: x,
        gridRowStart: y,
        gridColumnEnd: x+1,
        gridRowEnd: y+1,
        // opacity: ( hover? '0.2' : '1')
    };

    // const handleClick = function(){
    //     if (!props.cell.empty){
    //         props.cell.empty != props.cell.empty
    //     }
    // };
    // function handleClick(e){
    //     const cellRef=props.cell.position;
    //     console.log(cellRef);
    //     // setHover(true);
    // }

    // function handleHover(){
    //     // const cellRef = [x, y];
    //     // console.log(props.cell.position)
    //     setHover(true);
    // }

    // function handleHoverOff(){
    //     setHover(false);
    // }

    // Returns a cell
        return (
       
            <article
                onClick={props.clickMethod}
                // onMouseOver={handleHover}
                // onMouseOut={handleHoverOff}
                style={cellStyle}
                className={`cell `
                + (props.cell.empty ? `empty ` : ` full `)
                + (props.cell.affiliation !== null ? (props.cell.affiliation +' ') : 'none')
                + ( (props.cell.hover && props.cell.affiliation === null) ? '.cell-hover ' : '') }
         />
        )
}

export default Cell;