package com.example.backend.model.dto;

import lombok.Data;

@Data
public class AccountCreationRequest {
    private String username;
    private String password;
    private Long kursTage;

}
