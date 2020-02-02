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

    // function handleClick(){
    //     console.log(`choice selection made: ` + props.choiceData.id)

    // if (props.choiceData.id === props.selectedCardID) {
    //     props.clearSelection();
    //     props.clickMethod(null);
    //     console.log(`because already selected, unselected: ` + props.choiceData.id)

    // } else {

    //     props.clickMethod(props.choiceData.id);
    // }

    function handleHover(e){
        // const cellRef = [x, y];
        console.log(props.cell.position)
        setHover(true);
        props.hoverMethod(props.cell.position);
    }

    function handleHoverOff(){
        setHover(false);
    }

    // Returns a cell
        return (
       
            <article
                // onClick={handleClick}
                onMouseOver={handleHover}
                onMouseOut={handleHoverOff}
                style={cellStyle}
                className={`cell `
                + (props.cell.empty ? `empty ` : ` full `)
                + (props.cell.affiliation !== null ? (props.cell.affiliation +' ') : 'none')
                + ( (hover && props.cell.affiliation === null) ? '.cell-hover ' : '') }
         />
        )
}

export default Cell;