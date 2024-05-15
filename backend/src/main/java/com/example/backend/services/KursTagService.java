package com.example.backend.services;

import com.example.backend.model.dao.KursTagModel;
import com.example.backend.model.repository.KursTagRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class KursTagService {
  private final KursTagRepository kursTagRepository;
    public KursTagModel fetchById(String dayId) {
        return kursTagRepository.findById(Long.valueOf(dayId))
                .orElse(null);
    }
}
