import React, {useContext} from "react";
import '../App.css';
import NavBar from "../components/NavBar";
import {AuthContext} from "../context/AuthProvider";

export default function TestPageAfterLogin () {
    const {jwtDecoded} = useContext(AuthContext)

    //@ts-ignore
    const ExpirationDate = new Date(jwtDecoded?.exp * 1000);

    return (
        <div className="App">
            <NavBar/>
            <header className="App-header">
                TestPage for Login
            </header>
            <div>Expiration Token number:</div>
            <div> {jwtDecoded?.exp}</div>
            <div>Expiration Date:</div>
            <div> {ExpirationDate.toTimeString()}</div>
        </div>
    )
}