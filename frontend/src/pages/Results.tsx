import {getResult} from "../services/RequestService";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../context/AuthProvider";
import {ResultsData} from "../models/ResultsData";
// @ts-ignore
import {TagCloud} from 'react-tagcloud';

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

    const data = [
        {value: 'A', count: results?.a},
        {value: 'B', count: results?.b},
        {value: 'C', count: results?.c},
        {value: 'D', count: 10},
        {value: 'E', count: 2},
        {value: 'F', count: 3},
        {value: 'G', count: 1},
    ]
    return (<div>
        <TagCloud
            minSize={10}
            maxSize={120}
            tags={data}
            onClick={(tag: { value: any; }) => alert(`'${tag.value}' was selected!`)}
        />
    </div>)
}