Game Loads.
Api Fetch -> 
    GameState;
    ChoiceSet;

Card is clicked.
Something is placed.
    -> Update GameState;
    Get ChoiceSet.


Room
 id => 
 objectType => String e.g. 'room
 position => []
 objectData => RoomType
 
RoomType 
 cellArray => []
 roomMaxWidth => int
 roomMaxHeight => int
 roomStatus => String, 'room'
 roomType => String, 'red'
 roomContents => []
 roomName => String, 'name'
 
ChoiceSet
    choiceType => String 'room'
    cardArray => RoomType or AnimalType

GameState
    
    gridData: {
        width: 20,
        height: 10,
        cellSize: 20},    
    objectsArray => []