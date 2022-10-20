import { useContext, useEffect, useState } from "react"
import axios from "axios"

import { habitsLink } from "../Constants/urls"
import { UserContext } from "../API/user"

export default function HabitsPage(){
    const {user} = useContext(UserContext)
    console.log(user)
    const [habits, setHabits] = useState()
    const [habitsChange, sethabitsChange]= useState(false)

    useEffect(() => {
        const URL = `${habitsLink}`
        axios.get(URL,{ headers: {Authorization: `Bearer ${user.token}`}})
            .then(res => {
                setHabits(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])
    
    
    
    return null
}