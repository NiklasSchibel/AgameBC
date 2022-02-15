package de.neuefische.backend.models;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "Results")
public class ResultsData {

    @NonNull
    @Id
    String id;

    int a;
    int b;
    int c;
}

