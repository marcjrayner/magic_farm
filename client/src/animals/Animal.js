import React, {Component} from 'react';
import Cell from '../components/Cell';

class Animal extends Component {

        constructor(props) {
            super(props);
            this.state = {
                // selectedAnimal: null
            };
            // this.hoverRelativePosition = this.hoverRelativePosition.bind(this);
        };

    
        render() {

            const animal = this.props.animal;
            let initialPosition = [1, 1];
            if (this.props.position !== NaN) { initialPosition = this.props.position; }
            const translateY = initialPosition[0];
            const translateX = initialPosition[1];

            var cellArray = [];
            var imgSrc = animal.imgSrc;
            var imageStyle = {}
            if(animal.animalName === 'dragon') {
                cellArray = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3], [3,1], [3,3],[3,2]];
                const imageStyle={
                    gridRowStart: 1,
                    gridRowEnd: 3,
                    gridColumnStart: 1,
                    gridColumnEnd: 3
                }
            } else if (animal.animalName === 'chicken') {
                cellArray = [[1,1]];
                const imageStyle={
                    gridRowStart: 1,
                    gridRowEnd: 1,
                    gridColumnStart: 1,
                    gridColumnEnd: 1
                }
            }

            const animalRender = cellArray.map((roomCell, index) => {
            
                const position = [roomCell[0], roomCell[1]];
                    const name = ('' + animal.animalType + ' ' + animal.animalName + '-' + position[0]+'-'+position[1])

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
            

            const image = () => {
        
                    return (
                        <img src={imgSrc} alt={animal.animalName} className={animal.animalName} style={imageStyle} />
                    )

            }
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
                    <aside className={"animal "
                        // + (this.state.selectedRoom ? 'room-selected ' : '')
                        + this.props.placedStatus}
                        style={animalStyle}
                        id={"[" + translateX + "," + translateY + "]"} >
                        
                        {image()}
                        {animalRender}
                    </aside>
                </>

            )
        }
    }

export default Animal;