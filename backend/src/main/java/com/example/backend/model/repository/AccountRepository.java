package com.example.backend.model.repository;

import com.example.backend.model.dao.AccountModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<AccountModel, Long> {
    AccountModel findByUsername(String username);
}
