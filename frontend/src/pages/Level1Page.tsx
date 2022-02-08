import './Level1Page.scss';
import React, {ChangeEventHandler, useContext, useEffect, useState} from "react";
import {TextField} from "@mui/material";
import smile from "../images/iconSmile.png";
import {AuthContext} from "../context/AuthProvider";

export interface Level1PageProps {
}

export default function Level1Page(props: Level1PageProps) {
    const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const [randomLetter, setRandomLetter] = useState<string>("")
    const [inputText, setInputText] = useState<string>(" ");
    const [answer, setAnswer] = useState<boolean>(false);
    const {level, setNewLevel} = useContext(AuthContext)

    const LANGUAGE: string = "de-de";
    const STANDARDTEXTVOICE: string = "das ist der Buchstabe ";


    useEffect(() => {
        setRandomLetter(ALPHABET[Math.floor(Math.random() * ALPHABET.length)])
    }, [answer])

    useEffect(() => {
        checkTypedAnswer();
    }, [inputText])


    //todo: set key later in environment
    const key: string = "a7aae25de0b446c7adc2571316a7ddfc&";
    const srcString: string = "https://api.voicerss.org/?key="
        + key + "hl=" + LANGUAGE + "&src="
        + STANDARDTEXTVOICE + randomLetter + ".schreibe ihn in dem Feld unten selbst";

    // //todo: this works for the first time clicking on the picture than only clicking on the play button
    // const onClickHandleCard = () => {
    //     setText(srcString);
    // }

    const handleChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
        = (event) => {
        event.preventDefault();
        setInputText(event.target.value);

    }

    const checkTypedAnswer = () => {
        console.log("check was started")
        if (inputText === randomLetter) {
            console.log("check was right")
            if (level === undefined) {
                setNewLevel(1)
            } else {
                const newLevel: number = level + 1;
                setNewLevel(newLevel)
            }
            setTimeout(function () {
                setAnswer(true)
            }, 2000);
        } else {
        console.log("checkedTypedAnswer war falsch")
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
            <div>levelpoints and time Left to play Feature</div>
            <h3>so far this is Level1Page</h3>
            <h1>{randomLetter}</h1>
            <audio src={srcString} controls/>
            <TextField
                id="outlined"
                placeholder={randomLetter}
                // label={randomLetter}
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