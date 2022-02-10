import Level2 from "./Level2";
import Level1 from "./Level1";
import {useContext} from "react";
import Level3 from "./Level3";
import {LevelContext} from "../context/LevelProvider";
// import {useNavigate} from "react-router-dom";

export default function AgameBC() {

    const {levelOfPlayer, setNewlevelOfPlayer} = useContext(LevelContext)
    // const navigate = useNavigate()
    if (levelOfPlayer === undefined) {
        setNewlevelOfPlayer(1)
        return<Level1></Level1>
    } else if (levelOfPlayer < 3) {
        return<Level1></Level1>
    } else if (levelOfPlayer < 6) {
        return<Level2></Level2>
    } else if (levelOfPlayer < 10) {
        return<Level3></Level3>
    } else {
        return <div>no more levels</div>
    }

}