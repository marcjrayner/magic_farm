import React, {useState} from 'react';
import Room from '../components/Room';

const ChoiceCard = (props) => {

    const [selectedCard, setSelectedCard] = useState(false);

    const card = props.choiceData.objectData;
    //  This is what a room data looks like  
    // {
    //     objectType: 'Room',
    //     objectPosition: null,
    //     objectData: {}}
    // }
        
    console.log(props)
    function selectCard(e) {
        setSelectedCard(e.target.key)
    }

    return (
        <article className={"card " + (selectedCard? 'selected-card ' : '')}
            onClick={selectCard}
            // onClick={handleChange}
            // onHover={handleHover}
             >

                <Room room={card}
                position={props.choiceData.objectPosition}
                />

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