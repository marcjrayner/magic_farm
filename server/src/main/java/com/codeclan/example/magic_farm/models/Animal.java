package com.codeclan.example.magic_farm.models;

import com.codeclan.example.magic_farm.interfaces.IChoose;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.JoinColumnOrFormula;

import javax.persistence.*;

@Entity
@Table(name = "animals")
public class Animal implements IChoose {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "price")
    private int price;


    @JsonIgnoreProperties("animals")
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "room_id")
    private Room room;

    @JsonIgnoreProperties("animals")
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "choice_sets_id")
    private ChoiceSet choiceSet;



    public Animal(String name, int price) {
        this.name = name;
        this.room = null;
        this.price = price;
        this.choiceSet = new ChoiceSet();
    }

    public Animal(){

    }

    public String getName() {
        return name;
    }

    @Override
    public String displayType() {
        return "animal";
    }


//    GETTERS AND SETTERS


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    //    ***********************************
}
