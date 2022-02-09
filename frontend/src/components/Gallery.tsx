import Card from "./Card";
import "./Gallery.scss"
import {useEffect, useState} from "react";
import {fetchRandomAnimal} from "../services/RequestService";

export default function Gallery(){
    const [animal, setAnimal] = useState<any>([]);
    const [rightAnswer,setRightAnswer] =useState<string>("");

    useEffect( () => {
        fetchRandomAnimal().then(data => setAnimal(data)).catch(e => console.log(e.message))
        setRightAnswer("")
    },[rightAnswer])

    if (!animal){
        return <div className="gallery">
            <h1>loading...</h1>
        </div>
    }

    return(
        <div className="gallery">
            {animal? <Card
                    id = {animal.id}
                    key = {animal.id}
                    imageLink = {animal.imageLink}
                    animalName = {animal.deName}
                /> : "No animal to show"}
        </div>
    )
}