import './Level1Page.scss';
import {ChangeEventHandler, useEffect, useState} from "react";
import {TextField} from "@mui/material";

export default function Level1Page(){
    const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const [randomLetter, setRandomLetter] = useState<string>("")

    const LANGUAGE: string = "de-de";
    const STANDARDTEXTVOICE: string = "das ist der Buchstabe ";
    const [inputText, setInputText] = useState<string>('');

    useEffect(() => {
        setRandomLetter(ALPHABET[Math.floor(Math.random() * ALPHABET.length)])
    }, [])


    //todo: set key later in environment
    const key: string = "a7aae25de0b446c7adc2571316a7ddfc&";
    const srcString: string = "https://api.voicerss.org/?key="
        + key + "hl=" + LANGUAGE + "&src="
        + STANDARDTEXTVOICE + randomLetter + ".schreibe ihn selbst";

    // //todo: this works for the first time clicking on the picture than only clicking on the play button
    // const onClickHandleCard = () => {
    //     setText(srcString);
    // }

    const handleChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
        = (event) => {
        event.preventDefault();
        setInputText(event.target.value);
    }

    return(
        <div className="Level1Page">
            <div>levelpoints and time Left to play Feature</div>
            <h3>so far this is Level1Page</h3>
            <h1>{randomLetter}</h1>
            <audio src={srcString} controls/>
            <TextField
                id="outlined"
                label={randomLetter}
                value = {inputText}
                onChange={handleChange}
            />
        </div>
    )
}