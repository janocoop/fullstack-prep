package com.example.backend.services;

import com.example.backend.model.dao.KursAufgabenModel;
import com.example.backend.model.dao.KursThemaModel;
import com.example.backend.model.dto.AufgabeCreationRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AufgabenService {
    private final ThemenService themenService;


    public KursAufgabenModel createAufgabe(AufgabeCreationRequest request, String themeid) {
        KursThemaModel kursThemaModel = themenService.loadById(themeid);
        if(kursThemaModel == null){
            throw new RuntimeException("Thema existiert nicht.");
        }
        KursAufgabenModel kursAufgabenModel = new KursAufgabenModel();
        kursAufgabenModel.setDescription(request.getDescription());
        kursAufgabenModel.setTitle(request.getTitle());
        kursThemaModel.addTask(kursAufgabenModel);
        themenService.persist(kursThemaModel);
        return kursAufgabenModel;
    }
}
