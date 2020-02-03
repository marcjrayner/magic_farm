package com.codeclan.example.magic_farm.repositories;

import com.codeclan.example.magic_farm.models.Animal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface AnimalRepository extends JpaRepository<Animal, Long> {

}
