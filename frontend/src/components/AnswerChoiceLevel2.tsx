import "./stylingComponents/AnswerChoiceLevel2.scss"
import {Button} from "@mui/material";
import React, {useContext, useEffect, useState} from "react";
import smile from "../images/iconSmile.png";
import {LevelContext} from "../context/LevelProvider";


interface AnswerButtonChoiceProps {
    animal_name: string
    firstLetterOfAnimalName: string
}

export default function AnswerChoiceLevel2(props: AnswerButtonChoiceProps) {
    const {levelOfPlayer, setNewlevelOfPlayer} = useContext(LevelContext)
    const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const [answer, setAnswer] = useState<boolean>(false);
    const [firstRandomLetter, setFirstRandomLetter] = useState<string>("");
    const [secondRandomLetter, setSecondRandomLetter] = useState<string>("");
    const choices: string[] = [props.firstLetterOfAnimalName, firstRandomLetter, secondRandomLetter]
    const [choicesShuffled, setChoicesShuffled] = useState<Array<string | undefined>>([]);

    useEffect(() => {
        setFirstRandomLetter(generateNewRandomLetter(ALPHABET,
            props.firstLetterOfAnimalName));
        setSecondRandomLetter(generateNewRandomLetter(ALPHABET,
            props.firstLetterOfAnimalName,
            firstRandomLetter));
        setChoicesShuffled(shuffleArray(choices));
    }, [])


    /**
     * returns a random Capital Letter of the Alphabet which is different from other provided letters
     * @params ALPHABET CONST in Capital Letters, Letter from which the return value should differ from
     * */
    function generateNewRandomLetter(alphabet: string, letter: string, secondLetter?: string) {
        const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        while (randomLetter === letter || randomLetter === secondLetter) {
            const nextRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
            if (nextRandomLetter !== letter && nextRandomLetter !== secondLetter) {
                return nextRandomLetter;
            }
        }
        return randomLetter;
    }


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


    /**
     * this function checks if clicked Button is the correct answer and setAnswer true, if that is the case
     * @param letter
     */
    const onClickHandleButton = (letter: string | undefined) => {
        if (letter === props.firstLetterOfAnimalName) {
            setAnswer(true)
            setTimeout(function () {
                setAnswer(false)
                levelUp()
            }, 3000);
        } else {
            const newReducedChoices = [...choicesShuffled]
            const index = choicesShuffled.indexOf(letter)
            newReducedChoices[index] = undefined;
            setChoicesShuffled(newReducedChoices);
        }
    }

    /**
     * this function returns a smile when
     * @param givenAnswer is true
     */
    const AnswerTrueComponent = () => {
        return (
            <div>
                <img className="SmileImage" src={smile} alt = "smile"/>
            </div>)
    }

    const levelUp = () => {
        if (levelOfPlayer === undefined) {
            setNewlevelOfPlayer(1)
        } else {
            const newLevel: number = levelOfPlayer + 1;
            setNewlevelOfPlayer(newLevel)
        }
    }

    return (
        <div className="ButtonsAndAnswerTrueComponent">
            <div className="ButtonsSelection">
                {choicesShuffled[0] ? <Button onClick={() => onClickHandleButton(choicesShuffled[0])}
                                              className="ButtonText" variant="outlined"
                                              color="success">{choicesShuffled[0]}</Button> : <div/>}
                {choicesShuffled[1] ? <Button onClick={() => onClickHandleButton(choicesShuffled[1])}
                                              className="ButtonText" variant="outlined"
                                              color="success">{choicesShuffled[1]}</Button> : <div/>}
                {choicesShuffled[2] ? <Button onClick={() => onClickHandleButton(choicesShuffled[2])}
                                              className="ButtonText" variant="outlined"
                                              color="success">{choicesShuffled[2]}</Button> : <div/>}
            </div>
            {answer && <AnswerTrueComponent/>}

        </div>
    )
}