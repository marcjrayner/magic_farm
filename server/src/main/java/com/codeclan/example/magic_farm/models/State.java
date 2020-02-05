package com.codeclan.example.magic_farm.models;

import javax.persistence.*;
import java.util.ArrayList;

@Entity
@Table(name = "states")
public class State {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="wallet")
    private int wallet;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name="farm_id", referencedColumnName = "id")
    private Farm farm;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name="current_choice_set_id", referencedColumnName = "id")
    private ChoiceSet currentChoiceSet;

//
//    private ArrayList<ChoiceSet> choicesHistory;


    public State(int wallet) {
        this.wallet = wallet;
        this.farm = null;
        this.currentChoiceSet = null;

//        this.choicesHistory = null;
    }

    public State() {

    }

//    GETTERS AND SETTERS
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

    public ChoiceSet getCurrentChoice() {
        return currentChoiceSet;
    }

    public void setCurrentChoice(ChoiceSet currentChoice) {
        this.currentChoiceSet = currentChoice;
    }

//    public ArrayList<ChoiceSet> getChoicesHistory() {
//        return choicesHistory;
//    }
//
//    public void setChoicesHistory(ArrayList<ChoiceSet> choicesHistory) {
//        this.choicesHistory = choicesHistory;
//    }
}


