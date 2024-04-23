package com.example.backend.model.dto;

import lombok.Data;

@Data
public class KursCreationRequest {
    private String kursName;
    private String KursAufgabe;
    private String kursTage;
}
