package com.codeclan.example.magic_farm.models;

import java.util.ArrayList;
import java.util.List;

public class State {
    private int wallet;
    private Farm farm;
    private Choice choice;
    private List<Room> rooms;

    public State(int wallet, Farm farm) {
        this.wallet = wallet;
        this.farm = farm;
        this.choice = new Choice();
        this.rooms = new ArrayList<Room>();
    }

    public int getWallet() {
        return wallet;
    }

    public void setWallet(int wallet) {
        this.wallet = wallet;
    }

    public Farm getFarm() {
        return farm;
    }

    public void setFarm(Farm farm) {
        this.farm = farm;
    }

    public Choice getChoice() {
        return choice;
    }

    public void setChoice(Choice choice) {
        this.choice = choice;
    }

    public List<Room> getRooms() {
        return rooms;
    }

    public void setRooms(List<Room> rooms) {
        this.rooms = rooms;
    }

    public void addRoom(Room room){
        this.rooms.add(room);
    }
}
