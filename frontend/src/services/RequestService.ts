import axios from "axios";
import {LoginData} from "../models/LoginData";
import {ResultsData} from "../models/ResultsData";
import {letterObject} from "../models/letterObject";


export const loginRequest = (login: LoginData) =>
    axios.post(`/auth/login`, login)
        .then(response => response.data)
        .catch(function (error) {
                if (error.response.status === 400) {
                    alert("Bitte überprüfe dein Benutzername und dein Passwort")
                    console.log(error);
                } else if (error.request) {
                    alert("Server ist down, bitte später erneut probieren.")
                    console.log(error.request);
                } else {
                    alert("Ein unerwarteter Fehler ist aufgetreten, bitte später erneut probieren.")
                    console.log('Error', error.message);
                }
            }
        )


export const fetchRandomAnimal = (token?: string) =>
    axios.get('/api/animals/rand', token ? {
        headers: {
            "Authorization": "Bearer " + token
        }
    } : {})
        .then(response => response.data)
        .catch((error) => {
            console.log(error);
        })

export const sendResult = (userName: string, resultLetter: letterObject, token?: string) =>
    axios.post(`api/abc/results/${userName}`, resultLetter,token ? {
        headers: {
            "Authorization": "Bearer " + token
        }
    } : {})
        .then(()=>{console.log(resultLetter)})
        .catch((error) => {
            console.log(error)
        })

export const getResult = (userName: string, token?: string) =>
    axios.get(`api/abc/results/${userName}`, token ? {
        headers: {
            "Authorization": "Bearer " + token
        }
    } : {})
        .then(response => response.data)
        .catch((error) => {
            console.log(error)
        })
