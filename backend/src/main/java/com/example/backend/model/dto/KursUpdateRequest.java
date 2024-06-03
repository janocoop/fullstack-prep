package com.example.backend.model.dto;

import com.example.backend.model.dao.KursTagModel;
import lombok.Data;

import java.util.List;

@Data
public class KursUpdateRequest {
    private Long kursID;
    private String kursAufgabe;
    private String kursName;
    private String kursTage;
}
