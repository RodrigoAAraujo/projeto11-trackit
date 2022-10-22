import { createContext, useState } from "react";

export const HabitCreateContext = createContext({})

export const HabitProvider = (props)=>{
    const [habitCreation, setHabitCreation] = useState({name:"", days: []})

    return(
        <HabitCreateContext.Provider value={{habitCreation, setHabitCreation}}>
            {props.children}
        </HabitCreateContext.Provider>
    )
}