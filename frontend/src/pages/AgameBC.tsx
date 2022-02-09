import Level2Page from "./Level2Page";
import Level1Page from "./Level1Page";
import {useContext, useEffect, useState} from "react";
import Level3Page from "./Level3Page";
import {LevelContext} from "../context/LevelProvider";

export default function AgameBC(){

    const {level, setNewLevel} = useContext(LevelContext)
    const [rightAnswer, setRightAnswer] = useState<string>("")

    useEffect( () => {
        setRightAnswer("")
    },[rightAnswer])

    if(level === undefined){
        setNewLevel(1)
        return<div>reload Page please</div>
    } else if(level < 5) {
        return <Level1Page
        rightAnswer={rightAnswer}
        setRightAnswer={setRightAnswer}
        />
    } else if(level<30) {
        return <Level2Page/>
    }
        else {
        return <Level3Page/>}

}