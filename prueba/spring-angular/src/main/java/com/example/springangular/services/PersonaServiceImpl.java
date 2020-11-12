package com.example.springangular.services;

import com.example.springangular.entities.Persona;
import com.example.springangular.repositories.PersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PersonaServiceImpl  implements  PersonaService{
    private PersonaRepository personaRepository;

    @Autowired
    public void setPersonaRepository(PersonaRepository personaRepository){
        this.personaRepository=personaRepository;
    }

    @Override
    public Iterable<Persona> listAllPersona() {
        return personaRepository.findAll();
    }

    @Override
    public Optional<Persona> getPersonaById(Integer id) {
        return personaRepository.findById(id);
    }

    @Override
    public Persona savePersona(Persona persona) {
        return personaRepository.save(persona);
    }

    @Override
    public void deletePersona(Integer id) {
    personaRepository.deleteById(id);
    }
}
