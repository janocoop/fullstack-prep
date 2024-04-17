package com.example.backend.controller;

import com.example.backend.model.dto.AccountCreationRequest;
import com.example.backend.model.dao.AccountModel;
import com.example.backend.services.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/accounts")
@RequiredArgsConstructor
public class AccountController {

    private final AccountService accountService;

    @GetMapping
    public List<AccountModel> fetchAll(){
        return accountService.fetchAllAccounts();
    }


    @PostMapping(path = "/create")
    public AccountModel createAccount(@RequestBody AccountCreationRequest request) {
        return accountService.createAccount(request);
    }

    @PutMapping("/create")
    public AccountModel updateAccount(@RequestBody AccountModel accountModel) {
        return accountService.updateAccount(accountModel);
    }
    @DeleteMapping("/create")
    public void deleteAccount(@RequestBody AccountModel accountModel) {
        accountService.deleteAccount(accountModel);
    }


}
