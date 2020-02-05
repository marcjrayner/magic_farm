import React, {Component} from 'react';
import Cell from '../components/Cell';

class Room extends Component {

        constructor(props){
            super(props);
            this.state = {
                selectedRoom: null
            };
            this.makeCellClickWholeRoom = this.makeCellClickWholeRoom.bind(this);
            this.hoverRelativePosition = this.hoverRelativePosition.bind(this);
        };

    makeCellClickWholeRoom = function (cellObject) {

        if (this.state.selectedRoom === null) {
            
            this.setState(
                {selectedRoom: true}
         );

         

            var roomClickedObject = {
                'position': [this.props.room.cellArray],
                'type': 'room',
                'hover-position': this.props.hoverPosition,
                'ref': this.props.key
            };

            console.log(roomClickedObject);

            this.props.clickMethod( roomClickedObject)
        }

        return null;
    };

    hoverRelativePosition = function (cellPosition){
        // let currentPosition = [];
        // if (cellPosition)
        // if (this.props.position = null){
        //     currentPosition = [1,1]
        // } else {
        //     currentPosition = this.props.position;
        // }
        // //need to add relative co-ordinates
        // let newPosition = [
        //     (currentPsition[0]),
        //     (this.props.position[1])]
        // this.props.hoverMethod(newPosition);
    }

    render() {

    const room = this.props.room;    
    let initialPosition = [1,1]
        if (this.props.position !== null){ initialPosition = this.props.position;} 
    const translateY = initialPosition[0];
    const translateX = initialPosition[1];

    // console.log(this.props.room.roomName + props:' + this.props.room.cellArray);
    // console.log(this.props.room.cellArray)
    const roomRender = this.props.room.cellArray.map( (roomCell, index) => {
        
        const position = [roomCell[0], roomCell[1]];
        const name = ('' + this.props.room.roomType + ' ' + this.props.room.roomStatus + '-' + position)

        const cell = {
            'empty': true,
            'position': position,
            'affiliation': name,
            'hover': false
        };

        return (
            <Cell key={index} cell={cell} clickMethod={this.makeCellClickWholeRoom}
                hoverMethod={this.hoverRelativePosition}
                />
        )
    });

    const roomStyle = {
        display: 'grid',
        gridGap: '1px',
        gridTemplateRows: 'repeat(' + room.roomMaxHeight + ', '+this.props.cellSize+'px)',
        gridTemplateColumns: 'repeat(' + room.roomMaxWidth + ',' + this.props.cellSize +'px)',
        gridRowStart: translateX,
        gridColumnStart: translateY,
        gridRowEnd: translateX + room.roomMaxHeight,
        gridColumnEnd: translateY + room.roomMaxWidth
    };

    return(

        <>
        <aside className={"room "
        + this.props.placedStatus}
        style={roomStyle}
        id={"["+translateX+","+translateY+"]"} >
            {roomRender}
        </aside>
        </>
        
    )}
}

export default Room;