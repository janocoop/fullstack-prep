package com.example.backend.model.repository;

import com.example.backend.model.dao.KursModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KursRepository extends JpaRepository<KursModel, Long> {
}
