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

    makeCellClickWholeRoom = function (e) {

        if (!this.state.selectedRoom) {
            
            this.setState(
                {selectedRoom: true}
         );

            this.props.clickMethod({
                objectType: 'Room',
                objectData: this.props
            })
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

    const roomRender = room.cellArray.map( (roomCell, index) => {
        
        const position = [roomCell[0], roomCell[1]];
        const name = ('' + room.roomType + ' ' + room.roomStatus + '-' + position)

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