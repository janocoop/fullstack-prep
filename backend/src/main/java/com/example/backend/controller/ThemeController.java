package com.example.backend.controller;

import com.example.backend.model.dao.KursThemaModel;
import com.example.backend.services.ThemenService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/themen")
@RequiredArgsConstructor
public class ThemeController {

    private final ThemenService themenService;

    @GetMapping
    public List<KursThemaModel> fetchAll() {
        return themenService.loadAll();
    }

}

