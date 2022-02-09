import {createContext, ReactElement, useState} from "react";

export interface LevelContextType {
    levelOfPlayer?: number
    setNewlevelOfPlayer: (newLevel: number) => void
}

export const LevelContext = createContext<LevelContextType>({
    setNewlevelOfPlayer: () => {
        throw Error("defaut setNewLevel function has not been initialized")
    }
})

export default function LevelProvider({children}: { children: ReactElement<any, any> }) {

    const [levelOfPlayer, setLevelOfPlayer] = useState<number>(1)

    const setNewlevelOfPlayer = (newLevel: number) => {
        setLevelOfPlayer(newLevel)
    }

    return (
        <LevelContext.Provider value={{levelOfPlayer: levelOfPlayer, setNewlevelOfPlayer: setNewlevelOfPlayer}}>
            {children}
        </LevelContext.Provider>
    )
}