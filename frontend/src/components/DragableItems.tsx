import { Reorder } from "framer-motion"
import {Dispatch, useState} from "react";

interface DragableItemsProps{
    key: string
    animalName: string
    id: string
    imageLink: string
    rightAnswer: string
    setRightAnswer:  Dispatch<React.SetStateAction<string>>
}

export default function DragableItems(props:DragableItemsProps) {
    const [items, setItems] = useState([0, 1, 2, 3])
    const letterArray = Array.of(props.animalName)
    const letterArrayMap = new Map(JSON.parse(JSON.stringify([...letterArray])));

    console.log("letterArray:",letterArray)
    // console.log("LetterArrayMap", letterArrayMap)

    return (
        <div>
            <h4>{props.animalName}</h4>
        <Reorder.Group axis="y" values={items} onReorder={setItems}>
            {items.map(item => (
                <Reorder.Item key={item} value={item}>
                    {item}
                </Reorder.Item>
            ))}
        </Reorder.Group>
        </div>
            )
}