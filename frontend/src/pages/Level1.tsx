import './stylingPages/Level1.scss';
import React, {ChangeEventHandler, useContext, useEffect} from "react";
import {TextField} from "@mui/material";
import smile from "../images/iconSmile.png";
import {LevelContext} from "../context/LevelProvider";
import {useNavigate} from "react-router-dom";
import TimeLeftToPlayAndLevel from "../components/TimeLeftToPlayAndLevel";
import {ALPHABET, LANGUAGE, BASEURL_TTS, KEY} from "../constants/Constants";
import UseLevelStates from "../customHook/UseLevelStates";
import {sendResult} from "../services/RequestService";
import {AuthContext} from "../context/AuthProvider";

export default function Level1() {
    const {level1States} = UseLevelStates()
    const {
        randomLetterForTask,
        setRandomLetterForTask,
        answer,
        setAnswer,
        inputTextField,
        setInputTextField
    } = level1States
    const navigate = useNavigate()
    const {levelUp} = useContext(LevelContext)
    const {token, jwtDecoded} = useContext(AuthContext)

    const srcStringForVoiceRSS: string = BASEURL_TTS + KEY + LANGUAGE + "das ist der Buchstabe: " +
        randomLetterForTask + " schreibe ihn in das Feld unten selbst"

    useEffect(() => {
        setRandomLetterForTask(ALPHABET[Math.floor(Math.random() * ALPHABET.length)])
        // eslint-disable-next-line
    }, [])


    /**
     * this function checks the input value and if correct sets answer true(3sec) and levels up player
     */
    const handleChangeOfInputField: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
        = (event) => {
        event.preventDefault();
        if (randomLetterForTask === event.target.value.toUpperCase()) {
            setAnswer(true)
            sendResult(jwtDecoded?.sub || " ", randomLetterForTask, token).then(r => console.log(r))
            setInputTextField(randomLetterForTask)
            setTimeout(function () {
                setAnswer(false)
                levelUp()
                navigate("/AgameBC")
            }, 3000);
        }
    }


    /**
     * this function returns a smile when useState answer is true
     */
    const AnswerTrueComponent = () => {
        return (
            <div>
                <img className="SmileImage" src={smile} alt="smile"/>
            </div>)
    }

    return (
        <div>
            <TimeLeftToPlayAndLevel/>
            <div className="Level1Page">
                <h1>{randomLetterForTask}</h1>
                <audio src={srcStringForVoiceRSS} controls/>
                <TextField
                    id="outlined"
                    autoComplete="new-password"
                    value={inputTextField}
                    color="success"
                    placeholder={randomLetterForTask}
                    onChange={handleChangeOfInputField}
                    type="text"
                    inputProps={{
                        maxLength: 1,
                        form: {
                            autoComplete: 'new-password',
                        },
                    }}
                />
                {answer && <AnswerTrueComponent/>}
            </div>
        </div>
    )
}