import {useState} from "react";

export default function UseLevelStates(){

    const [randomLetterForTask, setRandomLetterForTask] = useState<string>(" ")

    return{
            randomLetterForTask,
            setRandomLetterForTask
    }
}