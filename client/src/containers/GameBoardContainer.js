import React, { Component } from 'react';
import GameBoard from '../components/GameBoard';

class GameBoardContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            boardData: {
                width: 20,
                height: 10
            }
        };
    }
    

    render() {
        return (

            <>
            <h2>Game Board Container</h2>
            <GameBoard boardData={this.state.boardData}/>
                
            </>
        );
    }
}

export default GameBoardContainer;