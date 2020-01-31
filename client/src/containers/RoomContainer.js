import React,{useState} from 'react';
import Cell from '../components/Cell';

const RoomContainer = ({ grid }) => {

    const [boardData, setBoardData] = useState(
        {
            'boardData': {
                'width': 20,
                'height': 10
            }
        }
    );

    // const cells = grid.map((cell, index) => {
    //     return (
    //         <Cell key={index} cell={cell} />
    //     )

    // });

    return (
        <>
            <GameBoard boardData={this.state.boardData} />
        </>
    )
}

export default RoomContainer;