package com.codeclan.example.magic_farm.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "rooms")
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(name = "object_type")
    private String objectType;
    @Column(name = "position")
    private ArrayList<Integer> position;

    @JsonIgnoreProperties
    @ManyToOne
    @JoinColumn(name = "room_type", nullable = false)
    private RoomType roomType;


    public Room(ArrayList<Integer> position) {
        this.objectType = "room";
        this.position = position;
        this.roomType = null;
    }

    public Room(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getObjectType() {
        return objectType;
    }

    public void setObjectType(String objectType) {
        this.objectType = objectType;
    }

    public ArrayList<Integer> getPosition() {
        return position;
    }

    public void setPosition(ArrayList<Integer> position) {
        this.position = position;
    }

    public RoomType getRoomType() {
        return roomType;
    }

    public void setRoomType(RoomType roomType) {
        this.roomType = roomType;
    }
}