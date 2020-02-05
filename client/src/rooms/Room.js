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

        var roomClickedObject = {
            'position': [this.props.room.cellArray],
            'type': 'room',
            'hover-position': this.props.hoverPosition,
            'ref': this.props.id
        };

        if (this.state.selectedRoom !== true) {
            this.setState({selectedRoom: true});
        
        console.log('room clicked, passing up: '+ roomClickedObject);
        
        this.props.clickMethod(roomClickedObject)
        }

        else { this.setState({selectedRoom: false})

            console.log('room unclicked, passing up: ' + roomClickedObject);
            this.props.clickMethod(roomClickedObject);
    
        }
        return null;
    };

    hoverRelativePosition = function (cellPosition){
       
    }

    render() {

    const room = this.props.room;    
    let initialPosition = [1,1]
        if (this.props.position !== null){ initialPosition = this.props.position;} 
    const translateY = initialPosition[0];
    const translateX = initialPosition[1];
    
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
        + (this.state.selectedRoom ? 'room-selected ' : '') 
        + this.props.placedStatus}
        style={roomStyle}
        id={"["+translateX+","+translateY+"]"} >
            {roomRender}
        </aside>
        </>
        
    )}
}

export default Room;