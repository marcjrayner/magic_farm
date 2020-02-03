package com.codeclan.example.magic_farm.components;

import com.codeclan.example.magic_farm.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    AnimalRepository animalRepository;

    @Autowired
    ChoiceRepository choiceRepository;

    @Autowired
    FarmRepository farmRepository;

    @Autowired
    RoomRepository roomRepository;

    @Autowired
    StateRepository stateRepository;



    public DataLoader() {

    }

    public void run(ApplicationArguments args) {

        Room room1 = new Room("room1");
        Animal cow = new Animal("cow",4,room1);

        room1.addAnimal(cow);
    }
}