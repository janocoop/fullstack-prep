package com.example.backend.controller;

import com.example.backend.model.dao.AccountModel;
import com.example.backend.model.dao.KursModel;
import com.example.backend.model.dto.AccountCreationRequest;
import com.example.backend.model.dto.KursCreationRequest;
import com.example.backend.model.dto.KursDeleteRequest;
import com.example.backend.model.dto.KursUpdateRequest;
import com.example.backend.services.AccountService;
import com.example.backend.services.KursService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping(path = "/api/kurse")
@RequiredArgsConstructor
public class KursController {


    private final KursService kursService;

    @GetMapping
    public List<KursModel> fetchAll() {
        return kursService.fetchAllKurse();
    }


    @PostMapping(path = "/createkurs")
    public KursModel createKurs(@RequestBody KursCreationRequest request) {
        return kursService.createKurs(request);
    }

    @PutMapping("/createkurs")
    public KursModel updateKurs(@RequestBody KursUpdateRequest request) {
        return kursService.updateKurs(request);
    }
    @DeleteMapping("/createkurs")
    public void deleteKurs(@RequestBody KursDeleteRequest request) {
        kursService.deleteKurs(request);
    }


}
