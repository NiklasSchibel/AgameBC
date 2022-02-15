package de.neuefische.backend.controller;

import de.neuefische.backend.dto.AnimalDTO;
import de.neuefische.backend.models.AnimalData;
import de.neuefische.backend.services.AnimalService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.apache.juli.logging.Log;
import org.apache.juli.logging.LogFactory;
import java.util.List;
import java.util.Optional;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("/api/animals")
public class AnimalController {
    private static final Log LOG  = LogFactory.getLog(AnimalController.class);
    private final AnimalService animalService;

    public AnimalController(AnimalService animalService) {
        this.animalService = animalService;
    }


    @GetMapping(path = "/")
    public List<AnimalDTO> getAllAnimals() {
        LOG.info("get all animals from mongoDB");
        return animalService.findAllAnimals();
    }

    @GetMapping(path = "/rand")
    public AnimalDTO getRandomAnimal() throws Exception {
        LOG.info("get one random animal from Database");
        return animalService.getRandomAnimal();
    }


    @GetMapping(path = "/{id}")
    public AnimalDTO getAnimalByIDfromDB(@PathVariable("id") String id) throws Exception {
        LOG.info("get one animal by id from Database");
        return animalService.getAnimalByID(id);
    }
}



