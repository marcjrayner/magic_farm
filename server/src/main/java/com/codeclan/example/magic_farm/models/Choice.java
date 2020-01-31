package com.codeclan.example.magic_farm.models;

import java.util.ArrayList;

public class Choice {
    private ArrayList<Animal> animals;
    private ArrayList<Room> rooms;

    public Choice() {
        this.animals = new ArrayList<Animal>();
        this.rooms = new ArrayList<Room>();
    }


    public ArrayList<Animal> getAnimals() {
        return animals;
    }

    public void setAnimals(ArrayList<Animal> animals) {
        this.animals = animals;
    }

    public ArrayList<Room> getRooms() {
        return rooms;
    }

    public void setRooms(ArrayList<Room> rooms) {
        this.rooms = rooms;
    }

    public void createAnimal(Animal animal){
        this.animals.add(animal);
    }

    public void createRoom(Room room){
        this.rooms.add(room);
    }
}
