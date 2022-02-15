import {getResult} from "../services/RequestService";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../context/AuthProvider";
import {ResultsData} from "../models/ResultsData";

export default function Results() {
    const {token, jwtDecoded} = useContext(AuthContext)
    const [results, setResults] = useState<ResultsData>();


    useEffect(() => {
        getResult(jwtDecoded?.sub || " ", token)
            .then(result => setResults(result))
            .catch(error => console.log(error))
        // eslint-disable-next-line
    }, [])

    if (jwtDecoded?.sub === undefined) {
        console.warn("most likely getResult Request was made with an empty string or rather blank space")
        return (<div>
            kein Spieler angemeldet, deswegen können keine results angezeigt werden!
        </div>)
    }

    console.log(results)


    return (<div>
        {results?.a}
    </div>)
}