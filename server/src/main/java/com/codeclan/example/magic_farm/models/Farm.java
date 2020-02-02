package com.codeclan.example.magic_farm.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

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

    @JsonIgnoreProperties("rooms")
    @Cascade(org.hibernate.annotations.CascadeType.DELETE)
    @OneToMany(mappedBy = "Farm", fetch = FetchType.LAZY)
    private List<Room> rooms;



    public Farm() {
        this.farmSize = new ArrayList<Integer>();
        this.rooms = new ArrayList<Room>();
    }

    public List<Integer> getFarmSize() {
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
