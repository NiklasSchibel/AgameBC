package de.neuefische.backend.services;

import de.neuefische.backend.BackendApplication;
import de.neuefische.backend.models.AnimalData;
import de.neuefische.backend.repositories.AnimalRepository;
import de.neuefische.backend.repositories.ResultsRepository;
import org.apache.juli.logging.Log;
import org.apache.juli.logging.LogFactory;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class ResultsService {

    private static final Log LOG = LogFactory.getLog(BackendApplication.class);

    private final ResultsRepository resultsRepository;

    Random random = new Random();

    public ResultsService(ResultsRepository resultsRepository) {
        this.resultsRepository = resultsRepository;
    }

//    public List<AnimalData> findAllAnimals() {
//        return animalRepository.findAll();
//    }
//
//    public Optional<AnimalData> getAnimalByID(String id) {
//        return animalRepository.findById(id);
//
//    }
//
//    public Optional<AnimalData> getRandomAnimal() {
//        int min = 1;
//        int max = animalRepository.findAll().size()-1;
//        int value = random.nextInt(max + min) + min;
//        String searchID = Integer.toString(value);
//        return animalRepository.findById(searchID);
//    }
}