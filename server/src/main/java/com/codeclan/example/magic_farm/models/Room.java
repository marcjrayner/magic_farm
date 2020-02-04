package com.codeclan.example.magic_farm.models;

import com.codeclan.example.magic_farm.interfaces.IChoose;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "rooms")
public class Room implements IChoose {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "cell_size")
    private ArrayList<ArrayList<Integer>> cellsSize;

    @Column(name = "farm_location")
    private ArrayList<Integer> farmLocation;

    @JsonIgnoreProperties("rooms")
    @OneToMany(mappedBy = "room")
    private List<Animal> animals;

    @JsonIgnoreProperties("rooms")
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "choice_sets_id")
    private ChoiceSet choiceSet;

    @JsonIgnoreProperties("rooms")
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "farm_id")
    private Farm farm;


    public Room(String name, ArrayList<ArrayList<Integer>> cellsSize) {
        this.name = name;
        this.cellsSize = cellsSize;
        this.farmLocation = new ArrayList<>();
        this.animals = new ArrayList<>();
        this.choiceSet = null;
        this.farm = null;
    }
    public Room(){

    }


    @Override
    public String displayType() {
        return "room";
    }

    public void addAnimal(Animal animal){
        this.animals.add(animal);
    }

    //    GETTERS AND SETTERS


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ArrayList<ArrayList<Integer>> getCellsSize() {
        return cellsSize;
    }

    public void setCellsSize(ArrayList<ArrayList<Integer>> cellsSize) {
        this.cellsSize = cellsSize;
    }

    public ArrayList<Integer> getFarmLocation() {
        return farmLocation;
    }

    public void setFarmLocation(ArrayList<Integer> farmLocation) {
        this.farmLocation = farmLocation;
    }

    public List<Animal> getAnimals() {
        return animals;
    }

    public void setAnimals(ArrayList<Animal> animals) {
        this.animals = animals;
    }

    public Farm getFarm() {
        return farm;
    }

    public void setFarm(Farm farm) {
        this.farm = farm;
    }

    //    ***************
}
