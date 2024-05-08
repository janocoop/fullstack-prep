package com.example.backend.controller;

import com.example.backend.model.dao.KursModel;
import com.example.backend.model.dto.KursCreationRequest;
import com.example.backend.model.dto.KursDeleteRequest;
import com.example.backend.model.dto.KursUpdateRequest;
import com.example.backend.services.KursService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/themen")
@RequiredArgsConstructor
public class ThemeController {

    private final ThemenService themenService;

    @GetMapping



    @PostMapping(path = "/createthema")
}

