import {getResult} from "../services/RequestService";
import {useContext} from "react";
import {AuthContext} from "../context/AuthProvider";

export default function Results() {
    const {token} = useContext(AuthContext)

    const data = getResult("klaus", token).then(result => result.data)

    console.log(data)

    return (<div>

    </div>)
}