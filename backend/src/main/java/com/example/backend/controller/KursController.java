package com.example.backend.controller;

import com.example.backend.model.dao.*;
import com.example.backend.model.dto.*;
import com.example.backend.services.*;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;


@RestController
@RequestMapping(path = "/api/kurse")
@RequiredArgsConstructor
public class KursController {


    private final KursService kursService;
    private final ThemenService themenService;
    private final KursTagService kursTagService;

    private final AufgabenService aufgabenService;

    @PostMapping(path = "/{kursId}/days/{dayId}/themen/{themeid}/task/create")
    public KursAufgabenModel createTask(
            @RequestBody AufgabeCreationRequest request,
            @PathVariable("kursid") String kursId,
            @PathVariable("dayid") String dayId,
            @PathVariable("themeid") String themeid
    ) {
        return aufgabenService.createAufgabe(request, themeid);
    }


    @GetMapping
    public List<KursModel> fetchAll() {
        return kursService.fetchAllKurse();
    }

    @GetMapping({"/{kursId}/days/{dayId}"})
    public KursTagModel fetchKursTag(@PathVariable("kursId") String kursId, @PathVariable("dayId") String dayId) {
        return kursTagService.fetchById(dayId);
    }


    @PostMapping(path = "/createkurs")
    public KursModel createKurs(@RequestBody KursCreationRequest request) {
        return kursService.createKurs(request);
    }

    @PostMapping("/{kursId}/days/{dayId}/themen/create")
    public KursThemaModel createThema(@RequestBody ThemaCreationRequest request, @PathVariable("kursId") String kursId, @PathVariable("dayId") String dayId) {
        KursModel kursModel = kursService.fetchById(Long.valueOf(kursId));
        if (kursModel == null) {
            return null;
        }
        List<KursTagModel> kursTage = kursModel.getKursTage();

        for (KursTagModel kursTag : kursTage) {
            if (Objects.equals(kursTag.getId(), Long.valueOf(dayId))) {
                KursThemaModel thema = themenService.createThema(request);
                kursTag.addThema(thema);
                kursService.persist(kursModel);
                return thema;
            }
        }
        return null;
    }


    @PutMapping("/createkurs")
    public KursModel updateKurs(@RequestBody KursUpdateRequest request) {
        return kursService.updateKurs(request);
    }

    @DeleteMapping("/createkurs")
    public void deleteKurs(@RequestBody KursDeleteRequest request) {
        kursService.deleteKurs(request);
    }

    @GetMapping("/{id}")
    public KursModel getKurs(@PathVariable Long id) {
        return kursService.fetchById(id);
    }

}
