import Level2Page from "./Level2Page";
import Level1Page from "./Level1Page";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../context/AuthProvider";
import Level3Page from "./Level3Page";

export default function MainPage(){

    const {level, setNewLevel} = useContext(AuthContext)
    const [rightAnswer, setRightAnswer] = useState<string>("")

    useEffect( () => {
        setRightAnswer("")
    },[rightAnswer])

    if(level === undefined){
        setNewLevel(1)
        return<div>reload Page please</div>
    } else if(level < 2) {
        return <Level1Page
        rightAnswer={rightAnswer}
        setRightAnswer={setRightAnswer}
        />
    } else if(level<3) {
        return <Level2Page/>
    }
        else {
        return <Level3Page/>}

}