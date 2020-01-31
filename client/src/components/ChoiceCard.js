import React, { Component } from 'react';
import Cell from './Cell';

class ChoiceCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cell: {
                empty: false
            }
        };
    }

    render() {
        return (
            <article className="card">
                <h2>Choice Card</h2>
                <Cell cell={this.state.cell} />

            </article>
        )
    }
}

export default ChoiceCard;