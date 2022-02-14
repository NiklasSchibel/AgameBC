import React, {useContext, useEffect} from "react";
import {LevelContext} from "../context/LevelProvider";
import {useNavigate} from "react-router-dom";
import {POINTSNEEDEDFORLEVEL2, POINTSNEEDEDFORLEVEL3} from "../constants/Constants";

export default function AgameBC() {

    const {levelOfPlayer, setNewlevelOfPlayer} = useContext(LevelContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (levelOfPlayer === undefined) {
            setNewlevelOfPlayer(1)
            navigate("/Level1")
        } else if (levelOfPlayer > POINTSNEEDEDFORLEVEL3) {
            navigate("/Level3")
        } else if (levelOfPlayer > POINTSNEEDEDFORLEVEL2) {
            navigate("/Level2")
        } else {
            navigate("/Level1")
        }
        // eslint-disable-next-line
        }, [])

    return (<div className="smileImage">

    </div>)
}
