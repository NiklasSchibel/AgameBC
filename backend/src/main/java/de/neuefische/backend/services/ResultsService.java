package de.neuefische.backend.services;

import de.neuefische.backend.dto.ResultsDTO;
import de.neuefische.backend.exception.ResultDoesNotExistException;
import de.neuefische.backend.repositories.ResultsRepository;
import org.springframework.stereotype.Service;


@Service
public class ResultsService {


    private final ResultsRepository resultsRepository;

    public ResultsService(ResultsRepository resultsRepository) {
        this.resultsRepository = resultsRepository;
    }


    public ResultsDTO getResultsByName(String id) throws ResultDoesNotExistException {
        return new ResultsDTO(resultsRepository.findById(id)
                .orElseThrow(() -> new ResultDoesNotExistException("no results found for user: " + id)));
    }

}