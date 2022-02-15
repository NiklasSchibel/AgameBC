package de.neuefische.backend.services;

import de.neuefische.backend.BackendApplication;
import de.neuefische.backend.dto.ResultsDTO;
import de.neuefische.backend.exception.ResultDoesNotExistException;
import de.neuefische.backend.models.ResultsData;
import de.neuefische.backend.repositories.ResultsRepository;
import org.apache.juli.logging.Log;
import org.apache.juli.logging.LogFactory;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ResultsService {

    private static final Log LOG = LogFactory.getLog(BackendApplication.class);

    private final ResultsRepository resultsRepository;

    public ResultsService(ResultsRepository resultsRepository) {
        this.resultsRepository = resultsRepository;
    }


    public ResultsDTO getResultsByName(String id) throws ResultDoesNotExistException {
        return new ResultsDTO(resultsRepository.findById(id)
                .orElseThrow(() -> new ResultDoesNotExistException("no results found for user: " + id)));
    }

}