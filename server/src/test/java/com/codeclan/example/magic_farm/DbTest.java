package com.codeclan.example.magic_farm;

import com.codeclan.example.magic_farm.interfaces.IChoose;
import com.codeclan.example.magic_farm.models.Animal;
import com.codeclan.example.magic_farm.models.ChoiceSet;
import com.codeclan.example.magic_farm.models.Room;
import com.codeclan.example.magic_farm.repositories.AnimalRepository;
import com.codeclan.example.magic_farm.repositories.RoomRepository;
import com.codeclan.example.magic_farm.repositories.ChoiceSetRepository;
import com.sun.xml.internal.rngom.binary.ChoicePattern;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.persistence.Table;
import java.awt.*;
import java.util.ArrayList;

import static org.junit.Assert.assertEquals;

@SpringBootTest
class DbTest {
    @Autowired
    AnimalRepository animalRepository;

    @Autowired
    RoomRepository roomRepository;

    @Autowired
    ChoiceSetRepository choiceSetRepository;

    Animal animal1;
    Animal animal2;
    Room room1;
    ArrayList<Integer> coordinate;
    ArrayList<ArrayList<Integer>> coordinates;
    ChoiceSet choice;
    @BeforeEach
    void setUp() {
        coordinate = new ArrayList<>();
        coordinates = new ArrayList<>();
        animal1 = new Animal("cow",1);
        animal2 = new Animal("cat",2);
        coordinate.add(1);
        coordinate.add(1);
        coordinates.add(coordinate);
        room1 = new Room("room1",coordinates);
        choice = new ChoiceSet();

    }

    @Test
    void contextLoads() {
    }


    @Test
    void canAddRoomToDb() {
        roomRepository.save(room1);
    }

    @Test
    void canAddChoseSet() {
        choiceSetRepository.save(choice);
    }
}
