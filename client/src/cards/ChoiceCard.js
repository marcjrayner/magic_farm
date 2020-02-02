import React from 'react';
import Room from '../components/Room';

const ChoiceCard = (props) => {


    const card = props.choiceData.objectData;
    //  This is what a room data looks like  
    // {
    //     objectType: 'Room',
    //     objectPosition: null,
    //     objectData: {}}
    // }
        
    // console.log(props)
    // function selectCard(e) {
    //     setSelectedCard(e.target.key)
    // }

    function selectCard(e){
       
            console.log(props.choiceData.id)
        
            props.clickMethod(props.choiceData.id);
            // setSelectedCard(!selectedCard);

    }

    function doNothing(){
        console.log("Selecting This Room Does Nothing Here")
    }

    return (
        <article className={"card " + (props.selectedCardID === props.choiceData.id ? 'selected-card ' : '') +
            ((props.selectedCardID !== props.choiceData.id && props.globalCardSelected !== null) ? 'unselected ' : '')}
            onClick={selectCard}
            // style={cardStyle}
            // onClick={handleChange}
            // onHover={handleHover}
             >
                <h2>{props.choiceData.objectType}</h2> 
                <Room 
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