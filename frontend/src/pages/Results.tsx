import {getResult} from "../services/RequestService";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../context/AuthProvider";
import './stylingPages/ResultsPage.scss';
// @ts-ignore
import {TagCloud} from 'react-tagcloud';
import {LetterCount} from "../models/LetterCount";

export default function Results() {
    const {token} = useContext(AuthContext)
    const [results, setResults] = useState<LetterCount>({});

//todo: nur token mitschicken und im Backend über principal datenbankabfrage laufen lassen
    useEffect(() => {
        getResult("klaus", token)// todo : jwtDecoded?.sub || " " instead of "herbert" later
            .then(result => {
                console.log(result)
                return result;
            })
            .then(result => setResults(result.lettersCount))
            .catch(error => console.log(error))
        // eslint-disable-next-line
    }, [])

    console.log(token)


    // todo: commment this in later
    // if (jwtDecoded?.sub === undefined) {
    //     console.warn("most likely getResult Request was made with an empty string or rather blank space")
    //     return (<div>
    //         kein Spieler angemeldet, deswegen können keine results angezeigt werden!
    //     </div>)
    // }


    const data = [
        {value: 'A', count: results.A},
        {value: 'B', count: results.B},
        {value: 'C', count: results.C},
        {value: 'D', count: results.D},
        {value: 'E', count: results.E},
        {value: 'F', count: results.F},
        {value: 'G', count: results.G},
        {value: 'H', count: results.H},
        {value: 'I', count: results.I},
        {value: 'J', count: results.J},
        {value: 'K', count: results.K},
        {value: 'L', count: results.L},
        {value: 'M', count: results.M},
        {value: 'N', count: results.N},
        {value: 'O', count: results.O},
        {value: 'P', count: results.P},
        {value: 'Q', count: results.Q},
        {value: 'R', count: results.R},
        {value: 'S', count: results.S},
        {value: 'T', count: results.T},
        {value: 'U', count: results.U},
        {value: 'V', count: results.V},
        {value: 'W', count: results.W},
        {value: 'X', count: results.X},
        {value: 'Y', count: results.Y},
        {value: 'Z', count: results.Z},
    ]

    return (
        <div className="resultsPage">
            <TagCloud className="tagCloud"
                minSize={10}
                maxSize={120}
                tags={data}
                onClick={(tag: { value: any; }) => alert(`'${tag.value}' was selected!`)}
            />
        </div>)
}