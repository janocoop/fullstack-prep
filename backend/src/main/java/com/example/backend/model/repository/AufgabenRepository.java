package com.example.backend.model.repository;

import com.example.backend.model.dao.KursAufgabenModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AufgabenRepository extends JpaRepository<KursAufgabenModel, Long> {


}
