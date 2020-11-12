package com.example.springangular.services;

import com.example.springangular.entities.Persona;

import java.util.Optional;

public interface PersonaService {
    Iterable<Persona> listAllPersona();
    Optional<Persona> getPersonaById(Integer id);
    Persona savePersona(Persona persona);
    void deletePersona(Integer id);
}
