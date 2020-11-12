package com.example.springangular.repositories;

import com.example.springangular.entities.Persona;
import org.springframework.data.repository.CrudRepository;

public interface PersonaRepository extends CrudRepository<Persona,Integer> {


}
