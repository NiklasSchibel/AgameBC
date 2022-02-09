import {Reorder} from "framer-motion"
import {Dispatch, useContext, useEffect, useState} from "react";
import {LevelContext} from "../context/LevelProvider";

interface DragableItemsProps {
    key: string
    animalName: string
    id: string
    imageLink: string
}

export default function DragableItems(props: DragableItemsProps) {
    const letterString: String = new String(props.animalName); // the constructor leads to a warning but no work around found yet
    // const letterstring:string = props.animalName; // does not work because of "can not read properties of undefined"
    const letterArray = letterString.split(''); //this is an string[]
    // const [letters, setLetters] = useState(letterArray)
    const [choicesShuffled, setChoicesShuffled] = useState<Array<string>>([]);
    // const [answerTrue, setAnswerTrue] = useState<boolean>(false);
    const {level,setNewLevel} = useContext(LevelContext)

    useEffect(() => {
        setChoicesShuffled(shuffleArray(letterArray))
    }, [])


// put this in onChange prop of renderComponten
    useEffect(() => {
        checkIfArraysAreTheSame(choicesShuffled, letterArray)
        // console.log(letters)
        // console.log(choicesShuffled)
        // console.log(letterArray)
    }, [choicesShuffled])

    /**
     * shuffle Function from W3 Schools
     * @param array of type string
     * returns the array in shuffeld order
     * */
    function shuffleArray(array: string[]) {
        let curId = array.length;
        while (0 !== curId) {
            let randId = Math.floor(Math.random() * curId);
            curId -= 1;
            let tmp = array[curId];
            array[curId] = array[randId];
            array[randId] = tmp;
        }
        return array;
    }

    function checkIfArraysAreTheSame(stringArray1: string[], stringArray2: string[]): boolean {
        return (JSON.stringify(stringArray1) === JSON.stringify(stringArray2))
    }

    function handleChange(){
        console.log(choicesShuffled)
        console.log("handleChange run")
    }

    return (
        <div>
            <h4>{props.animalName}</h4>
            <Reorder.Group as="ol" axis="y" values={choicesShuffled} onChange={handleChange} onReorder={setChoicesShuffled}>
                {choicesShuffled.map((item, index) => (
                    <Reorder.Item key={item+index} value={item}>
                        {item}
                    </Reorder.Item>
                ))}
            </Reorder.Group>
        </div>
    )
}