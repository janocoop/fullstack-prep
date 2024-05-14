package com.example.backend.model.dao;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.engine.internal.Cascade;

import java.util.List;


@Entity
@Data
public class KursTagModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String kursTag;

    private String position;

    @OneToMany(cascade = CascadeType.ALL)
    private List<KursThemaModel> kursThemen;

public void addThema(KursThemaModel kursThemaModel) {
    this.kursThemen.add(kursThemaModel);

}

}
