import Level2Page from "./Level2Page";
import Level1Page from "./Level1Page";
import {useContext, useEffect, useState} from "react";
import Level3Page from "./Level3Page";
import {LevelContext} from "../context/LevelProvider";

export default function AgameBC(){

    const {levelOfPlayer, setNewlevelOfPlayer} = useContext(LevelContext)
    const [rightAnswer, setRightAnswer] = useState<string>("")

    useEffect( () => {
        setRightAnswer("")
    },[rightAnswer])

    if(levelOfPlayer === undefined){
        setNewlevelOfPlayer(1)
        return<div>reload Page please</div>
    } else if(levelOfPlayer < 5) {
        return <Level1Page
        rightAnswer={rightAnswer}
        setRightAnswer={setRightAnswer}
        />
    } else if(levelOfPlayer<8) {
        return <Level2Page/>
    }
        else {
        return <Level3Page/>}

}