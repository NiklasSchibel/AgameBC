import Level2Page from "./Level2Page";
import Level1Page from "./Level1Page";
import {useContext} from "react";
import {AuthContext} from "../context/AuthProvider";

export default function MainPage(){

    const {level, setNewLevel} = useContext(AuthContext)

    if(level === undefined){
        setNewLevel(1)
        return<div>reload Page please</div>
    } else if(level < 10) {
        return <Level2Page/>
    } else return <Level1Page/>

}