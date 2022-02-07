package de.neuefische.backend.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AnimalData {

    String id;
    String name;
    String image_url;
    String startingLetter;
}
