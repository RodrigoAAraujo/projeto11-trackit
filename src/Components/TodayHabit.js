import axios from "axios"
import { useContext } from "react"
import styled from "styled-components"
import { UserContext } from "../API/user"
import check from "../Assets/images/check.png"
import { habitsLink } from "../Constants/urls"

export default function TodayHabit({habit ,render}){
    const {id, name, done, currentSequence, highestSequence}= habit
    const {user} = useContext(UserContext)



    function toggleCheck(){
        if(done){
            const URL = `${habitsLink}/${id}/uncheck`
            axios.post(URL, {},{ headers: {Authorization: `Bearer ${user.token}`}})
                .then(res =>{
                    render(true)
                })
                .catch(err => {
                    console.log(err)
                })
            //Disable Buttons
        }else{
            const URL = `${habitsLink}/${id}/check`
            axios.post(URL,{}, {headers:{Authorization: `Bearer ${user.token}`}})
                .then(res =>{
                    render(true)
                })
                .catch(err => {
                    console.log(err)
                })

            //Buttons
        }
    }

    return(
        <TodayHabitStyle>
            <div>
                <h2>{name}</h2>
                <p>Sequência atual: {currentSequence} dias</p>
                <p>Seu recorde: {highestSequence} dias</p>
            </div>
            <button onClick={() => toggleCheck()}><img src={check}/></button>

        </TodayHabitStyle>
    )
}

const TodayHabitStyle = styled.div`
`