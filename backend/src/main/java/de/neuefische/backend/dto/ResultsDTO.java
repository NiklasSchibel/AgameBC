package de.neuefische.backend.dto;

import de.neuefische.backend.models.AnimalData;
import de.neuefische.backend.models.ResultsData;
import lombok.Data;

@Data
public class ResultsDTO {

    String id;
    int a;
    int b;
    int c;



    public ResultsDTO(ResultsData resultsData) {
        super();
        this.id = resultsData.getId();
        this.a = resultsData.getA();
        this.b = resultsData.getB();
        this.c = resultsData.getC();
    }

}
