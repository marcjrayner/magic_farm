package com.codeclan.example.magic_farm.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "animals")
public class Animal {
    @Column(name ="name")
    private String name;

    @Column(name ="price")
    private int price;

    @JsonIgnoreProperties("animals")
    @ManyToOne
    @JoinColumn(name = "room_id", nullable = false)
    private Room room;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    public Animal(String name, int price, Room room) {
        this.name = name;
        this.price = price;
        this.room = room;
    }

    public Animal(){

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }
}
