import "./Card.scss"
import React, {useState} from "react";

interface cardProps {
    key: string
    name: string
    id: string
    animal_type: string
    image_link: string
    latin_name: string
}

export default function Card(props: cardProps) {
    const [text, setText] = useState<string>('');
    const language: string = "de-de";
    //todo: set key later in environment
    const key: string = "a7aae25de0b446c7adc2571316a7ddfc&";

    const firstNameOfAnimal = props.latin_name.split(" ")[0];

    //todo: this works for the first time clicking on the picture than only clicking on the play button
    const onClickHandle = () => {
        setText(srcString);
    }

    //todo: images load to slow

    const srcString: string = "https://api.voicerss.org/?key="+key+"hl="+language+"&src=" + firstNameOfAnimal;
    return (
        <div onClick={onClickHandle} className="card">
            <img className="image" src={props.image_link} alt="Ein Bild"/>
            <React.Fragment>
                <h4>{firstNameOfAnimal}</h4>
                <audio autoPlay src={text} controls />
            </React.Fragment>
        </div>
    )
}