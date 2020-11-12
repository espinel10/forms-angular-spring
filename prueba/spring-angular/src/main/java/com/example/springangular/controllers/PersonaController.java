package com.example.springangular.controllers;
import com.example.springangular.entities.Persona;
import com.example.springangular.exception.ResourceNotFoundException;
import com.example.springangular.repositories.PersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600)
@RestController
@RequestMapping("/ejemplo")
public class PersonaController {
    @Autowired
    private PersonaRepository personaRepository;

    @GetMapping("/persona")
    public List<Persona> getAllPerson(){
        return (List<Persona>) personaRepository.findAll();
    }

    @GetMapping("persona/{id}")
    public ResponseEntity<Persona> getPersonaById(@PathVariable(value = "id") Integer personaId) throws ResourceNotFoundException {
    Persona persona=personaRepository.findById(personaId).orElseThrow(()->new ResourceNotFoundException("Persona not found for this id:: "+personaId)) ;
    return ResponseEntity.ok().body(persona);
    }

    @PostMapping("/persona")
    public Persona createPersona(@Validated @RequestBody Persona persona){
    return personaRepository.save(persona);
    }

    @PutMapping("/persona/{id}")
    public ResponseEntity<Persona> updatePersona(@PathVariable(value = "id") Integer personaId,
                                                 @Validated @RequestBody Persona personaDetails) throws ResourceNotFoundException{
        Persona persona=personaRepository.findById(personaId).orElseThrow(() -> new ResourceNotFoundException("persona not found for this id ::"+personaId));
        persona.setId(personaDetails.getId());
        persona.setName(personaDetails.getName());
        persona.setApellidos(personaDetails.getApellidos());
        final Persona updatePersona = personaRepository.save(persona);
        return ResponseEntity.ok(updatePersona);
    }
@DeleteMapping("/persona/{id}")
 public Map<String,Boolean>deletePersona(@PathVariable(value = "id") Integer personaId)
            throws ResourceNotFoundException{
        Persona persona=personaRepository.findById(personaId).orElseThrow(()->new ResourceNotFoundException("persona no encontrada mala mia "+personaId));
        personaRepository.delete(persona);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return response;
}






}
