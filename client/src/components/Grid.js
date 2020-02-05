import React from 'react';
import Cell from './Cell';
import Room from '../rooms/Room';

const Grid = (props) => {

    const grid = props.gridData;
    
    const mouseObjects = [];
    
    if (props.mouseObject !== null) {
        mouseObjects.push(props.mouseObject)
    };

    function doNothing() { return null; }

    let testRef = -1;
    let testType = ''
    if (props.selectedOnBoard !== null) { testRef = props.selectedOnBoard.ref; testType = props.selectedOnBoard.type}

    const renderMouse = mouseObjects.map((object, index) => {

            switch (object.objectType) {
            case 'room':
                
            return (
                <Room
            
                    placedStatus={object.placedStatus}
                    cellSize={grid.cellSize}
                    key={index}
                    room={object.objectData}
                    position={props.hoverLocation}
                    clickMethod={props.clickMethod}
                    hoverMethod={doNothing}
                />
            );
            case "Animal": return (
                <p key={index}>this will be an animal</p>
            );
            default: return null; };
    })

    function cellClickLogic(cellAnimalorRoomDataObject) {
        props.updateBusyCells(occupiedSpace);
        props.clickMethod(cellAnimalorRoomDataObject);
    }
    
    const occupiedSpace = [];

    var objects = [];
    if (props.objectsArray.length !== 0) { objects = props.objectsArray.map((object, index) => {
        let objectPositionStatus = 'fixed';

        object.objectData.cellArray.map((cellPosition) => {
            const position = [
                (object.objectPosition[0] + cellPosition[0] - 1),
                (object.objectPosition[1] + cellPosition[1] - 1)];

            occupiedSpace.push({
                'empty': false,
                'position': position,
                'affiliation': 'room'+object.id,
            })

        })

        switch(object.objectType){
            case 'room':
                
            return(
                <Room
                placedStatus={objectPositionStatus}
                amISelected={props.selectedOnBoard.type === 'room' && testRef === index ? true : false}
                cellSize={grid.cellSize}
                key={index}
                id={index}
                room={object.objectData}
                position={object.objectPosition}
                clickMethod={cellClickLogic}
                hoverMethod={props.hoverMethod}
                />
            ); 
            case "Animal": return(
                <p key={index}>this will be an animal</p>
            );
            default: return null;
        }

    })
    }

    // BUILD AN EMPTY GRID
    const x = grid.width;
    const y = grid.height;
    const blankGrid = [];

    for (var j = 1; j <= x; j++) {
        for (var k = 1; k <= y; k++) {
            const position = [j,k]

            // Create an empty cell with that position
            const cell = {
                'empty': true,
                'position': position,
                'affiliation': 'game-board',
                'hover': false
            };
            
            // if (occupiedSpace.contains())
            blankGrid.push(cell);
        }
    }



    const blankCells = blankGrid.map((cell, index) => {
        
        return (
            <Cell key={index} cell={cell} clickMethod={props.clickMethod}
                hoverMethod={props.hoverMethod}/>
        )

    });

    const gridStyle = {
        display: 'grid',
        gridGap: '1px',
        gridTemplateRows: 'repeat(' + y + ', ' + grid.cellSize +'px)',
        gridTemplateColumns: 'repeat(' + x + ', ' + grid.cellSize +'px)'
    };

    return (
        <>
        <main style={gridStyle} className={'grid ' + props.id}>
            {renderMouse}
            {objects} 
            {blankCells}
        </main>
        </>
    )

}

export default Grid;