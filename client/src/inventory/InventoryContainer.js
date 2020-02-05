import React, {Component} from "react";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Request from '../helpers/request';


class InventoryContainer extends Component {

    constructor(props){
        super(props);
        this.state = {};
        this.handlePost = this.handlePost.bind(this);
        this.handleAnimalPost = this.handleAnimalPost.bind(this);
        this.loadData = this.loadData.bind(this);
    }

    // This is what data looks like
    // userInventoryData: {
    //     coins: 100;
    //     numberOfRooms: 0;
    //     areaCovered: 0;
    //     animals: 0;
    //     level: 1;
    //     score: 0;
    // }

    // gameBoard: {
    //     width: 20,
    //     height: 10,
    //     cellSize: 20
    // },
    
    handlePost(roomType){
        const request = new Request();
        request.post('http://localhost:8080/roomTypes', roomType);
    }

    handleAnimalPost(animalType){
        const request = new Request();
        request.post('http://localhost:8080/animalTypes', animalType)
    }

    loadData() {
        const dataArray = [{
            cellArray: [[1, 1], [1, 2], [1, 3]],
            roomMaxWidth: 1,
            roomMaxHeight: 3,
            roomType: 'red',
            roomStatus: 'room',
            area: 3,
            roomName: 'THREExONE'
        }, {
                cellArray: [[1, 1]],
                roomMaxWidth: 1,
                roomMaxHeight: 1, roomType: 'red',
                roomStatus: 'room',
                area: 1,                roomName: 'ONExONE'
            },
            {
                cellArray: [[1, 1], [1, 2], [2, 1], [2, 2]],
                roomMaxWidth: 2,
                roomMaxHeight: 2, roomType: 'red',
                roomStatus: 'room',
                area: 4,
                roomName: 'TWOxTWO'
            },
            {
                cellArray: [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3], [3, 1], [3, 2], [3, 3]],
                roomMaxWidth: 3,
                roomMaxHeight: 3, roomType: 'red',
                roomStatus: 'room',
                area: 9,
                roomName: 'THREExTHREE'
            }, {
                cellArray: [
                    [1, 1], [1, 2], [1, 3], [1,4], 
                [2, 1], [2, 2], [2, 3],[2,4],
                 [3, 1], [3, 2], [3, 3], [3,4],
                [4,1],[4,2],[4,3],[4,4]],
                roomMaxWidth: 4,
                roomMaxHeight: 4,
                roomType: 'red',
                roomStatus: 'room',
                area: 16,
                roomName: 'FOURxFOUR'
            },
            {
                cellArray: [[1, 1], [2, 1]],
                roomMaxWidth: 2,
                roomMaxHeight: 1,
                roomType: 'red',
                roomStatus: 'room',
                area: 2,
                roomName: 'ONExTWO'
            },
            {
                cellArray: [[1, 1], [2, 1], [3, 1]],
                roomMaxWidth: 3,
                roomMaxHeight: 1,
                roomType: 'red',
                roomStatus: 'room',
                area: 3,
                roomName: 'ONExTHREE'
            },
            {
                cellArray: [[1, 1], [1, 2]],
                roomMaxWidth: 1,
                roomMaxHeight: 2,
                roomType: 'red',
                roomStatus: 'room',
                area: 2,
                roomName: 'TWOxONE'
            }]

        for(let data of dataArray){
            this.handlePost(data);
        }

        const animalArray = [
         {  cellArray: [[1, 1]],
            animalMaxWidth: 1,
            animalMaxHeight: 2,
            animalType: 'red',
            animalStatus: 'animal',
        
            animalName: 'chicken',
            imgsrc: 'chicken.png'
            },
            {
                cellArray: [[1, 1]],
                animalMaxWidth: 3,
                animalMaxHeight: 3,
                animalType: 'red',
                animalStatus: 'animal',
                imgsrc: 'dragon.png',
                animalName: 'dragon'
            },
            {
                cellArray: [[1, 1]],
                animalMaxWidth: 1,
                animalMaxHeight: 2,
                animalType: 'red',
                animalStatus: 'animal',

                animalName: 'chicken',
                imgsrc: 'chicken.png'
            },
            {
                cellArray: [[1, 1]],
                animalMaxWidth: 3,
                animalMaxHeight: 3,
                animalType: 'red',
                animalStatus: 'animal',
                imgsrc: 'dragon.png',
                animalName: 'dragon'
            },
            {
                cellArray: [[1, 1]],
                animalMaxWidth: 1,
                animalMaxHeight: 2,
                animalType: 'red',
                animalStatus: 'animal',

                animalName: 'chicken',
                imgsrc: 'chicken.png'
            },
            {
                cellArray: [[1, 1]],
                animalMaxWidth: 3,
                animalMaxHeight: 3,
                animalType: 'red',
                animalStatus: 'animal',
                imgsrc: 'dragon.png',
                animalName: 'dragon'
            },
            {
                cellArray: [[1, 1]],
                animalMaxWidth: 1,
                animalMaxHeight: 2,
                animalType: 'red',
                animalStatus: 'animal',

                animalName: 'chicken',
                imgsrc: 'chicken.png'
            },
            {
                cellArray: [[1, 1]],
                animalMaxWidth: 3,
                animalMaxHeight: 3,
                animalType: 'red',
                animalStatus: 'animal',
                imgsrc: 'dragon.png',
                animalName: 'dragon'
            },
            {
                cellArray: [[1, 1]],
                animalMaxWidth: 1,
                animalMaxHeight: 2,
                animalType: 'red',
                animalStatus: 'animal',

                animalName: 'chicken',
                imgsrc: 'chicken.png'
            },
            {
                cellArray: [[1, 1]],
                animalMaxWidth: 3,
                animalMaxHeight: 3,
                animalType: 'red',
                animalStatus: 'animal',
                imgsrc: 'dragon.png',
                animalName: 'dragon'
            }
        ];
        
        for(let animal of animalArray){
            this.handleAnimalPost(animal)
        }

       
    }

    render(){
    const gameBoard = this.props.gameBoard;
    const inventory = this.props.userInventoryData;
    const area = ( inventory.areaCovered ) / ( gameBoard.width * gameBoard.height) * 100;
   
        return (
            <section id="inventory-container" >
                <h3>Inventory</h3>
                <aside id="coins-display">
                    <p className="ui-coins" >{inventory.coins}</p>
                </aside>

                <aside id="playing-data" >
                    <p className="user-data ui-rooms">
                        Rooms: {inventory.numberOfRooms} | {area}%
                    </p>
                
                    <p className="user-data ui-animals">
                        Animals: {inventory.animals}
                    </p>

                    <p className="user-data ui-score">
                        Score: {inventory.score}
                    </p>
                </aside>

                <button onClick={this.loadData}>Load Data</button>
                <button onClick={this.props.loadChoices}>Load Choices</button>

                <aside id="level-display">
                    Level {this.props.level}
                    <img id="level-board" src="woodBoard.png" /></aside>
            </section>
        )
    };
}

export default InventoryContainer;