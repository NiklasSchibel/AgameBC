import Level2 from "./Level2";
import Level1 from "./Level1";
import {useContext} from "react";
import Level3 from "./Level3";
import {LevelContext} from "../context/LevelProvider";

export default function AgameBC() {

    const {levelOfPlayer, setNewlevelOfPlayer} = useContext(LevelContext)

    if (levelOfPlayer === undefined) {
        setNewlevelOfPlayer(1)
        return <div>reload Page please</div>
    } else if (levelOfPlayer < 1) {
        return <Level1
        />
    } else if (levelOfPlayer < 10) {
        return <Level2/>
    } else {
        return <Level3/>
    }

}