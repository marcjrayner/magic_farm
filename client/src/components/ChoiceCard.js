import React, {useState} from 'react';
import Grid from './Grid';
import Room from './Room';

const ChoiceCard = (props) => {

    const [room, setRoom] = useState(props.choiceData);
    //     {
    //         cellArray: [
    //                 [1,1],[2,1],
    //                 [1,2],[2,2]
    //             ],
    //             roomMaxWidth: 2,
    //             roomMaxHeight: 2,
    //             roomStatus: 'room',
    //             roomType: 'red',
    //             roomContents: [],
    //             roomName: '2x2 Square'
    //         });
            
    function handleChange(e) {
    props.onCardSelected(e.target.key);
    // console.log(e.target.key);
    }

    function handleHover(e){
        
    }
    
        return (
            <article
            className="card"
            onClick={handleChange}
            onHover={handleHover} >
                
        <h2>{room.roomName}</h2>
                <Grid
                width={room.roomMaxWidth}
                height={room.roomMaxHeight}
                gridName="choice-room-container" >
                    <Room room={room} />
                </Grid> 
            
            </article>
        )

}

export default ChoiceCard;