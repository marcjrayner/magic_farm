import React, {Component} from 'react';
import Cell from '../components/Cell';

class Animal extends Component {

        constructor(props) {
            super(props);
            this.state = {
            };
            this.hoverRelativePosition = this.hoverRelativePosition.bind(this);
        };

    
        render() {

            const animal = this.props.animal;
            let initialPosition = [1, 1];
            if (this.props.position !== null) { initialPosition = this.props.position; }
            const translateY = initialPosition[0];
            const translateX = initialPosition[1];

            const animalRender = this.props.animal.cellArray.map((roomCell, index) => {

                const position = [roomCell[0], roomCell[1]];
                const name = ('' + this.props.animal.animalType + ' ' + this.props.animal.animalStatus + '-' + position)

                const cell = {
                    'empty': false,
                    'position': position,
                    'affiliation': name,
                    'hover': false
                };

                return (
                    <Cell key={index} cell={cell}
                    // clickMethod={this.makeCellClickWholeRoom}
                        // hoverMethod={this.hoverRelativePosition}
                    />
                )
            });

            const animalStyle = {
                display: 'grid',
                gridGap: '1px',
                gridTemplateRows: 'repeat(' + animal.animalMaxHeight + ', ' + this.props.cellSize + 'px)',
                gridTemplateColumns: 'repeat(' + animal.animalMaxWidth + ',' + this.props.cellSize + 'px)',
                gridRowStart: translateX,
                gridColumnStart: translateY,
                gridRowEnd: translateX + animal.animalMaxHeight,
                gridColumnEnd: translateY + animal.animalMaxWidth
            };

            return (

                <>
                    <aside className={"room "
                        + (this.state.selectedRoom ? 'room-selected ' : '')
                        + this.props.placedStatus}
                        style={animalStyle}
                        id={"[" + translateX + "," + translateY + "]"} >
                        {animalRender}
                    </aside>
                </>

            )
        }
    }

export default Animal;