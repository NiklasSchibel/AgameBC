import './Level1Page.scss';
import React, {ChangeEventHandler, Dispatch, useContext, useEffect, useState} from "react";
import {TextField} from "@mui/material";
import smile from "../images/iconSmile.png";
import {LevelContext} from "../context/LevelProvider";
import NavBar from "../components/NavBar";

export interface Level1PageProps {
    rightAnswer: string
    setRightAnswer: Dispatch<React.SetStateAction<string>>
}

export default function Level1Page(props: Level1PageProps) {
    const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const LANGUAGE: string = "de-de"
    const STANDARDTEXTVOICE: string = "das ist der Buchstabe "

    const {levelOfPlayer, setNewlevelOfPlayer} = useContext(LevelContext)
    const [randomLetter, setRandomLetter] = useState<string>(" ")
    const [answer, setAnswer] = useState<boolean>(false)


    const [inputText, setInputText] = useState<string>("")


    useEffect(() => {
        setRandomLetter(ALPHABET[Math.floor(Math.random() * ALPHABET.length)])
    }, [])


    //todo: set key later in environment
    const key: string = "a7aae25de0b446c7adc2571316a7ddfc&";
    const srcString: string = "https://api.voicerss.org/?key="
        + key + "hl=" + LANGUAGE + "&src="
        + STANDARDTEXTVOICE + randomLetter + ".schreibe ihn in dem Feld unten selbst";


    const handleChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
        = (event) => {
        event.preventDefault();
        const requiredLetter:string = randomLetter;
        if(requiredLetter === event.target.value.toUpperCase()){
            setAnswer(true)
            setTimeout(function () {
                setAnswer(false)
                setRandomLetter(ALPHABET[Math.floor(Math.random() * ALPHABET.length)])
                levelUp()
            }, 3000);
            console.log("same letter true in on change function")
        }
        console.log("onChange function lief")
    }


    const levelUp = () => {
            if (levelOfPlayer === undefined) {
                setNewlevelOfPlayer(1)
            } else {
                const newLevel: number = levelOfPlayer + 1;
                setNewlevelOfPlayer(newLevel)
            }
        }


    /**
     * this function returns a smile when
     * @param givenAnswer is true
     */
    const AnswerTrueComponent = () => {
        return (
            <div>
                <img className="SmileImage" src={smile} alt="smile"/>
            </div>)
    }

    return (
        <div className="Level1Page">
            <NavBar></NavBar>
            <div>levelpoints and time Left to play Feature</div>
            <h1>{randomLetter}</h1>
            <audio src={srcString} controls/>
            <TextField
                id="outlined"
                placeholder={randomLetter}
                value={inputText}
                color="success"
                onChange={handleChange}
                type="text"
                inputProps={{
                    maxLength: 1
                }}
            />
            {answer && <AnswerTrueComponent/>}
        </div>
    )
}