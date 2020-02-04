package com.codeclan.example.magic_farm.components;

import com.codeclan.example.magic_farm.models.Animal;
import com.codeclan.example.magic_farm.models.Farm;
import com.codeclan.example.magic_farm.models.Room;
import com.codeclan.example.magic_farm.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    AnimalRepository animalRepository;

//    @Autowired
//    ChoiceSetRepository choiceRepository;
//
//    @Autowired
//    FarmRepository farmRepository;

    @Autowired
    RoomRepository roomRepository;

//    @Autowired
//    StateRepository stateRepository;



    public DataLoader() {

    }

    public void run(ApplicationArguments args) {

//      ROOMS
        Room room1;
        ArrayList<Integer> coordinate = new ArrayList<>();
        ArrayList<ArrayList<Integer>> coordinates = new ArrayList<>();
        coordinate.add(1);
        coordinate.add(1);
        coordinates.add(coordinate);
        room1 = new Room("room1",coordinates);
        roomRepository.save(room1);

//      ANIMALS
        Animal animal1 = new Animal("cow",4);
        animalRepository.save(animal1);
        Animal animal2 = new Animal("cat",5);
        animalRepository.save(animal2);

//        FARMS
        Farm farm1 = new Farm();



    }
}
