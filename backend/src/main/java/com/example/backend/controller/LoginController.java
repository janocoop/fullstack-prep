package com.example.backend.controller;

import com.example.backend.model.dto.LoginRequest;
import com.example.backend.model.dto.LoginResponse;
import com.example.backend.services.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/login")
@RequiredArgsConstructor
public class LoginController {

    private final AccountService accountService;

    @PostMapping
    public LoginResponse login(@RequestBody LoginRequest request) {

        boolean isAuthenticated = accountService.authenticateUser(request.getUsername(), request.getPassword());

        if (isAuthenticated) {

            return new LoginResponse(true, "Login erfolgreich",  null);
        } else {

            return new LoginResponse(false, "Falscher Benutzername oder Passwort", null);
        }
    }
}
