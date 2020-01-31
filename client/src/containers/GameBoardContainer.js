import React, { Component } from 'react';
import GameBoard from '../components/GameBoard';

class GameBoardContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            grid: [
                {
                    empty: true,
                    position: [1, 1]
                },
                {
                    empty: true,
                    position: [2, 1]
                },
                {
                    empty: true,
                    position: [3, 1]
                },
                {
                    empty: true,
                    position: [4, 1]
                },
                {
                    empty: true,
                    position: [5, 1]
                },
                {
                    empty: true,
                    position: [1, 2]
                },
                {
                    empty: true,
                    position: [2, 2]
                },
                {
                    empty: true,
                    position: [3, 2]
                },
                {
                    empty: true,
                    position: [4, 2]
                },
                {
                    empty: true,
                    position: [5, 2]
                }
            ]

        };
    }

    render() {
        return (
            <>
            <h2>Game Board Container</h2>

            <GameBoard grid={this.state.grid}/>
                
            </>
        )
    }
}

export default GameBoardContainer;