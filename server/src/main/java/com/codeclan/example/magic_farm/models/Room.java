package com.codeclan.example.magic_farm.models;

import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "rooms")
public class Room {
    @Column(name = "name")
    String name;

    @Column(name = "cell")
    ArrayList<ArrayList<Integer>> cells;

    @Column(name = "farm_location")
    ArrayList<Integer> farmLocation;

    @Cascade(org.hibernate.annotations.CascadeType.DELETE)
    @OneToMany(mappedBy = "Room", fetch = FetchType.LAZY)
    ArrayList<Animal> animals;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;

    public Room(String name) {
        this.name = name;
        this.cells = new ArrayList<ArrayList<Integer>>();
        this.farmLocation = new ArrayList<Integer>();
        this.animals = new ArrayList<Animal>();
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<List<Integer>> getCells() {
        return cells;
    }

    public void setCells(List<List<Integer>> cells) {
        this.cells = cells;
    }

    public List<Integer> getFarmLocation() {
        return farmLocation;
    }

    public void setFarmLocation(List<Integer> farmLocation) {
        this.farmLocation = farmLocation;
    }

    public List<Animal> getAnimals() {
        return animals;
    }

    public void setAnimals(List<Animal> animals) {
        this.animals = animals;
    }
}
