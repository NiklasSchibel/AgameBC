import React, {useContext, useEffect, useState} from "react";
import '../App.css';
import NavBar from "../components/NavBar";
import {AuthContext} from "../context/AuthProvider";

export default function TestPageAfterLogin() {
    const {jwtDecoded} = useContext(AuthContext)
    //@ts-ignore
    const padTime = time => {
        return String(time).length === 1 ? `0${time}` : `${time}`;
    };

    //@ts-ignore
    const format = time => {
        // Convert seconds into minutes and take the whole part
        const minutes = Math.floor(time / 60);

        // Get the seconds left after converting minutes
        const seconds = time % 60;

        //Return combined values as string in format mm:ss
        return `${minutes}:${padTime(seconds)}`;
    };
    const [counter, setCounter] = React.useState(120);
    React.useEffect(() => {
        let timer:any;
        if (counter > 0) {
            timer = setTimeout(() => setCounter(c => c - 1), 1000);
        }

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [counter]);






    //returns just different formats of time maybe usefull for further feature
    //@ts-ignore
    const DateNumber: number = jwtDecoded?.exp * 1000
    //@ts-ignore
    const ExpirationDate = new Date(DateNumber);

    const now = new Date();


    return (
        <div className="App">
            <NavBar/>
            <header className="App-header">
                TestPage for Login
            </header>
            <div>Expiration Token number:</div>
            <div> {DateNumber}</div>
            <div>Expiration Date.toTimeString:</div>
            <div> {ExpirationDate.toTimeString()}</div>
            <div>Expiration Date.toString:</div>
            <div> {ExpirationDate.toString()}</div>
            <div>Expiration Token number:</div>
            <div>{ExpirationDate.getTime()}</div>
            <div>Date now date:</div>
            <div>{now.toString()}</div>
            <div>Date now number:</div>
            <div>{now.getTime()}</div>
            <div>Date now diff number:</div>
            <div>{ExpirationDate.getTime() - now.getTime()}</div>
            <div className="App">
                {counter === 0 ? "Time over" : <div>Countdown: {format(counter)}</div>}
            </div>
        </div>
    )
}