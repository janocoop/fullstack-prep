package com.example.backend.services;

import com.example.backend.controller.AccountController;
import com.example.backend.model.dto.AccountCreationRequest;
import com.example.backend.model.dao.AccountModel;
import com.example.backend.model.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class AccountService {

    private final AccountRepository accountRepository;

    public AccountModel fetchAccount() {
        AccountModel accountModel = new AccountModel();
        accountModel.setUsername("test");
        accountModel.setPassword("Test2");
    return accountModel;
    }

    public boolean authenticateUser(String username, String password){
        AccountModel accountModel = accountRepository.findByUsername(username);
        if (accountModel != null) {
            return accountModel.getPassword().equals(password);
        }
        return false;
    }

    public List<AccountModel> fetchAllAccounts() {

        return accountRepository.findAll();
    }

    public AccountModel createAccount(AccountCreationRequest request) {
        String username = request.getUsername();
        String password = request.getPassword();

        AccountModel accountModel = new AccountModel();
        accountModel.setUsername(username);
        accountModel.setPassword(password);
        return accountRepository.save(accountModel);
    }

    public AccountModel updateAccount(AccountModel update) {
       return accountRepository.save(update);
    }

    public void deleteAccount(AccountModel delete) {
         accountRepository.delete(delete);
    }

    public String generateAuthToken(String username) {
        return null;
    }
}
