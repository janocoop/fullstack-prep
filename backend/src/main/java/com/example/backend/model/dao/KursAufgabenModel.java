package com.example.backend.model.dao;

import jakarta.persistence.*;
import lombok.Data;

@Embeddable
@Data
public class KursAufgabenModel {

    private String title;

    private String description;

    private String answer;

}
