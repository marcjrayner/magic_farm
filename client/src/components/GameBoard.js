import React, { Component } from 'react';
import Cell from './Cell';

class GameBoard extends Component {

   
        constructor(props) {
            super(props);
            this.state = {
                cell: {
                    empty: true
                }
            };
        }


    render() {
        return (
            <>
                <h2>Game Board</h2>
                 <Cell cell={this.state.cell} />
                

            

            </>
        )
    }
}

export default GameBoard;