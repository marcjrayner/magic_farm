import React, { Component } from 'react';
import RoomContainer from '../containers/RoomContainer';
import Grid from './Grid';

class ChoiceCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blankgrid: [
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
            <article className="card">
                <h2>Room Choice 1</h2>
                {/* <RoomContainer grid={this.state.blankgrid} /> */}
                <Grid width="5" height="5" gridName="choice-room-container" />

                

            </article>
        )
    }
}

export default ChoiceCard;