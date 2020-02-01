import React, {useState} from 'react';
import Grid from './Grid';
import Room from './Room';

const ChoiceCard = (props) => {

    //  This is what a room data looks like  
    // {
    //     objectType: 'Room',
    //     objectPosition: null,
    //     objectData: {}}
    // }
        
    return (
        <article className="card"
            // onClick={handleChange}
            // onHover={handleHover}
             >
            
            {(() => {
                switch (props.type) {
                    case 'Room':
                        const room = props.choiceData;
                        return (
                            <>
                            <h2> {room.roomName} </h2>
                            <Room room={room} />
                            </>);
                    case 'Animal': return null
                }
            })}
    

            </article>
        )

};

export default ChoiceCard;

{/* <h2>{room.roomName}</h2>
    <Grid

        gridData={this.state.gridData}
        objectsArray={this.state.objectsArray}
        id="game-board-grid"
        width={room.roomMaxWidth}
        height={room.roomMaxHeight}
        room={room}
        gridName={"choice-" + props.choiceType + "-container"}
    >
        <Room room={room} />
    </Grid>  */}