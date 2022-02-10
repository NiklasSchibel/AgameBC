import "./stylingPages/Level3.scss"
import React, {useEffect, useState} from 'react';
import DragableItemsLevel3 from "../components/DragableItemsLevel3";
import {fetchRandomAnimal} from "../services/RequestService";
import NavBar from "../components/NavBar";
import {AnimalData} from "../models/AnimalData";
import {useNavigate} from "react-router-dom";


export default function Level3() {
    const [animal, setAnimal] = useState<AnimalData>();
    const navigate = useNavigate();

    useEffect(() => {
        fetchRandomAnimal().then(data => setAnimal(data)).catch(e => console.log(e.message))
        if (animal === undefined || animal.deName.length > 5){ navigate("/AGameBC")}
        // eslint-disable-next-line
    }, [])

    //todo check here if fetched animal is ok (length,letters) for DragAbleItems

    if (!animal) {
        return <div>
            <h1>loading...</h1>
        </div>
    }



    return (
        <div>
            <NavBar></NavBar>
            <div className={"Level3Page"}>
                <DragableItemsLevel3
                    id={animal.id}
                    key={animal.id}
                    imageLink={animal.imageLink}
                    animalName={animal.deName}
                />
            </div>
        </div>
    )
}

