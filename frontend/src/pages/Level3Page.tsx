import "./Level3Page.scss"
import React, {useEffect, useState} from 'react';
import DragableItems from "../components/DragableItems";
import {fetchRandomAnimal} from "../services/RequestService";


export default function Level3Page() {
    const [animal, setAnimal] = useState<any>([]);


    useEffect( () => {
        fetchRandomAnimal().then(data => setAnimal(data)).catch(e => console.log(e.message))
    },[])

    if (!animal){
        return <div className="gallery">
            <h1>loading...</h1>
        </div>
    }

    return (
    <div>
        <DragableItems
            id = {animal.id}
            key = {animal.id}
            imageLink = {animal.imageLink}
            animalName = {animal.deName}
        />
    </div>
        )
}

