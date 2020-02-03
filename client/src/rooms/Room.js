import React, {Component} from 'react';
import Cell from '../components/Cell';

class Room extends Component {

    // So far there are two types of room creation; One on a grid, one on a card.
    // Rooms that are created on a card should appear as a default [1,1]
    // Rooms thare are created as objects on the gameBoard can be given a custom objectPosition e.g. [5, 8]

        constructor(props){
            super(props);
            this.state = {
                selectedRoom: null
            };
            this.makeCellClickWholeRoom = this.makeCellClickWholeRoom.bind(this);
            this.hoverRelativePosition = this.hoverRelativePosition.bind(this);
        };

    // console.log(props);
    
    makeCellClickWholeRoom = function (e) {

        if (!this.state.selectedRoom) {
            this.setState({selectedRoom: true});

            this.props.clickMethod({
                objectType: 'Room',
                objectData: this.props
            })
        }

        return null;
    };

    hoverRelativePosition = function (cellPosition){

        //need to add relative co-ordinates
        let newPosition = [
            (this.props.position[0]),
            (this.props.position[1])]
        this.props.hoverMethod(newPosition);
    }

    // doNothing = function (x){
    //     return null;
    // }

    render() {

    const room = this.props.room;    
    let initialPosition = []
        if (this.props.position !== null){ initialPosition = this.props.position;}
    else { initialPosition = [1,1]; }   
    const translateY = initialPosition[0];
    const translateX = initialPosition[1];

    const roomRender = room.cellArray.map( (roomCell, index) => {
        
        const position = [];
        const x = roomCell[0];
        const y = roomCell[1];
        position.push(x);
        position.push(y);
        const name = ('' + room.roomType + ' ' + room.roomStatus +'-'+position)

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
        gridRowEnd: translateX + room.roomMaxWidth,
        gridColumnEnd: translateY + room.roomMaxHeight
    };

    return(

        <>
        <aside className="room"
        style={roomStyle}
        id={"["+translateX+","+translateY+"]"} >
            {roomRender}
        </aside>
        </>
        
    )}
}

export default Room;