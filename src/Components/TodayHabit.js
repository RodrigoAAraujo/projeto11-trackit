//Methods

import axios from "axios"
import { useContext, useState } from "react"
import styled from "styled-components"

//Constants

import { BigIconGray, LetterBlack, StrongGreen, White } from "../Constants/colors"
import { habitsLink } from "../Constants/urls"

//Logical Objects

import { UserContext } from "../API/user"

//Physical Object

import check from "../Assets/images/check.png"
import { RotatingSquare } from "react-loader-spinner"


export default function TodayHabit({ habit, render }) {
    const { id, name, done, currentSequence, highestSequence } = habit
    const { user } = useContext(UserContext)

    const [disable, setDisable] = useState(false)



    function toggleCheck() {
        if (done) {
            const URL = `${habitsLink}/${id}/uncheck`
            setDisable(true)

            axios.post(URL, {}, { headers: { Authorization: `Bearer ${user.token}` } })
                .then(() => {
                    render(true)
                    setDisable(false)
                })
                .catch(() => {
                    setDisable(false)
                })
            //Disable Buttons
        } else {
            const URL = `${habitsLink}/${id}/check`
            setDisable(true)

            axios.post(URL, {}, { headers: { Authorization: `Bearer ${user.token}` } })
                .then(() => {
                    setDisable(false)
                    render(true)
                })
                .catch(() => {
                    setDisable(false)
                })

            //Buttons
        }
    }

    return (
        <TodayHabitStyle done={done} currentSequence={currentSequence} highestSequence={highestSequence}>
            <div>
                <h2>{name}</h2>
                <p>Sequência atual: <span id="done">{currentSequence} dias </span> </p>
                <p>Seu recorde: <span id="equal">{highestSequence} dias</span></p>
            </div>
            <button disabled={disable} onClick={() => toggleCheck()}>

                {disable ?
                    <RotatingSquare color={White} height="60" width="60" /> :
                    <img src={check} />
                }
            </button>
        </TodayHabitStyle>
    )
}

const TodayHabitStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 700px;
    padding: 13px;
    border-radius: 5px;
    background-color: ${White};
    margin: 10px;

    div{
        h2{
            font-family: 'Lexend Deca', sans-serif;
            font-size: 20px;
            font-weight: 400;
            color: ${LetterBlack};
            margin-bottom: 7px;
        }
        p{
            font-family: 'Lexend Deca', sans-serif;
            font-size: 13px;
            font-weight: 400;
            color: ${LetterBlack};
            margin: 5px 0px;

            #done{
                color:${props => props.done ?
                `${StrongGreen}` :
                `${LetterBlack}`};
            }

            #equal{
                color:${props => ((props.highestSequence === props.currentSequence) && (props.highestSequence > 0)) ?
                `${StrongGreen}` :
                `${LetterBlack}`};
            }
        }
    }

    button{
        width: 69px;
        height: 69px;
        padding: 0px;

        
        background-color: ${props => props.done ? `${StrongGreen}` : `${BigIconGray}`};

        div{
            justify-content: center;
        }
    }

`