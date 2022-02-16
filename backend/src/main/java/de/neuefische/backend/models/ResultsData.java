package de.neuefische.backend.models;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.HashMap;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "Results")
public class ResultsData {

    @NonNull
    @Id
    private String id;

    private HashMap<String, Integer> lettersCount;

    public ResultsData(@NonNull String id) {
        this.id = id;
        HashMap<String, Integer> lettersCountEmpty = new HashMap<>();
        lettersCountEmpty.put("a", 0);
        lettersCountEmpty.put("b", 0);
        lettersCountEmpty.put("c", 0);
        lettersCountEmpty.put("d", 0);
        lettersCountEmpty.put("e", 0);
        lettersCountEmpty.put("f", 0);
        lettersCountEmpty.put("g", 0);
        lettersCountEmpty.put("h", 0);
        lettersCountEmpty.put("i", 0);
        lettersCountEmpty.put("j", 0);
        lettersCountEmpty.put("k", 0);
        lettersCountEmpty.put("l", 0);
        lettersCountEmpty.put("m", 0);
        lettersCountEmpty.put("n", 0);
        lettersCountEmpty.put("o", 0);
        lettersCountEmpty.put("p", 0);
        lettersCountEmpty.put("q", 0);
        lettersCountEmpty.put("r", 0);
        lettersCountEmpty.put("s", 0);
        lettersCountEmpty.put("t", 0);
        lettersCountEmpty.put("u", 0);
        lettersCountEmpty.put("v", 0);
        lettersCountEmpty.put("w", 0);
        lettersCountEmpty.put("x", 0);
        lettersCountEmpty.put("y", 0);
        lettersCountEmpty.put("z", 0);
        this.lettersCount = lettersCountEmpty;

    }
}

