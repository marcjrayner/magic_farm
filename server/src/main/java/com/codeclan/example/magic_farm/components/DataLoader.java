package com.codeclan.example.magic_farm.components;

import com.codeclan.example.magic_farm.models.Room;
import com.codeclan.example.magic_farm.models.RoomType;
import com.codeclan.example.magic_farm.repositories.RoomRepository;
import com.codeclan.example.magic_farm.repositories.RoomTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    RoomTypeRepository roomTypeRepository;

    @Autowired
    RoomRepository roomRepository;




    public void run(ApplicationArguments args) {
        ArrayList<ArrayList<Integer>> oneByOneCoordinates = new ArrayList<>();



//        two
        ArrayList<Integer> oneXOne = new ArrayList<>();
        oneXOne.add(1);
        oneXOne.add(1);
//        1,2
        ArrayList<Integer> oneXTwo = new ArrayList<>();
        oneXTwo.add(1);
        oneXTwo.add(2);
//        1,3
        ArrayList<Integer> oneXThree = new ArrayList<>();
        oneXThree.add(1);
        oneXThree.add(13);

//        1,4
        ArrayList<Integer> oneXFour = new ArrayList<>();
        oneXFour.add(1);
        oneXFour.add(4);
//      2,1
        ArrayList<Integer> twoXOne = new ArrayList<>();
        twoXOne.add(2);
        twoXOne.add(1);
//      2,2
        ArrayList<Integer> twoXTwo = new ArrayList<>();
        twoXTwo.add(2);
        twoXTwo.add(2);

//      2,3
        ArrayList<Integer> twoXThree = new ArrayList<>();
        twoXThree.add(2);
        twoXThree.add(3);

//      2,4
        ArrayList<Integer> twoXFour = new ArrayList<>();
        twoXFour.add(2);
        twoXFour.add(4);
//        3,1
        ArrayList<Integer> threeXOne = new ArrayList<>();
        threeXOne.add(3);
        threeXOne.add(1);
//        3,2
        ArrayList<Integer> threeXTwo = new ArrayList<>();
        threeXTwo.add(3);
        threeXTwo.add(2);
//        3,3
        ArrayList<Integer> threeXThree = new ArrayList<>();
        threeXThree.add(3);
        threeXThree.add(3);
//        3,4
        ArrayList<Integer> threeXFour = new ArrayList<>();
        threeXFour.add(3);
        threeXFour.add(4);
//        4,1
        ArrayList<Integer> fourXOne = new ArrayList<>();
        fourXOne.add(4);
        fourXOne.add(1);
//        4,2
        ArrayList<Integer> fourXTwo = new ArrayList<>();
        fourXTwo.add(4);
        fourXTwo.add(2);
//        4,3
        ArrayList<Integer> fourXThree = new ArrayList<>();
        fourXThree.add(4);
        fourXThree.add(3);

//        4,4
        ArrayList<Integer> fourXFour = new ArrayList<>();
        fourXFour.add(4);
        fourXFour.add(4);





//        SHAPES
//       Two by two
        ArrayList<ArrayList<Integer>> square2 = new ArrayList<>();
        square2.add(oneXOne);
        square2.add(oneXTwo);
        square2.add(twoXOne);
        square2.add(twoXTwo);

//       cross
        ArrayList<ArrayList<Integer>> cross = new ArrayList<>();
        cross.add(oneXTwo);
        cross.add(twoXOne);
        cross.add(twoXTwo);
        cross.add(twoXThree);
        cross.add(threeXTwo);

        oneByOneCoordinates.add(oneXOne);





//      adding data
        RoomType roomType1  = new RoomType(oneByOneCoordinates,1,1,1,"red","roomOneOne");
        roomTypeRepository.save(roomType1);

        RoomType squareTwoByTwo  = new RoomType(square2,2,2,4,"red","roomSquare");
        roomTypeRepository.save(squareTwoByTwo);

        RoomType crossThree  = new RoomType(cross,3,3,5,"red","roomCross");
        roomTypeRepository.save(crossThree);

        Room room = new Room(oneXFour);
        room.setRoomType(crossThree);
        roomRepository.save(room);


    }
}
