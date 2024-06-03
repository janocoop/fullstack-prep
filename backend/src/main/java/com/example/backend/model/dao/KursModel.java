package com.example.backend.model.dao;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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

    @OneToMany(cascade = CascadeType.ALL)
    private List<KursTagModel> kursTage;

}
