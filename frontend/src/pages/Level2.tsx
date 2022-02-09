import "./Level2.scss"
import {useContext, useEffect, useState} from "react";
import {fetchRandomAnimal} from "../services/RequestService";
import Card from "../components/Card";
import {LevelContext} from "../context/LevelProvider";

export default function Level2(){

    const [animal, setAnimal] = useState<any>([]);
    const {levelOfPlayer} = useContext(LevelContext)

    useEffect( () => {
        fetchRandomAnimal().then(data => setAnimal(data)).catch(e => console.log(e.message))
    },[levelOfPlayer])

    if (!animal){
        return <div className="gallery">
            <h1>loading...</h1>
        </div>
    }

    return(
        <div className="Level2Page">
            {animal? <Card
                id = {animal.id}
                key = {animal.id}
                imageLink = {animal.imageLink}
                animalName = {animal.deName}
            /> : "No animal to show"}
        </div>
    )
}