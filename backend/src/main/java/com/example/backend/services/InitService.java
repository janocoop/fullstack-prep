

package com.example.backend.services;

import com.example.backend.model.dao.*;
import com.example.backend.model.repository.KursRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class InitService implements ApplicationListener<ApplicationReadyEvent> {

    private final KursRepository kursRepository;

    @Override
    public void onApplicationEvent(ApplicationReadyEvent event) {

        KursModel kursModel = new KursModel();
        kursModel.setKursName("java");
        KursTagModel kursTagModel = new KursTagModel();
        kursTagModel.setKursTag("Tag 1");
        KursThemaModel kursThemaModel = new KursThemaModel();
        KursLektionModel kursLektionModel = new KursLektionModel();
        kursLektionModel.setContent("test text");
        kursThemaModel.setLektion(kursLektionModel);
        KursAufgabenModel kursAufgabenModel = new KursAufgabenModel();
        kursAufgabenModel.setDescription("beschreibung");
        kursThemaModel.setAufgaben(List.of(kursAufgabenModel));
        kursTagModel.setKursThemen(List.of(kursThemaModel));
        kursModel.setKursTage(List.of(kursTagModel));

        kursRepository.save(kursModel);

    }


}

