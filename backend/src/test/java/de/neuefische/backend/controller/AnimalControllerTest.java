package de.neuefische.backend.controller;

import de.neuefische.backend.dto.AnimalDTO;
import de.neuefische.backend.models.AnimalData;
import de.neuefische.backend.models.LoginData;
import de.neuefische.backend.models.UserMongo;
import de.neuefische.backend.repositories.MongoUserRepository;
import de.neuefische.backend.services.AnimalService;
import de.neuefische.backend.services.MongoUserDetailsService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.Optional;

import static java.util.Arrays.asList;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
//@ExtendWith(MockitoExtension.class)
class AnimalControllerTest {

    private MockMvc mockMvc;
    private AnimalService animalService = Mockito.mock(AnimalService.class);

    private final WebClient webTestClient = WebClient.create();

    @LocalServerPort
    private int port;

    @MockBean
    private MongoUserRepository mongoUserRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;


    //Hilfsfunktionen
    private UserMongo setupUser() {
        return UserMongo.builder()
                .username("some-user")
                .password(passwordEncoder.encode("secretPassword"))
                .accountNonExpired(true)
                .rights(List.of((MongoUserDetailsService.AUTHORITY_API_READWRITE)))
                .credentialsNonExpired(true)
                .accountNonLocked(true)
                .enabled(true)
                .build();
    }


    @BeforeEach
    void setUp() {
        AnimalController controller = new AnimalController(animalService);
        mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    }


    @Nested
    class get_animals_controller {

        @Test
        void shouldReturnAllAnimals() throws Exception {
            Mockito.when(animalService.findAllAnimals())
                    .thenReturn(asList(new AnimalDTO(new AnimalData("1", "Affe", "test_link", "A"))
                            , new AnimalDTO(new AnimalData("2", "Elefant", "testlink2", "E"))
                            , new AnimalDTO(new AnimalData("3", "Maus", "testlink3", "M"))));

            mockMvc.perform(
                            get("/api/animals/")
                    ).andExpectAll(
                            status().isOk(),
                            content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(MockMvcResultMatchers
                            .jsonPath("$.size()").value(3))
                    .andExpect(MockMvcResultMatchers
                            .jsonPath("$.[0].id").value("1"))
                    .andExpect(MockMvcResultMatchers
                            .jsonPath("$.[1].deName").value("Elefant"))
                    .andExpect(MockMvcResultMatchers
                            .jsonPath("$.[2].id").value("3"))
            ;
        }

        @Test
        public void shouldTurnErrorIntoBadRequest() throws Exception {
            Mockito.when(animalService.findAllAnimals())
                    .thenThrow(new HttpServerErrorException(HttpStatus.INTERNAL_SERVER_ERROR));

            mockMvc.perform(
                    get("/api/animals/")
            ).andExpectAll(
                    status().isBadRequest()
            );

        }
    }


    @Test
    void shouldReturnAnRandomAnimal() {
        //Given
//        Mockito.when(animalService.getRandomAnimal())
//                .thenReturn(new AnimalDTO(new AnimalData("1", "Affe", "test_link", "A")));
        //When

        //Then
    }


    @Test
    void ShouldReturnAnimalByIDfromDB() throws Exception {

        //Given
        Mockito.when(mongoUserRepository
                        .findByUsername("some-user"))
                .thenReturn(Optional.of(setupUser()));
        Mockito.when(animalService.getAnimalByID("1"))
                .thenReturn(new AnimalDTO(new AnimalData("1", "Affe", "test_link", "A")));


        LoginData loginData = new LoginData("some-user", "secretPassword", 15);

        //WHEN
        ResponseEntity<String> login = webTestClient.post()
                .uri("http://localhost:" + port + "/auth/login")
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(loginData)
                .retrieve()
                .toEntity(String.class)
                .block();

        String token = login.getBody();

        //When
        ResponseEntity<AnimalDTO> animalTestDTO = webTestClient.get()
                .uri("http://localhost:" + port + "/api/animals/1")
                .header("Authorization", token)
                .retrieve()
                .toEntity(AnimalDTO.class)
                .block();

        //Then
        assertNotNull(animalTestDTO);
//            assertThat(animalTestDTO.getStatusCode(),is(HttpStatus.OK));


    }
}

