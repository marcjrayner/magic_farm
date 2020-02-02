package com.codeclan.example.magic_farm.controllers;

import com.codeclan.example.magic_farm.repositories.AnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/choices")
public class ChoiceController {
    @Autowired
    AnimalRepository animalRepository;
}