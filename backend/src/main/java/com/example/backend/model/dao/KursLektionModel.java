package com.example.backend.model.dao;

import jakarta.persistence.*;
import lombok.Data;


@Data
public class KursLektionModel {
@Column(length = 2000)
    private String content;

}
