import "./Card.scss"
import React, {useState} from "react";
import AnswerButtonChoice from "./AnswerButtonChoice";

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
    const firstLetterOfAnimalName = getFirstLetter(animal_type);
    const [text, setText] = useState<string>('');


    //before with constants leaded to Bug that there were choices shuffling
    // const firstRandomLetter = generateNewRandomLetter(ALPHABET, firstLetterOfAnimalName);
    // const secondRandomLetter = generateNewRandomLetter(ALPHABET, firstLetterOfAnimalName, firstRandomLetter);



    //todo: set key later in environment
    const key: string = "a7aae25de0b446c7adc2571316a7ddfc&";
    const srcString: string = "https://api.voicerss.org/?key="
        + key + "hl=" + LANGUAGE + "&src="
        + STANDARDTEXTVOICE + getFirstWord(animal_type);




    // useEffect(() => {
    //     setChoices([firstLetterOfAnimalName,firstRandomLetter,secondRandomLetter])
    //     setChoicesShuffled(shuffleArray(choices))
    // }, [])



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



    //todo: this works for the first time clicking on the picture than only clicking on the play button
    const onClickHandleCard = () => {
        setText(srcString);
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
            <AnswerButtonChoice
                animal_type={animal_type}
                firstLetterOfAnimalName={firstLetterOfAnimalName}
            />
            {/*<div className="ButtonsSelection">*/}
            {/*    <Button onClick={() => onClickHandleButton(choicesShuffled[0])}*/}
            {/*            className="ButtonText" variant="outlined" color="success">{choicesShuffled[0]}</Button>*/}
            {/*    <Button onClick={() => onClickHandleButton(choicesShuffled[1])}*/}
            {/*            className="ButtonText" variant="outlined" color="success">{choicesShuffled[1]}</Button>*/}
            {/*    <Button onClick={() => onClickHandleButton(choicesShuffled[2])}*/}
            {/*            className="ButtonText" variant="outlined" color="success">{choicesShuffled[2]}</Button>*/}
            {/*</div>*/}
            {/*{AnswerTrueComponent(answer)}*/}
        </div>
    )
}