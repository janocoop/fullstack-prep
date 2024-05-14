package com.example.backend.services;

import com.example.backend.controller.ThemaCreationRequest;
import com.example.backend.model.dao.KursThemaModel;
import com.example.backend.model.repository.KursThemaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

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
}
