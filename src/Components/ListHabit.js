//Methods
import styled from "styled-components"
import { useState, useContext } from "react"
import axios from "axios"

//Constants 

import { habitsLink } from "../Constants/urls"
import { White, BorderLightGray, LetterBlack, LightBlue } from "../Constants/colors"

//Logical Objects
import { UserContext } from "../API/user"

//Physical Objects

import trash from "../Assets/images/trash-outline.svg"
import { ThreeDots } from "react-loader-spinner"



export default function ListHabit({ habit, renderHabit }) {
    const { days, id, name } = habit
    const daysRender = [0, 1, 2, 3, 4, 5, 6]
    const [disable, setDisable] = useState(false)

    const { user } = useContext(UserContext)

    function deleteHabit() {
        const URL = `${habitsLink}/${id}`

        setDisable(true)

        axios.delete(URL, { headers: { Authorization: `Bearer ${user.token}` } })
            .then(() => {
                renderHabit(true)
            })
            .catch(() => { setDisable(false) })
    }

    return (
        <ListHabitStyle>
            <div id="actions">
                <h3>{name}</h3>
                <button disabled={disable} onClick={() => deleteHabit()}>
                    {disable ?
                    <ThreeDots color={LightBlue} height="12" width="40" /> :
                    <img src={trash} />}

                </button>

            </div>
            <div>
                {daysRender.map((d) => <DayButton day={d} daysChosen={days} />)}
            </div>
        </ListHabitStyle>
    )
}


function DayButton({ day, daysChosen }) {

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


    return (
        <DayButtonStyle day={day} daysChosen={daysChosen}>
            {verifyDay()}
        </DayButtonStyle>
    )
}

const ListHabitStyle = styled.div`
    background-color: ${White};
    padding: 18px 23px;
    border-radius: 5px;
    margin: 10px 0px;
    max-width: 600px;
    width: 100%;

    #actions{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;

        h3{
            font-family: 'Lexend Deca', sans-serif;
            font-size: 20px;
            font-weight: 400;
            color:${LetterBlack};
        }

        button{
            background-color: ${White};
            width: 25px;
            height: 25px;
            border-radius: 50%;
            padding: 4px;
            
            display: flex;
            align-items: center;
            justify-content: center;



            :hover{
                transition: 0.3s;
                background-color: ${LightBlue};
            }

            img{
                width: 17px;
                cursor: pointer;
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

    :hover{
        opacity: 1;
        cursor: default
    }

`