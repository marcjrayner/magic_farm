import React, { Component } from 'react';
import Cell from './Cell';

class GameBoard extends Component {

    // const gridData = [

    // ];

    // const [grid, setGrid] = useState(gridData)
    // )

    render() {
        return (
            <>
                <h2>Game Board</h2>
                <Cell cell="{empty: true}" />

            

            </>
        )
    }
}

export default GameBoard;