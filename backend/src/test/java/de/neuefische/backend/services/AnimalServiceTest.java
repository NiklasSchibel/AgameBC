package de.neuefische.backend.services;

import de.neuefische.backend.controller.AnimalController;
import de.neuefische.backend.dto.AnimalDTO;
import de.neuefische.backend.exception.AnimalDoesNotExistException;
import de.neuefische.backend.models.AnimalData;
import de.neuefische.backend.repositories.AnimalRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.List;
import java.util.Optional;

import static java.util.Arrays.asList;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

class AnimalServiceTest {

    private final AnimalRepository animalRepository = Mockito.mock(AnimalRepository.class);
    private final AnimalService animalService = new AnimalService(animalRepository);

    @BeforeEach
    void setUp() {

    }


    @Test
    @DisplayName("Simple return of all animals should work")
    void shouldReturnAllAnimals() {

        //Given
        AnimalData animal1 = new AnimalData("1", "Affe", "imageLink1", "A");
        AnimalData animal2 = new AnimalData("2", "Elefant", "imageLink2", "E");
        List<AnimalData> underTestAnimalDataList = List.of(
                animal1,
                animal2
        );
        List<AnimalDTO> underTestAnimalDataDTOList = List.of(
                new AnimalDTO(animal1),
                new AnimalDTO(animal2)
        );

        //When
        Mockito.when(animalRepository.findAll())
                .thenReturn(underTestAnimalDataList);

        //Then
        assertEquals(underTestAnimalDataDTOList, animalService.findAllAnimals());
    }

    @Nested
    class get_animalsByID_service {

        @Test
        void shouldReturnAnimalByID() {
            //Given
            AnimalData animal1 = new AnimalData("1", "Affe", "imageLink1", "A");
            AnimalDTO animal1DTO = new AnimalDTO(animal1);

            //When
            Mockito.when(animalRepository.findById("1"))
                    .thenReturn(Optional.of(animal1));

            //Then
            assertEquals(animal1DTO, animalService.getAnimalByID("1"));

        }

        @Test
        @DisplayName("Ensure correct handling of AnimalDoesNotExistException")
        void shouldThrowErrorWhenAnimalByIDSearchDoesNotExist() {
            //Given
            String id = "111";

            //When
            Mockito.when(animalRepository.findById(id))
                    .thenThrow(new AnimalDoesNotExistException("Animal with id " + id + " not found!"));

            //Then
            try {
                Optional<AnimalData> returnedValue = animalRepository.findById(id);
                fail("Expected exception was not thrown");
            }catch (Exception e){
                assertTrue(e instanceof AnimalDoesNotExistException);
                assertEquals(e.getMessage(), "Animal with id " + id + " not found!");
            }
        }
    }

    @Test
    void getRandomAnimal() {
    }
}
