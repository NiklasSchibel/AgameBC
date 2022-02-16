import {getResult} from "../services/RequestService";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../context/AuthProvider";
import {ResultsData} from "../models/ResultsData";
// @ts-ignore
import {TagCloud} from 'react-tagcloud';
import {LetterCount} from "../models/LetterCount";

export default function Results() {
    const {token, jwtDecoded} = useContext(AuthContext)
    const [results, setResults] = useState<LetterCount>({});

//todo: nur token mitschicken und im Backend über principal datenbankabfrage laufen lassen
    useEffect(() => {
        getResult("herbert", token)// todo : jwtDecoded?.sub || " " instead of "herbert" later
            .then(result => {
                console.log(result)
                return result;
            }) //setResults(result.lettersCount)
            .then(result => setResults(result.lettersCount))
            .catch(error => console.log(error))
        // eslint-disable-next-line
    }, [])


    // todo: commment this in later
    // if (jwtDecoded?.sub === undefined) {
    //     console.warn("most likely getResult Request was made with an empty string or rather blank space")
    //     return (<div>
    //         kein Spieler angemeldet, deswegen können keine results angezeigt werden!
    //     </div>)
    // }
    console.log("results:", results)
    console.log(results.a)

    const data = [
        {value: 'A', count: results.a},
        // {value: 'B', count: results?.lettersCount.get("B")},
        // {value: 'C', count: results?.lettersCount.get("C")},
        // {value: 'D', count: results?.lettersCount.get("D")},
        {value: 'E', count: 2},
        {value: 'F', count: 3},
        {value: 'G', count: 1},
    ]
    // @ts-ignore
    return (<div>
        <TagCloud
            minSize={10}
            maxSize={120}
            tags={data}
            onClick={(tag: { value: any; }) => alert(`'${tag.value}' was selected!`)}
        />
        {/*<div>{results?.get("A")}</div>*/}
        {/*<div>{results.get("A")}</div>*/}
    </div>)
}