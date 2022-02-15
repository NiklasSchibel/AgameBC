package de.neuefische.backend.controller;

import de.neuefische.backend.services.ResultsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("/api/abc/results")
public class ResultsController {

    private final ResultsService resultsService;

    public ResultsController(ResultsService resultsService) {
        this.resultsService = resultsService;
    }


//    @GetMapping(path = "/")
//    public ResponseEntity<List<AnimalData>> getAllShoppingListItemsMongo() {
//        List<AnimalData> allAnimals = animalService.findAllAnimals();
//        return ok(allAnimals);
//    }
//
//    @GetMapping(path = "/rand")
//    public ResponseEntity<AnimalData> getRandomAnimal() throws Exception {
//        Optional<AnimalData> animal = animalService.getRandomAnimal();
//        if (animal.isPresent()) {
//            return new ResponseEntity<>(animal.get(), HttpStatus.OK);
//        } else {
//            throw new Exception("random animal could not be found");
//        }
//    }
//
//
//    @GetMapping(path = "/{id}")
//    public ResponseEntity<AnimalData> getAnimalByID(@PathVariable("id") String id) throws Exception {
//        Optional<AnimalData> animal = animalService.getAnimalByID(id);
//        if (animal.isPresent()) {
//            return new ResponseEntity<>(animal.get(), HttpStatus.OK);
//        } else {
//            throw new Exception("animal ID was not found in MongoDB");
//        }
//    }
}



