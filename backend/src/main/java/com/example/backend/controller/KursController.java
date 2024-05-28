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
    public KursThemaModel createTask(
            @RequestBody AufgabeCreationRequest request,
            @PathVariable("kursId") String kursId,
            @PathVariable("dayId") String dayId,
            @PathVariable("themeid") String themeid
    ) {
        return themenService.createAufgabe(request, themeid);
    }

    @PostMapping(path = "/{kursId}/days/{dayId}/themen/create")
    public KursThemaModel createThema(
            @RequestBody ThemaCreationRequest request,
            @PathVariable("kursId") String kursId,
            @PathVariable("dayId") String dayId
    ) {
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

    @PostMapping(path = "/{kursId}/days/{dayId}/themen/{themeid}/lektion/create")
    public KursThemaModel createLesson(
            @RequestBody LektionCreationRequest request,
            @PathVariable("kursId") String kursId,
            @PathVariable("dayId") String dayId,
            @PathVariable("themeid") String themeid
    ) {
        return themenService.createLektion(request, themeid);
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

    @GetMapping("/{kursId}/days/{dayId}/themen/{themeid}")
    public KursThemaModel getThema(@PathVariable("kursId") String kursId,
                                   @PathVariable("dayId") String dayId,
                                   @PathVariable("themeid") String themeid) {
        return themenService.fetchById(Long.valueOf(themeid));
    }

    @PostMapping("/{kursId}/days/{dayId}/themen/{themeid}/task/update")
    public KursThemaModel updateTask(@PathVariable("kursId") String kursId,
                                     @PathVariable("dayId") String dayId,
                                     @PathVariable("themeid") String themeid,
    @RequestBody TaskUpdateRequest taskUpdateRequest) {
return themenService.updateTask(taskUpdateRequest, themeid);
    }

    @PostMapping("/themen/{themeid}/task/submit/{title}/{answer}")
public KursThemaModel submitAnswer(@PathVariable("title") String title,
                                   @PathVariable("answer") String answer,
                                   @PathVariable("themeid") Long themeid) {

        return aufgabenService.submitAufgabe(themenService.fetchById(themeid), title, answer);
    }
}
