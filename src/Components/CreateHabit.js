import axios, { Axios } from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { BorderLightGray, White } from "../Constants/colors"
import { habitsLink } from "../Constants/urls"
import { UserContext } from "../API/user"
import { useContext } from "react"

import { HabitCreateContext } from "../API/habitCreation"

export default function CreateHabit({cancel, renderHabit}){
    const daysRender = [7,1,2,3,4,5,6]

    const {user} = useContext(UserContext)
    const {habitCreation, setHabitCreation} = useContext(HabitCreateContext)

    const [habit, setHabit] = useState(habitCreation.name)
    const [days, setDays] = useState(habitCreation.days)

    function sendHabit(){
        const URL = habitsLink
        
        const body = {
            name: habit,
            days: days
        }

        axios.post(URL, body, { headers: {Authorization: `Bearer ${user.token}`}})
            .then(() => {
                setHabitCreation({name:"", days: []})
                renderHabit(true)
                cancel(false)
            })
            .catch(err => {

            })

        //DisableButton
    }

    function cancelAdding(){
        const body = {
            name: habit,
            days: days
        }
        setHabitCreation(body)
        console.log(body)
        cancel(false)

    }

    return(
        <CreateHabitStyle>
            <input maxLength={50} type="text" required placeholder="nome do hábito" 
            onChange={(e) => setHabit(e.target.value)} value={habit}></input>
            <div>
                {daysRender.map((d)=> <DayButton day={d} daysSent={setDays} daysChosen={days}/>)}
            </div>
            <div>
                <button onClick={() => cancelAdding()}> Cancelar</button>
                <button onClick={() => sendHabit()}> Salvar</button>
            </div>
        </CreateHabitStyle>
    )
}

function DayButton({day, daysSent, daysChosen}){

    function verifyDay(){
        switch(day){
            case 1:
                return "S"
            case 2:
                return "T"
            case 3:
                return "Q"
            case 4:
                return "Q"
            case 5 :
                return "S"
            case 6:
                return "S"
            case 7:
                return "D"
        }
    }

    function toggleDay(){
        if(daysChosen.includes(day)){
            daysSent(daysChosen.filter((d) => d !== day))
        }else{
            daysSent([...daysChosen, day])
        }
    }

    return(
        <DayButtonStyle day={day} daysChosen={daysChosen} onClick={() => toggleDay()}>
            {verifyDay()} 
        </DayButtonStyle>
    )
}

const CreateHabitStyle = styled.div`
    background-color: ${White};
    padding: 18px;
    border-radius: 5px;

    div{
        display: flex;
        margin: 8px 0px;
    }
`

const DayButtonStyle = styled.button`
    padding: 0px;
    width: 30px;
    height: 30px;
    margin: 0px 2px;
    border-radius: 5px;
    border: 1px solid ${BorderLightGray};

    color: ${props => (props.daysChosen.includes(props.day))? `${White}`: `${BorderLightGray}`};
    background-color : ${props => (props.daysChosen.includes(props.day))? `${BorderLightGray}`: `${White}`};

    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    font-weight: 400;

`