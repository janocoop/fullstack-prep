package com.example.backend.model.dao;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@Entity

public class KursThemaModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Embedded
    private KursLektionModel lektion;

    @ElementCollection
    private List<KursAufgabenModel> aufgaben = new ArrayList<>(0);

    private String name;


    public void addTask(KursAufgabenModel kursAufgabenModel) {
        this.aufgaben.add(kursAufgabenModel);
    }
}
