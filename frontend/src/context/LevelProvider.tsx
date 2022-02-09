import {createContext, ReactElement, useState} from "react";

export interface LevelContextType {
    level?: number
    setNewLevel: (newLevel: number) => void
}

export const LevelContext = createContext<LevelContextType>({
    setNewLevel: () => {
        throw Error("defaut setNewLevel function has not been initialized")
    }
})

export default function LevelProvider({children}: { children: ReactElement<any, any> }) {

    const [level, setLevel] = useState<number>(1)

    const setNewLevel = (newLevel: number) => {
        setLevel(newLevel)
    }

    return (
        <LevelContext.Provider value={{level, setNewLevel}}>
            {children}
        </LevelContext.Provider>
    )
}