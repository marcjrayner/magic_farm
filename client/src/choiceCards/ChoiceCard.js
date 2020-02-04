import React from 'react';
import Room from '../rooms/Room';

const ChoiceCard = (props) => {


    const card = props.choiceData.objectData;

    function selectCard(e){
        
            if (props.choiceData.id === props.selectedCard) {
                props.clearSelection();
                props.clickMethod(props.choiceData);
                console.log(`because already selected, unselected: ` + props.choiceData.id)
            
            } else {
                console.log(`choice selection made: ` + props.choiceData.id)

            props.clickMethod(props.choiceData);}

    }

    function doNothing(){
        console.log("Selecting This Room Does Nothing Here")
    }

    return (
        <article className={"card "
        + (props.selectedCard === props.choiceData.id ? 'selected-card ' : '')}
            onClick={selectCard} >
                
                <h2>{props.choiceData.objectType}</h2> 
                <Room 
                placedStatus={props.choiceData.placedStatus}
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