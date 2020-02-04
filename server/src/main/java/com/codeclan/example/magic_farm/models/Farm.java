package com.codeclan.example.magic_farm.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "farms")
public class Farm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "farm_size")
    private ArrayList<Integer> farmSize;

    @JsonIgnore
    @OneToMany(mappedBy = "farm")
    private List<Room> rooms;

    public Farm(ArrayList<Integer> farmSize) {
        this.farmSize = farmSize;
        this.rooms = new ArrayList<>();
    }

    public Farm () {

    }

    //    GETTERS AND SETTERS


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ArrayList<Integer> getFarmSize() {
        return farmSize;
    }

    public void setFarmSize(ArrayList<Integer> farmSize) {
        this.farmSize = farmSize;
    }

    public List<Room> getRooms() {
        return rooms;
    }

    public void setRooms(List<Room> rooms) {
        this.rooms = rooms;
    }
}
