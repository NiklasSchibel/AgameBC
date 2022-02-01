import {ReactElement, useContext} from "react";
import {AuthContext} from "./AuthProvider";
import LoginPage from "../pages/LoginPage";

export default function RequireAuth({children}: { children: ReactElement<any, any> }) {

    const now = new Date();
    const {token, jwtDecoded} = useContext(AuthContext)


    function isExpirationValid ():boolean {
        //@ts-ignore
        const DateNumber = jwtDecoded?.exp * 1000;
        const ExpirationDate = new Date(DateNumber);
        const timeleft: number = ExpirationDate.getTime() - now.getTime()
        return (timeleft > 0)
    }

    if (jwtDecoded?.exp && isExpirationValid()) {
        return children;
    } else {
        return <LoginPage/>
    }

    // if (typeof jwtDecoded?.exp === 'number') {
    //     const DateNumber = jwtDecoded?.exp * 1000;
    //     const ExpirationDate = new Date(DateNumber);
    //     const timeleft: number = ExpirationDate.getTime() - now.getTime()
    //     if (timeleft > 0) {
    //         return children;
    //     }
    // } else {
    //     return <LoginPage/>;
    // }



    // if (typeof token ==='string') {
    //     return children;
    // } else {
    //     return <LoginPage/>
    // }

    // return (token ? children : <LoginPage/>)
}

