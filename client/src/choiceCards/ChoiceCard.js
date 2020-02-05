import React from 'react';
import Room from '../rooms/Room';
import Animal from '../animals/Animal';

const ChoiceCard = (props) => {


    // {
    //     "cellArray": [],
    //     "roomMaxHeight": 1,
    //     "area": 1,
    //                 "roomStatus": "room",
    //                     "roomType": "red",
    //                         "roomName": "roomOneOne",
    //                             "roomMaxWith": 1,
    //                                 "_links": { }
    // },

    const card = props.choiceData;

    function selectCard(e){
        
            if (props.id === props.selectedCard) {
                props.clearSelection();
                props.clickMethod(props.choiceData);
                console.log(`because already selected, unselected: ` + props.id)
            
            } else {
                console.log(`choice selection made: ` + props.id)

                console.log(props)
                var cardObject = {
                    id: props.id,
                    choiceType:'room',
                    objectData: props.choiceData
                }

            props.clickMethod(cardObject);}

    }

    function doNothing(){
        console.log("Selecting This Room Does Nothing Here")
    }

    const cardData = () => {
        if (props.dataType == "room") {

            return(
            <Room
                placedStatus={props.choiceData.placedStatus}
                cellSize={props.cellSize}
                clickMethod={doNothing}
                hoverMethod={doNothing}
                className={'card-content '}
                room={card}
                position={{ objectPosition: [1, 1] }}
            />)

        }

        if (props.dataType === "animal") {

            return( <Animal
                placedStatus={props.choiceData.placedStatus}
                cellSize={props.cellSize}
                clickMethod={doNothing}
                hoverMethod={doNothing}
                className={'card-content '}
                animal={card}
                position={{ objectPosition: [1, 1] }} />
                )
        }
    }

    return (

        <article className={"card "
        + (props.selectedCard === props.id ? 'selected-card ' : '')}
            onClick={selectCard} >
                
            <h2>{props.choiceData.objectType}</h2> 
            
            {cardData()}

            </article>
        )

};

export default ChoiceCard;