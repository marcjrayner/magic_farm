import React, {Component} from 'react';
import Cell from '../components/Cell';

class Animal extends Component {

        constructor(props) {
            super(props);
            this.state = {
                selectedRoom: null
            };
            // this.hoverRelativePosition = this.hoverRelativePosition.bind(this);
        };

    
        render() {

            const animal = this.props.animal;
            let initialPosition = [1, 1];
            if (this.props.position !== null) { initialPosition = this.props.position; }
            const translateY = initialPosition[0];
            const translateX = initialPosition[1];

            var cellArray = [];
            if(animal.name === 'dragon') {
                cellArray = [[1,1], [1,2], [1,3], [2,2], [2,3], [3,3]];
            } else if (animal.name === 'chicken') {
                cellArray = [[1,1]];
                }

            const animalRender = cellArray.map((roomCell, index) => {
            
                const position = [roomCell[0], roomCell[1]];
                    const name = ('' + animal.animalType + ' ' + animal.animalName + '-' + position)

                    const cell = {
                        'empty': false,
                        'position': position,
                        'affiliation': name,
                        'hover': false
                    };

                    return (

                        <Cell key={index} cell={cell}
                            clickMethod={this.props.doNothing}
                            hoverMethod={this.props.doNothing}
                        />
                    )
                });
            


            const animalStyle = {
                gridGap: '1px',
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