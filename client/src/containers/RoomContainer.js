import React from 'react';
import Cell from '../components/Cell';

const RoomContainer = ({ grid }) => {

    const cells = grid.map((cell, index) => {
        return (
            <Cell key={index} cell={cell} />
        )

    });

    return (
        <>

            <main className="grid room-card-grid grid-length-5 grid-height-5">

                {cells}

            </main>

        </>
    )
}

export default RoomContainer;