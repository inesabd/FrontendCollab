package net.javaguides.recom.controller;

import lombok.AllArgsConstructor;
import net.javaguides.recom.dto.PublicationDto;
import net.javaguides.recom.service.PublicationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/publications")
public class PublicationController {

    private PublicationService publicationService;

    // Création de Add User REST API
    @PostMapping
    public ResponseEntity<PublicationDto> createUser(@RequestBody PublicationDto publicationDto) {
        PublicationDto savedPublication = publicationService.createPublication(publicationDto);
        return new ResponseEntity<>(savedPublication, HttpStatus.CREATED);
    }

    // Création de Get Publication REST API
    @GetMapping("{id}")
    public ResponseEntity<PublicationDto> getPublicationById(@PathVariable("id") Long publicationId) {
        PublicationDto publicationDto = publicationService.getPublicationById(publicationId);
        return ResponseEntity.ok(publicationDto);
    }

    // Création de Get All Publication REST API
    @GetMapping
    public ResponseEntity<List<PublicationDto>> getAllPublications(){
        List<PublicationDto> publications = publicationService.getAllPublications();
        return ResponseEntity.ok(publications);
    }

    // Création de Update Publication REST API
    @PutMapping("{id}")
    public ResponseEntity<PublicationDto> updatePublication(@PathVariable("id") Long publicationId,
                                              @RequestBody PublicationDto updatedPublication){
        PublicationDto publicationDto = publicationService.updatePublication(publicationId, updatedPublication);
        return ResponseEntity.ok(publicationDto);
    }


    // Création de Delete Publication REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deletePublication(@PathVariable("id") Long publicationId){
        publicationService.deletePublication(publicationId);
        return ResponseEntity.ok("La publication a été supprimée avec succès !");
    }
}
