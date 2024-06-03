package com.example.backend.services;

import com.example.backend.model.dao.KursModel;
import com.example.backend.model.dao.KursTagModel;
import com.example.backend.model.dto.KursCreationRequest;
import com.example.backend.model.dto.KursDeleteRequest;
import com.example.backend.model.dto.KursUpdateRequest;
import com.example.backend.model.repository.KursRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class KursService {


    private final KursRepository kursRepository;

    public KursModel updateKurs(KursUpdateRequest update) {
        Optional<KursModel> maybeKurs = kursRepository.findById(update.getKursID());
        return maybeKurs.map(kurs -> {
            // kurs.setKursTage(update.getKursTage());
            //kurs.setKursName(update.getKursName());
            return kursRepository.save(kurs);
        }).orElse(null);
    }

    public KursModel createKurs(KursCreationRequest request) {
        String kursName = request.getKursName();
        Long kursTage = request.getKursTage();

        KursModel kursModel = new KursModel();
        kursModel.setKursName(kursName);
        // kursModel.setKursAufgaben(kursAufgaben);
        //kursModel.setKursTage(kursTage);
        List<KursTagModel> kursTagModels = new ArrayList<>();
        for (int i = 0; i < kursTage; i++) {
            KursTagModel kursTagModel = new KursTagModel();
            kursTagModel.setKursTag("Tag " + (i+1));
            kursTagModels.add(kursTagModel);
        }
        kursModel.setKursTage(kursTagModels);

        return kursRepository.save(kursModel);
    }

    public void deleteKurs(KursDeleteRequest delete) {
        kursRepository.deleteById(delete.getId());
    }

    public KursModel fetchKurs() {
        KursModel kursModel = new KursModel();
        kursModel.setKursName("Nicolas");
        //  kursModel.setKursAufgaben("Test2");
        return kursModel;
    }

    public List<KursModel> fetchAllKurse() {
        return kursRepository.findAll();
    }

    public KursModel fetchById(Long id) {
        Optional<KursModel> optionalKurs = kursRepository.findById(id);
        if (optionalKurs.isEmpty()) throw new RuntimeException();

        return optionalKurs.get();
    }

    public void persist(KursModel kursModel) {
        kursRepository.save(kursModel);
    }
}
