import "./Card.scss"
import React, {useEffect, useState} from "react";
import {Button} from "@mui/material";

interface cardProps {
    key: string
    name: string
    id: string
    animal_type: string
    image_link: string
    latin_name: string
}

export default function Card(props: cardProps) {
    const {animal_type, image_link} = props

    const LANGUAGE: string = "de-de";
    const STANDARDTEXTVOICE: string = "Ich heiße ";
    const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const firstLetterOfAnimalName = getFirstLetter(animal_type);
    const [text, setText] = useState<string>('');
    const [firstRandomLetter, setFirstRandomLetter] = useState<string>("");
    const [secondRandomLetter, setSecondRandomLetter] = useState<string>("");
    const [answer, setAnswer] = useState<boolean>(false);
    const [choices, setChoices] = useState<Array<string>>([]);
    const [choicesShuffled, setChoicesShuffled] = useState<Array<string>>([]);
    //before with constants leaded to Bug that there were choices shuffling
    // const firstRandomLetter = generateNewRandomLetter(ALPHABET, firstLetterOfAnimalName);
    // const secondRandomLetter = generateNewRandomLetter(ALPHABET, firstLetterOfAnimalName, firstRandomLetter);
    // const choices: string[] = [firstLetterOfAnimalName, firstRandomLetter, secondRandomLetter]
    // const choicesShuffled: string[] = shuffleArray(choices);

    //todo: set key later in environment
    const key: string = "a7aae25de0b446c7adc2571316a7ddfc&";
    const srcString: string = "https://api.voicerss.org/?key="
        + key + "hl=" + LANGUAGE + "&src="
        + STANDARDTEXTVOICE + getFirstWord(animal_type);


    useEffect(() => {
        setFirstRandomLetter(generateNewRandomLetter(ALPHABET, firstLetterOfAnimalName));
        setSecondRandomLetter(generateNewRandomLetter(ALPHABET, firstLetterOfAnimalName, firstRandomLetter));
        setChoices([firstLetterOfAnimalName,firstRandomLetter,secondRandomLetter]);
        setChoicesShuffled(shuffleArray(choices));
    }, [firstLetterOfAnimalName])

    // useEffect(() => {
    //     setChoices([firstLetterOfAnimalName,firstRandomLetter,secondRandomLetter])
    //     setChoicesShuffled(shuffleArray(choices))
    // }, [])


    /**
     * shuffle Function from W3 Schools
     * @param array of type string
     * returns the array in shuffeld order
     * */
    function shuffleArray(array: string[]) {
        let curId = array.length;
        // There remain elements to shuffle
        while (0 !== curId) {
            // Pick a remaining element
            let randId = Math.floor(Math.random() * curId);
            curId -= 1;
            // Swap it with the current element.
            let tmp = array[curId];
            array[curId] = array[randId];
            array[randId] = tmp;
        }
        return array;
    }

    /**
     * returns a new string with the first word of the sentence provided
     * @param sentence
     * */
    function getFirstWord(sentence: string): string {
        if (sentence !== undefined && sentence.includes(" ")) {
            return sentence.split(" ")[0];
        } else {
            return sentence;
        }
    }

    /**
     * returns the first letter of the word provided
     * @param word
     * */
    function getFirstLetter(word: string): string {
        if (word !== undefined && word.length > 2) {
            return word.slice(0, 1);
        } else {
            return word;
        }
    }

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


    //todo: this works for the first time clicking on the picture than only clicking on the play button
    const onClickHandleCard = () => {
        setText(srcString);
    }

    /**
     * this function checks if clicked Button is the correct answer and setAnswer true, if it is the case
     * @param string
     */
    const onClickHandleButton = (string: string) => {
        if (string === firstLetterOfAnimalName) {
            setAnswer(true)
        }
    }

    /**
     * this function returns a smile when
     * @param givenAnswer is true
     */
    const AnswerTrueComponent = (givenAnswer: boolean) => {
        if (givenAnswer) {
            return (
                <div>
                    "happy":)
                </div>)
        }
    }


    //todo: images load to slow

    // if (!Animals1){
    //     return <div className="gallery">
    //         <h1>loading...</h1>
    //     </div>
    // }

    return (
        <div onClick={onClickHandleCard} className="card">
            <img className="image" src={image_link} alt="Ein Bild"/>
            <React.Fragment>
                <h4>{getFirstWord(animal_type)}</h4>
                <audio autoPlay src={text} controls/>
            </React.Fragment>
            <div className="ButtonsSelection">
                <Button onClick={() => onClickHandleButton(choicesShuffled[0])}
                        className="ButtonText" variant="outlined" color="success">{choicesShuffled[0]}</Button>
                <Button onClick={() => onClickHandleButton(choicesShuffled[1])}
                        className="ButtonText" variant="outlined" color="success">{choicesShuffled[1]}</Button>
                <Button onClick={() => onClickHandleButton(choicesShuffled[2])}
                        className="ButtonText" variant="outlined" color="success">{choicesShuffled[2]}</Button>
            </div>
            {AnswerTrueComponent(answer)}
        </div>
    )
}