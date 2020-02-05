package com.codeclan.example.magic_farm.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "choice_sets")
public class ChoiceSet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @JsonIgnore
    @OneToMany(mappedBy = "choiceSet")
    private List<Animal> animals;

    @JsonIgnore
    @OneToMany(mappedBy = "choiceSet")
    private List<Room> rooms;

    @OneToOne(mappedBy = "currentChoiceSet")
    private State state;


    public ChoiceSet() {
        this.animals = new ArrayList<>();
        this.rooms = new ArrayList<>();
        this.state = new State();
    }

// GETTERS AND SETTERS


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Animal> getAnimals() {
        return animals;
    }

    public void setAnimals(List<Animal> animals) {
        this.animals = animals;
    }

    public List<Room> getRooms() {
        return rooms;
    }

    public void setRooms(List<Room> rooms) {
        this.rooms = rooms;
    }

    public State getState() {
        return state;
    }

    public void setState(State state) {
        this.state = state;
    }
}
