package de.neuefische.backend.dto;

import de.neuefische.backend.models.AnimalData;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
public class AnimalDTO {

    String id;
    String deName;
    String imageLink;
    String startingLetter;


    public AnimalDTO(AnimalData animalData) {
        super();
        this.id = animalData.getId();
        this.deName = animalData.getDeName();
        this.imageLink = animalData.getImageLink();
        this.startingLetter = animalData.getStartingLetter();
    }

}


