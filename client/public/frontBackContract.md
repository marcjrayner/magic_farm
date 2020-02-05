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

SaveState
    
    gridData: {
        width: 20,
        height: 10,
        cellSize: 20},    
    objectsArray => []