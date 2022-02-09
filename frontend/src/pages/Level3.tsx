import "./stylingPages/Level3.scss"
import React, {useContext, useEffect, useState} from 'react';
import DragableItemsLevel3 from "../components/DragableItemsLevel3";
import {fetchRandomAnimal} from "../services/RequestService";
import NavBar from "../components/NavBar";
import {LevelContext} from "../context/LevelProvider";


export default function Level3() {
    const [animal, setAnimal] = useState<any>([]);
    const {levelOfPlayer} =useContext(LevelContext)

    useEffect(() => {
        fetchRandomAnimal().then(data => setAnimal(data)).catch(e => console.log(e.message))
    }, [levelOfPlayer])

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

