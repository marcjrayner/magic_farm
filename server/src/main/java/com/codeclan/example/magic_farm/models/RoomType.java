package com.codeclan.example.magic_farm.models;

import javax.persistence.*;
import java.util.ArrayList;

@Entity
@Table(name = "room_types")
public class RoomType {
    ArrayList<ArrayList<Integer>> cellArray;
    @Column(name = "roomMaxWith")
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
    }

    public RoomType(){

    }

    public ArrayList<ArrayList<Integer>> getCellArray() {
        return cellArray;
    }

    public int getRoomMaxWith() {
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