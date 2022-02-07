import {createContext, ReactElement, useState} from "react";
import jwt_decode from 'jwt-decode'

export interface AuthContextType {
    token?: string
    jwtDecoded?: { sub?: string, exp?: number }
    setJwt: (jwt: string) => void
    level?: number
    setNewLevel: (newLevel: number) => void
}

export const AuthContext = createContext<AuthContextType>({
    setJwt: (data) => {
        throw Error("defaut function has not been initialized")
    },
    setNewLevel: () => {
        throw Error("defaut function has not been initialized")
    }
})

export default function AuthProvider({children}: { children: ReactElement<any, any> }) {

    const [token, setToken] = useState<string>()
    const [jwtDecoded, setJwtDecoded] = useState({})
    const [level, setLevel] = useState<number>(1)

    const setJwt = (jwt: string) => {
        setToken(jwt)
        setJwtDecoded(jwt_decode(jwt.toString()))
    }

    const setNewLevel = (newLevel: number) => {
        setLevel(newLevel)
    }

    return (
        <AuthContext.Provider value={{token, jwtDecoded, setJwt, level, setNewLevel}}>
            {children}
        </AuthContext.Provider>
    )
}