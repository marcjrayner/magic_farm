package com.codeclan.example.magic_farm.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "room_types")
public class RoomType {
    ArrayList<ArrayList<Integer>> cellArray;
    @Column(name = "roomMaxWidth")
    int roomMaxWidth;

    @Column(name = "roomMaxHeight")
    int roomMaxHeight;

    @Column(name = "area")
    int area;

    @Column(name = "roomStatus")
    String roomStatus;

    @Column(name = "roomType")
    String roomType;

    @Column(name = "roomName")
    String roomName;




    @JsonIgnoreProperties("rooms")
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "roomType")
    private List<Room> rooms;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;


    public RoomType(ArrayList<ArrayList<Integer>> cellArray, int roomMaxWidth, int roomMaxHeight, int area, String roomType, String roomName) {
        this.cellArray = cellArray;
        this.roomMaxWidth = roomMaxWidth;
        this.roomMaxHeight = roomMaxHeight;
        this.area = area;
        this.roomStatus = "room";
        this.roomType = roomType;
        this.roomName = roomName;
        this.rooms = new ArrayList<>();
    }

    public RoomType(){

    }



    public ArrayList<ArrayList<Integer>> getCellArray() {
        return cellArray;
    }

    public int getRoomMaxWidth() {
        return roomMaxWidth;
    }

    public int getRoomMaxHeight() {
        return roomMaxHeight;
    }

    public int getArea() {
        return area;
    }

    public String getRoomStatus() {
        return roomStatus;
    }

    public String getRoomType() {
        return roomType;
    }

    public String getRoomName() {
        return roomName;
    }
}
