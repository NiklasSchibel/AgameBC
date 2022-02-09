// import "../Gallery.scss"
import {useEffect, useState} from "react";
import {fetchRandomAnimal} from "../services/RequestService";
import Card from "../components/Card";

export default function Level2Page(){

    const [animal, setAnimal] = useState<any>([]);

    useEffect( () => {
        fetchRandomAnimal().then(data => setAnimal(data)).catch(e => console.log(e.message))
    },[])

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