//Methods

import axios from "axios"
import { useState, useContext } from "react"
import styled from "styled-components"

//Constants

import { BorderLightGray, LightBlue, StrongRed, White } from "../Constants/colors"
import { habitsLink } from "../Constants/urls"


//Logical Objects

import { UserContext } from "../API/user"
import { HabitCreateContext } from "../API/habitCreation"

//Physical Objects

import { ThreeDots } from "react-loader-spinner"



export default function CreateHabit({ cancel, renderHabit }) {
    const daysRender = [0, 1, 2, 3, 4, 5, 6]

    const { user } = useContext(UserContext)
    const { habitCreation, setHabitCreation } = useContext(HabitCreateContext)

    const [habit, setHabit] = useState(habitCreation.name)
    const [days, setDays] = useState(habitCreation.days)
    const [alert, setAlert] = useState(false)
    const [disable, setDisable]= useState(false)

    console.log(days)



    function sendHabit(e) {
        e.preventDefault()
        if (days.length === 0) {
            setAlert(true)
            setHabit("")
        } else {
            const URL = habitsLink

            const body = {
                name: habit,
                days: days
            }

            setDisable(true)

            axios.post(URL, body, { headers: { Authorization: `Bearer ${user.token}` } })
                .then(() => {
                    setHabitCreation({ name: "", days: [] })
                    renderHabit(true)
                    cancel(false)
                })
                .catch(() => setDisable(false))
        }
    }

    function cancelAdding() {
        const body = {
            name: habit,
            days: days
        }
        setHabitCreation(body)
        cancel(false)
    }

    return (
        <CreateHabitStyle>
            <form onSubmit={(e) => sendHabit(e)}>

                {alert ?
                    <input id="alert" maxLength={50} type="text" required placeholder="Escolha um dia" data-identifier="input-habit-name"
                        onChange={(e) => setHabit(e.target.value)} value={habit} disabled={disable}>
                    </input> :

                    <input maxLength={50} type="text" required placeholder="nome do hábito" data-identifier="input-habit-name"
                        onChange={(e) => setHabit(e.target.value)} value={habit} disabled={disable}>
                    </input>
                }

                <div>
                    {daysRender.map((d) => <DayButton day={d} daysSent={setDays}  disable={disable} daysChosen={days} />)}
                </div>

                <div className="actions">
                    <button id="cancel" type="button" data-identifier="cancel-habit-create-btn" 
                    onClick={() => cancelAdding()} disabled={disable}> Cancelar</button>
                    <button id="save" type="submit" disabled={disable} data-identifier="save-habit-create-btn"> 
                        {disable?
                        <ThreeDots color={White}height="12" width="40" />:
                        "Salvar"}
                    </button>
                </div>
            </form>
        </CreateHabitStyle>
    )
}

function DayButton({ day, daysSent, daysChosen, disable}) {

    function verifyDay() {
        switch (day) {
            case 1:
                return "S"
            case 2:
                return "T"
            case 3:
                return "Q"
            case 4:
                return "Q"
            case 5:
                return "S"
            case 6:
                return "S"
            case 0:
                return "D"
        }
    }

    function toggleDay() {
        if (daysChosen.includes(day)) {
            daysSent(daysChosen.filter((d) => d !== day))
        } else {
            daysSent([...daysChosen, day])
        }
    }

    return (
        <DayButtonStyle  data-identifier="week-day-btn" day={day} type="button" 
        disabled={disable} daysChosen={daysChosen} onClick={() => toggleDay()}>
            {verifyDay()}
        </DayButtonStyle>
    )
}

const CreateHabitStyle = styled.div`
    background-color: ${White};
    padding: 12px 18px;
    border-radius: 5px;
    max-width: 600px;
    width: 100%;
    margin-bottom: 10px;


    form{
        display: flex;
        flex-direction: column;

        #alert{
            border: 1px solid ${StrongRed};
            &::placeholder{
                color:${StrongRed}
            }
        }

        div{
            display: flex;
            margin: 8px 0px;
        }
        .actions{
            align-self: flex-end;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            width: 60%;
            min-width: 250px;

            button{
                font-family: 'Lexend Deca', sans-serif;
                font-size: 16px;
                font-weight: 400;
            }

            #cancel{
                background-color: ${White};
                color: ${LightBlue};
            }
            #save{
                color: ${White};
                background-color: ${LightBlue};
                div{
                    justify-content: center;
                }
            }
        }
    }
    
`

const DayButtonStyle = styled.button`
    padding: 0px;
    width: 30px;
    height: 30px;
    margin: 0px 2px;
    border-radius: 5px;
    border: 1px solid ${BorderLightGray};

    color: ${props => (props.daysChosen.includes(props.day)) ? `${White}` : `${BorderLightGray}`};
    background-color : ${props => (props.daysChosen.includes(props.day)) ? `${BorderLightGray}` : `${White}`};

    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    font-weight: 400;
`