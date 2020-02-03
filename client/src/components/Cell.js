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

    function handleClick(e){
        // console.log(`choice selection made: ` + props.cell.position)
        props.clickMethod(props.cell);
    }

    function handleHover(e){
        // const cellRef = [x, y];
        // console.log(props.cell.position)
        setHover(true);
        props.hoverMethod(props.cell.position);
    }

    function handleHoverOff(){
        setHover(false);
    }

    // Returns a cell
        return (
       
            <article
                onClick={handleClick}
                onMouseOver={handleHover}
                onMouseOut={handleHoverOff}
                style={cellStyle}
                className={`cell `
                + (props.cell.empty ? `empty ` : `full `)
                + (props.cell.affiliation !== null ? (props.cell.affiliation +' ') : 'none')
                + ( (hover && props.cell.affiliation === null) ? '.cell-hover ' : '') }
         />
        )
}

export default Cell;