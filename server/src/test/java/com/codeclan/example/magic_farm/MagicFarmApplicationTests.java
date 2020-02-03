package com.codeclan.example.magic_farm;

import com.codeclan.example.magic_farm.interfaces.IChoose;
import com.codeclan.example.magic_farm.models.Animal;
//import com.codeclan.example.magic_farm.models.ChoiceSet;
import com.codeclan.example.magic_farm.models.Room;
import com.codeclan.example.magic_farm.repositories.AnimalRepository;
import com.codeclan.example.magic_farm.repositories.RoomRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.persistence.Table;
import java.awt.*;
import java.util.ArrayList;

import static org.junit.Assert.assertEquals;

@SpringBootTest
class MagicFarmApplicationTests {
	@Autowired
	AnimalRepository animalRepository;

	@Autowired
	RoomRepository roomRepository;


	Animal animal1;
	Animal animal2;
	Room room1;
	ArrayList<Integer> coordinate;
	ArrayList<ArrayList<Integer>> coordinates;
//	ChoiceSet choice;

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
//		choice = new ChoiceSet();

	}

	@Test
	void contextLoads() {
	}

	@Test
	void canAddAnimalInRoom() {
		room1.addAnimal(animal1);
		assertEquals(1,room1.getAnimals().size());

	}
//
//	@Test
//	void canGetFromIChoose(){
//		ArrayList<Animal> animals = new ArrayList<>();
//		animals.add(animal1);
//		animals.add(animal2);
//		choice.setOptions(animals);
//
//	}


}
