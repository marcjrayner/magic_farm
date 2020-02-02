import React from 'react';
import Room from '../rooms/Room';

const ChoiceCard = (props) => {


    const card = props.choiceData.objectData;
    //  This is what a room data looks like  
    // {
    //     objectType: 'Room',
    //     objectPosition: null,
    //     objectData: {}}
    // }
        
    function selectCard(e){
            console.log(`choice selection made: `+ props.choiceData.id)

            if (props.choiceData.id === props.selectedCardID) {
                props.clearSelection();
                props.clickMethod(null);
                console.log(`because already selected, unselected: ` + props.choiceData.id)
            
            } else {
        
            props.clickMethod(props.choiceData.id);}

    }

    function doNothing(){
        console.log("Selecting This Room Does Nothing Here")
    }

    return (
        <article className={"card "
        + (props.selectedCardID === props.choiceData.id ? 'selected-card ' : '')
        + ((props.selectedCardID !== props.choiceData.id && props.globalCardSelected !== null) ? 'unselected ' : '')}
            onClick={selectCard}
            // style={cardStyle}
            // onClick={handleChange}
            // onHover={handleHover}
             >
                <h2>{props.choiceData.objectType}</h2> 
                <Room 
                cellSize={props.cellSize}
                clickMethod={doNothing}
                hoverMethod={doNothing}
                className={'card-content '}
                room={card}
                position={props.choiceData.objectPosition}
                />

            </article>
        )

};

export default ChoiceCard;