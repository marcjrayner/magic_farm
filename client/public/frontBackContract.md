# Game Loads

1 Api Fetch ->
  endpoint GET /choiceSets/getRandomRooms
   response JSON Body

   {    choiceType: 'room',
        cardArray: [
            {RoomType},
            {RoomType},
            {RoomType},
            {RoomType}
        ]
   }

*** where each RoomType looks like: ***  

    {   cellArray: [
            [int,int], [int,int], [int, int], [int,int]
            ],
        roomMaxWidth: int,
        roomMaxHeight: int,
        roomArea: int,
        roomStatus: 'room',
        roomType: 'red',
        roomContents: [],
        roomName: 'name'
    }

2 endpoint CREATE /GameState/newGame

    request JSON Body

    { width: 20,
      height: 10,
      cellSize: 20
      }

    response JSON Body
    {
        id: ID,
        gridData: {
            width: 20,
            height: 10,
            cellSize: 20
            },    
        objectsArray: []
    }
*** objects Array should be blank, but will contain Rooms ***

# Card is Clicked.
# Something is Placed

1 endpoint PUT /GameState/saveGame

REQUEST BODY
{  
    id: ID,
   gridData: {
        width: 20,
        height: 10,
        cellSize: 20},    
    objectsArray => [
        { room }
    ]
}

*** where room looks like ***

    {
        id: ID,
        objectType: 'room',
        position: [int,int],
        objectData: {RoomType}
    }

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
        price: 1,
        animalName: 'chicken'
    }


# Load Game

++++++++++++++++++++++++++++

# DATA TYPES

## Animal
    id =>
    objectType => String 'animal
    position []
    objectData => AnimalType

## AnimalType
    imgsrc => String 'chicken.png',
    animalMaxWidth => int,
    animalMaxHeight => int
    <!-- animalTypes => string 'red', -->
    animalName => 'chicken'



## Room
 id =>
 objectType => String e.g. 'room'
 position => []
 contains => [] Array of Animals
 objectData => RoomType

## RoomType
 cellArray => []
 roomMaxWidth => int
 roomMaxHeight => int
 roomArea => int,
 roomStatus => String, 'room'
 roomType => String, 'red'
 roomContents => []
 roomName => String, 'room'


## ChoiceSet
    choiceType => String 'room'
    cardArray => RoomType or AnimalType

## GameState   
    gridData: {
        width: 20,
        height: 10,
        cellSize: 20},    
    objectsArray => []
