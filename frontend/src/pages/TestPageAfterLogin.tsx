import React, {useContext} from "react";
import '../App.css';
import NavBar from "../components/NavBar";
import {AuthContext} from "../context/AuthProvider";

export default function TestPageAfterLogin () {
    const {jwtDecoded} = useContext(AuthContext)
    //@ts-ignore
    const DateNumber: number = jwtDecoded?.exp *1000
    //@ts-ignore
    const ExpirationDate = new Date(DateNumber);

    //paseInt wahrscheinlich falsch
    // const ExpirationNumber = parseInt(ExpirationDate.toString());

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
        </div>
    )
}