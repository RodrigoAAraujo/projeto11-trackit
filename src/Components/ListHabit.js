import styled from "styled-components"
import { White, BorderLightGray } from "../Constants/colors"
import trash from "../Assets/images/trash-outline.svg"
import { habitsLink } from "../Constants/urls"
import axios from "axios"

import { UserContext } from "../API/user"
import { useContext } from "react"

export default function ListHabit({habit, renderHabit}){
    const {days, id, name}=  habit
    const daysRender = [7,1,2,3,4,5,6]

    const {user} = useContext(UserContext)
    
    function deleteHabit(){
        const URL = `${habitsLink}/${id}`

        axios.delete(URL,  { headers: {Authorization: `Bearer ${user.token}`}})
            .then(res => renderHabit(true))
            .catch(err => {console.log(err)})
    }

    return (
        <ListHabitStyle>
            <div>
                <h3>{name}</h3>
                <img src={trash} on onClick={() => deleteHabit()}/>
            </div>
            <div>
                {daysRender.map((d)=> <DayButton day={d}  daysChosen={days}/>)}
            </div>
        </ListHabitStyle>
    )
}


function DayButton({day, daysChosen}){

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


    return(
        <DayButtonStyle day={day} daysChosen={daysChosen}>
            {verifyDay()} 
        </DayButtonStyle>
    )
}

const ListHabitStyle = styled.div`

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

    :hover{
        opacity: 1;
        cursor: default
    }

`