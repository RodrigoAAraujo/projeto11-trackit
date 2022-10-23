import { createContext, useState } from "react";

export const ProgressContext = createContext({})

export const ProgressProvider = (props)=>{
    const [progress, setProgress] = useState({})

    return(
        <ProgressContext.Provider value={{progress, setProgress}}>
            {props.children}
        </ProgressContext.Provider>
    )
}