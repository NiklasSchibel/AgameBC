import "./Card.scss"
import React, {useState} from "react";
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
    const [text, setText] = useState<string>('');
    const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const firstLetterOfAnimalName = getFirstLetter(animal_type);
    const firstRandomLetter = generateNewRandomLetter(ALPHABET, firstLetterOfAnimalName);
    const secondRandomLetter = generateNewRandomLetter(ALPHABET, firstLetterOfAnimalName, firstRandomLetter);
    // const firstButtonField =
    // const secondButtonField =
    // const thirdButtonField =

    //todo: set key later in environment
    const key: string = "a7aae25de0b446c7adc2571316a7ddfc&";

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
    const onClickHandle = () => {
        setText(srcString);
    }


    //todo: images load to slow

    const srcString: string = "https://api.voicerss.org/?key=" + key + "hl=" + LANGUAGE + "&src=" + STANDARDTEXTVOICE + getFirstWord(animal_type);
    return (
        <div onClick={onClickHandle} className="card">
            <img className="image" src={image_link} alt="Ein Bild"/>
            <React.Fragment>
                <h4>{getFirstWord(animal_type)}</h4>
                <audio autoPlay src={text} controls/>
            </React.Fragment>

            <div className="ButtonsSelection">
                <Button className="ButtonText" variant="outlined" color="success">{firstLetterOfAnimalName}</Button>
                <Button className="ButtonText" variant="outlined" color="success">{firstRandomLetter}</Button>
                <Button className="ButtonText" variant="outlined" color="success">{secondRandomLetter}</Button>
            </div>
        </div>
    )
}