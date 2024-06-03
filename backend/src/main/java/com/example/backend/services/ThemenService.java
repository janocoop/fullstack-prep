package com.example.backend.services;

import com.example.backend.controller.ThemaCreationRequest;
import com.example.backend.model.dao.KursAufgabenModel;
import com.example.backend.model.dao.KursLektionModel;
import com.example.backend.model.dao.KursModel;
import com.example.backend.model.dao.KursThemaModel;
import com.example.backend.model.dto.AufgabeCreationRequest;
import com.example.backend.model.dto.LektionCreationRequest;
import com.example.backend.model.dto.TaskUpdateRequest;
import com.example.backend.model.repository.KursThemaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ThemenService {

    private final KursThemaRepository kursThemaRepository;

    public List<KursThemaModel> loadAll() {
        return kursThemaRepository.findAll();

    }

    public KursThemaModel createThema(ThemaCreationRequest request) {
        KursThemaModel kursThemaModel = new KursThemaModel();
        kursThemaModel.setName(request.getThemaName());
        return kursThemaRepository.save(kursThemaModel);
    }

    public KursThemaModel loadById(String themeid) {
        return kursThemaRepository.findById(Long.valueOf(themeid)).orElse(null);
    }

    public KursThemaModel persist(KursThemaModel kursThemaModel) {
        return kursThemaRepository.save(kursThemaModel);
    }

    public KursThemaModel fetchById(Long id) {
        Optional<KursThemaModel> optionalThema = kursThemaRepository.findById(id);
        if (optionalThema.isEmpty()) throw new RuntimeException();

        return optionalThema.get();

    }

    public KursThemaModel createAufgabe(AufgabeCreationRequest request, String themeid) {
        KursThemaModel kursThemaModel = loadById(themeid);
        if (kursThemaModel == null) {
            throw new RuntimeException("Thema existiert nicht.");
        }
        KursAufgabenModel kursAufgabenModel = new KursAufgabenModel();
        kursAufgabenModel.setDescription(request.getDescription());
        kursAufgabenModel.setTitle(request.getTitle());
        kursThemaModel.addTask(kursAufgabenModel);
        return persist(kursThemaModel);
    }

    public KursThemaModel createLektion(LektionCreationRequest request, String themeid) {
        KursThemaModel kursThemaModel = loadById(themeid);
        if (kursThemaModel == null) {
            throw new RuntimeException("Thema existiert nicht.");
        }
        KursLektionModel kursLektionModel = new KursLektionModel();
        kursLektionModel.setContent(request.getContent());
        kursThemaModel.setLektion(kursLektionModel);
        return persist(kursThemaModel);
    }
    public KursThemaModel updateTask(TaskUpdateRequest taskUpdateRequest, String themeid) {

        KursThemaModel kursThemaModel = loadById(themeid);
        if (kursThemaModel == null) {
            throw new RuntimeException("Thema existiert nicht.");
        }
        List<KursAufgabenModel> aufgaben = kursThemaModel.getAufgaben();
        KursAufgabenModel kursAufgabenModel = aufgaben.get(taskUpdateRequest.getIndex());
        kursAufgabenModel.setAnswer(taskUpdateRequest.getAnswer());
        return kursThemaModel;
    }


}
