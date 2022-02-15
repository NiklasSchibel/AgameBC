package de.neuefische.backend.controller;

import de.neuefische.backend.dto.ResultsDTO;
import de.neuefische.backend.models.ResultsData;
import de.neuefische.backend.services.ResultsService;
import org.apache.juli.logging.Log;
import org.apache.juli.logging.LogFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("/api/abc/results")
public class ResultsController {
    private static final Log LOG  = LogFactory.getLog(AnimalController.class);
    private final ResultsService resultsService;

    public ResultsController(ResultsService resultsService) {
        this.resultsService = resultsService;
    }


    @GetMapping(path = "/{userName}")
    @ResponseBody
    public ResultsDTO getAllResultsForUserName(@PathVariable ("userName") String userName) {
        L
     return resultsService.getResultsByName(userName);
    }
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



