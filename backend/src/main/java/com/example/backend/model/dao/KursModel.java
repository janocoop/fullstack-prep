package com.example.backend.model.dao;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class KursModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String kursName;

    @OneToMany
    private List<KursTagModel> kursTage;

}