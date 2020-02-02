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
        
    // console.log(props)
    // function selectCard(e) {
    //     setSelectedCard(e.target.key)
    // }

    function selectCard(e){
        if (selectedCard === false){
            console.log(e.target.id)

        props.clickMethod({objectType: props.choiceData.objectType, 
            objectData: props.choiceData.objectData});
            setSelectedCard(true);

        } else {
            setSelectedCard(false);

        }
    }

    function doNothing(){
        console.log("Selecting This Room Does Nothing Here")
    }

    return (
        <article className={"card " + (selectedCard? 'selected-card ' : '')}
            onClick={selectCard}
            // style={cardStyle}
            // onClick={handleChange}
            // onHover={handleHover}
             >
                <h2>{props.choiceData.objectType}</h2> 
                <Room 
                clickMethod={doNothing}
                hoverMethod={doNothing}
                className='card-content'
                room={card}
                position={props.choiceData.objectPosition}
                />

            </article>
        )

};

export default ChoiceCard;