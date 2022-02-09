import "./stylingPages/Level3.scss"
import React, {useEffect, useState} from 'react';
import DragableItemsLevel3 from "../components/DragableItemsLevel3";
import {fetchRandomAnimal} from "../services/RequestService";
import NavBar from "../components/NavBar";


export default function Level3() {
    const [animal, setAnimal] = useState<any>([]);


    useEffect(() => {
        fetchRandomAnimal().then(data => setAnimal(data)).catch(e => console.log(e.message))
    }, [])

    if (!animal) {
        return <div className="gallery">
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

