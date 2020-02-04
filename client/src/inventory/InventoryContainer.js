import React from "react";


const InventoryContainer = (props) => {

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
    
    const gameBoard = props.gameBoard;
    const inventory = props.userInventoryData;
    const area = ( inventory.areaCovered ) / ( gameBoard.width * gameBoard.height) * 100;
   
        return (
            <section id="inventory-container" >
                
                <aside id="coins-display">
                    <p class="ui-coins" >{inventory.coins}</p>
                </aside>

                <aside id="playing-data" >
                    <p class="user-data ui-rooms">
                        Rooms: {inventory.numberOfRooms} | {area}%
                    </p>
                
                    <p class="user-data ui-animals">
                        Animals: {inventory.animals}
                    </p>

                </aside>

                <aside id="level-display">
                Level {this.props.userInventoryData.level}
                </aside>
            </section>
        )
    }

}

export default InventoryContainer;