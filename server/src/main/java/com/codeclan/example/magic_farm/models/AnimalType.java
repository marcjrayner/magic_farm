package com.codeclan.example.magic_farm.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "animal_types")
public class AnimalType {

    @Column(name = "animalName")
    String animalName;

    @Column(name = "imgSrc")
    String imgSrc;

    @Column(name = "animalMaxWidth")
    int animalMaxWidth;

    @Column(name = "animalMaxHeight")
    int animalMaxHeight;

    @Column(name = "animalStatus")
    String animalStatus;

    @Column(name = "animalType")
    String animalType;




    @JsonIgnoreProperties("rooms")
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "roomType")
    private List<Room> rooms;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;


    public AnimalType(String animalName, String imgSrc, int animalMaxWidth, int animalMaxHeight, String animalType, List<Room> rooms) {
        this.animalName = animalName;
        this.imgSrc = imgSrc;
        this.animalMaxWidth = animalMaxWidth;
        this.animalMaxHeight = animalMaxHeight;
        this.animalStatus = "animal";
        this.animalType = animalType;
    }

    public AnimalType(){

    }


    public String getAnimalName() {
        return animalName;
    }

    public void setAnimalName(String animalName) {
        this.animalName = animalName;
    }

    public String getImgSrc() {
        return imgSrc;
    }

    public void setImgSrc(String imgSrc) {
        this.imgSrc = imgSrc;
    }

    public int getAnimalMaxWidth() {
        return animalMaxWidth;
    }

    public void setAnimalMaxWidth(int animalMaxWidth) {
        this.animalMaxWidth = animalMaxWidth;
    }

    public int getAnimalMaxHeight() {
        return animalMaxHeight;
    }

    public void setAnimalMaxHeight(int animalMaxHeight) {
        this.animalMaxHeight = animalMaxHeight;
    }

    public String getAnimalStatus() {
        return animalStatus;
    }

    public void setAnimalStatus(String animalStatus) {
        this.animalStatus = animalStatus;
    }

    public String getAnimalType() {
        return animalType;
    }

    public void setAnimalType(String animalType) {
        this.animalType = animalType;
    }
}
