import React from 'react';
import Grid from './Grid';
import Cell from './Cell';

const Room = (props) => {

    const room = props.room;
    // const position = props.position;
    const translateX = props.position[0];
    const translateY = props.position[1];
    // const x = room.roomMaxWidth;
    // const y = room.roomMaxHeight;
    // // const room = props.room;
    // const position = props.position;

    const roomRender = room.cellArray.map( (roomCell, index) => {
        
        const position = [];
        const x = roomCell[0] + (translateX - 1);
        const y = roomCell[1] + (translateY - 1);
        position.push(x);
        position.push(y);
        const name = ('' + room.roomType + ' ' + room.roomStatus +'-'+position)

        const cell = {
            'empty': true,
            'position': position,
            'affiliation': name
        };

        return (
        <Cell key={index} cell={cell} />
        )
    });

    const roomStyle = {
        display: 'grid',
        gridGap: '1px',
        gridTemplateRows: 'repeat(' + room.roomMaxHeight + ', 20px)',
        gridTemplateColumns: 'repeat(' + room.roomMaxWidth + ', 20px)',
        gridRowStart: translateX,
        gridColumnStart: translateY
    };

    return(

        <>
        <aside className="room"
        style={roomStyle}
        id={"["+translateX+","+translateY+"]"} >
            {roomRender}
        </aside>
        </>
        
    
    );
}

export default Room;