package com.codeclan.example.magic_farm.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.awt.*;

@RepositoryRestResource
public interface ChoiceRepository extends JpaRepository<Choice, Long> {
}
