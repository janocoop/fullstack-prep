package com.example.backend.services;

import com.example.backend.model.dao.KursModel;
import com.example.backend.model.dto.KursCreationRequest;
import com.example.backend.model.dto.KursDeleteRequest;
import com.example.backend.model.dto.KursUpdateRequest;
import com.example.backend.model.repository.KursRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class KursService {


    private final KursRepository kursRepository;

    public KursModel updateKurs(KursUpdateRequest update) {
        Optional<KursModel> maybeKurs = kursRepository.findById(update.getKursID());
        return maybeKurs.map(kurs -> {
            kurs.setKursTage(List.of());
            kurs.setKursName(update.getKursName());
            kurs.setKursAufgaben(update.getKursAufgabe());
            return kursRepository.save(kurs);
        }).orElse(null);
    }

    public KursModel createKurs(KursCreationRequest request) {
        String kursName = request.getKursName();
        String kursAufgaben = request.getKursAufgabe();

        KursModel kursModel = new KursModel();
        kursModel.setKursName(kursName);
        kursModel.setKursAufgaben(kursAufgaben);
        return kursRepository.save(kursModel);
    }

    public void deleteKurs(KursDeleteRequest delete) {
        kursRepository.deleteById(delete.getId());
    }

    public KursModel fetchKurs() {
        KursModel kursModel = new KursModel();
        kursModel.setKursName("Nicolas");
        kursModel.setKursAufgaben("Test2");
        return kursModel;
    }

    public List<KursModel> fetchAllKurse() {
        return kursRepository.findAll();
    }
}
