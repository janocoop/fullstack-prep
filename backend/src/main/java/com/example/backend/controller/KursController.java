package com.example.backend.controller;

import com.example.backend.model.dao.AccountModel;
import com.example.backend.model.dao.KursModel;
import com.example.backend.model.dao.KursTagModel;
import com.example.backend.model.dao.KursThemaModel;
import com.example.backend.model.dto.AccountCreationRequest;
import com.example.backend.model.dto.KursCreationRequest;
import com.example.backend.model.dto.KursDeleteRequest;
import com.example.backend.model.dto.KursUpdateRequest;
import com.example.backend.services.AccountService;
import com.example.backend.services.KursService;
import com.example.backend.services.ThemenService;
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

    @GetMapping
    public List<KursModel> fetchAll() {
        return kursService.fetchAllKurse();
    }


    @PostMapping(path = "/createkurs")
    public KursModel createKurs(@RequestBody KursCreationRequest request) {
        return kursService.createKurs(request);
    }

    @PostMapping("/{kursId}/days/{dayId}/theme/create")
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
