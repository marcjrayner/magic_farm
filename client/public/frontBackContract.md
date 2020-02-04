# Game Loads

1 Api Fetch -> 
  endpoint GET /choiceSets/getRandomRooms
   JSON Body 
   
   {    choiceType: 'room',
        cardArray: [
            {RoomType},
            {RoomType},
            {RoomType},
            {RoomType}
        ]
   }

*** where each RoomType looks like: ***  

    {   cellArray: [],
        roomMaxWidth: int,
        roomMaxHeight: int,
        area: int,
        roomStatus: 'room',
        roomType: 'red',
        roomContents: [],
        roomName: 'name'
    }

2 endpoint GET /GameState/newGame

    JSON Body 
    {
        gridData: {
            width: 20,
            height: 10,
            cellSize: 20
            },    
    objectsArray => []
    }
 
# Card is Clicked.
# Something is Placed

1 endpoint PUT /GameState/saveGame

2 endpoint GET /choiceSets/getRandomAnimals
    JSON Body

    {   choiceType: 'animal',
        cardArray: [
            {AnimalType},
            {AnimalType},
            {AnimalType}
        ]
   }

*** where animalType looks like *** 

    {
        imgsrc: 'chicken.png',
        animalMaxWidth: 1,
        animalMaxHeight: 1,
        animalName: 'chicken'
    }

Animal
    id =>
    objectType => String 'animal
    position []
    objectData => AnimalType

AnimalType
    imgsrc => String 'chicken.png',
    animalMaxWidth => int,
    animalMaxHeight => int
    <!-- animalTypes => string 'red', -->
    animalName => 'chicken'



Room
 id => 
 objectType => String e.g. 'room'
 position => []
 objectData => RoomType
 
RoomType 
 cellArray => []
 roomMaxWidth => int
 roomMaxHeight => int
 roomArea => int,
 roomStatus => String, 'room'
 roomType => String, 'red'
 roomContents => []
 roomName => String, 'room'
 
 
ChoiceSet
    choiceType => String 'room'
    cardArray => RoomType or AnimalType

GameState
    
    gridData: {
        width: 20,
        height: 10,
        cellSize: 20},    
    objectsArray => []