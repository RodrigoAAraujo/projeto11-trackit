import { useContext, useEffect, useState } from "react"
import axios from "axios"

import { habitsLink } from "../Constants/urls"
import { UserContext } from "../API/user"
import styled from "styled-components"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { BackgroundGray, DarkBlue } from "../Constants/colors"
import CreateHabit from "../Components/CreateHabit"
import ListHabit from "../Components/ListHabit"

import { HabitProvider} from "../API/habitCreation"
import { useNavigate } from "react-router-dom"


export default function HabitsPage(){
    const {user, setUser} = useContext(UserContext)

    const [habits, setHabits] = useState([])
    const [habitsChange, sethabitsChange]= useState(false)

    const [newHabit, setNewHabit] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        if(localStorage.getItem("user")){
            const newUserInfo = JSON.parse(localStorage.getItem("user"))
            setUser(newUserInfo)
            const URL = `${habitsLink}`
            axios.get(URL,{ headers: {Authorization: `Bearer ${newUserInfo.token}`}})
                .then(res => {
                    setHabits(res.data)
                    console.log(res.data)
                })
                .catch(err => {
                    console.log(err)
                })

            sethabitsChange(false)
        }else{
            navigate("/")
        }

    }, [habitsChange])

    return (
        <Page>
            <Header/>
            <HabitsPageStyle>
                <header>
                    <h2>Meus Hábitos</h2>
                    <button onClick={() =>setNewHabit(true)}>+</button>
                </header>
                <HabitProvider>
                    {newHabit? 
                        <CreateHabit cancel={setNewHabit}  renderHabit={sethabitsChange}/>
                    : null}
                </HabitProvider>

                {habits.length === 0? 
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>:
                null}
                {habits.length !== 0?
                habits.map((h)=> <ListHabit habit={h} renderHabit={sethabitsChange}/>):
                null
                }

            </HabitsPageStyle>
            <Footer/>
        </Page>
    )
}

const Page = styled.body`
    background-color: ${BackgroundGray};
    main{
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 900px;
        margin: 70px auto;
        padding: 30px 0px 50px;  
    }
`

const HabitsPageStyle = styled.main`
    header{
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        button{
            padding: 0px;
            width: 40px;
            font-family: 'Lexend Deca', sans-serif;
            font-size: 27px;
            font-weight: 400;
        }
        h2{
            font-family: 'Lexend Deca', sans-serif;
            font-size: 23px;
            font-weight: 400;
            color: ${DarkBlue};
        }
    }

`