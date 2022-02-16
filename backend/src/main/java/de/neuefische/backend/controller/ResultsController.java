package de.neuefische.backend.controller;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import de.neuefische.backend.services.JWTUtils;
import de.neuefische.backend.models.ResultsData;
import de.neuefische.backend.services.ResultsService;
import org.apache.juli.logging.Log;
import org.apache.juli.logging.LogFactory;
import org.springframework.web.bind.annotation.*;


// throw response status exceptions for put and post mapping and work with try catch


@RestController
@RequestMapping("/api/abc/results")
public class ResultsController {
    private static final Log LOG = LogFactory.getLog(ResultsController.class);
    private final ResultsService resultsService;
    private final JWTUtils jwtutils = new JWTUtils();

    public ResultsController(ResultsService resultsService) {
        this.resultsService = resultsService;
    }


    @GetMapping(path = "/{userName}")
    @ResponseBody
    public ResultsData getAllResultsForUser(@PathVariable("userName") String userName) {
        LOG.info("user from token:" ); // jwtutils.extractUserName(token) , //todo: geht noch nicht
//        LOG.info(token);
        LOG.info("get all results for user" + userName);
        return resultsService.getResultsByName(userName);
    }

    @PostMapping(path = "/{userName}")
    public String sendLetterResultToBackend(@PathVariable("userName") String userName, @RequestBody String letter) {
        LOG.info("send one letter " + letter + ", result for user " + userName + "to backend");
        resultsService.sentLetterResultToDB(letter, userName);
        return "nice, request with letter: " + letter;
    }

//    @PostMapping(path = "/create/{userName}")
//    public String sendDBEntry(@PathVariable("userName") String userName) {
//        LOG.info("send HashMapToBD for user " + userName + "to DB");
//        resultsService.sendDBEntry(userName);
//        return "nice, request to DB for creating HashMap for:" + userName;
//    }
}



