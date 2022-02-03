import Card from "./Card";
import "./Gallery.scss"
import {useEffect, useState} from "react";
import {fetch10Characters, fetch1Characters} from "../services/RequestService";

export default function Gallery(){
    const [Animals10, setAnimals10] = useState<any>([]);
    const [Animals1, setAnimals1] = useState<any>([]);

    useEffect( () => {
        setupAnimals1().catch(e => console.log(e.message))
        setupAnimals10().catch(e => console.log(e.message))
    },[])


    const setupAnimals1 = () => fetch1Characters().then(data => setAnimals1(data))
    const setupAnimals10 = () => fetch10Characters().then(data => setAnimals10(data))

    if (!Animals10){
        return <div className="gallery">
            <h1>loading...</h1>
        </div>
    }

    return(
        <div className="gallery">
            {/*{Animals10.map((animal: any, index: number) => (*/}
                <Card
                    id = {Animals1.id}
                    key = {Animals1.id}
                    image_link = {Animals1.image_link}
                    name = {Animals1.name}
                    animal_type = {Animals1.animal_type}
                    latin_name = {Animals1.latin_name}
                />
            {/*))}*/}
        </div>
    )
}