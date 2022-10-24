//Methods

import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"

//Logical Objects

import { HabitProvider} from "../API/habitCreation"
import { UserContext } from "../API/user"
import { ProgressProvider } from "../API/dailyProgress"


//Constants

import { BackgroundGray, DarkBlue, LetterBlack, White } from "../Constants/colors"
import { habitsLink } from "../Constants/urls"

//Physical Objects

import Page from "../Assets/styles/Page"
import CreateHabit from "../Components/CreateHabit"
import ListHabit from "../Components/ListHabit"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import LoadingIcon from "../Components/LoadingIcon"


export default function HabitsPage(){
    const [habits, setHabits] = useState([])
    const [habitsChange, sethabitsChange]= useState(false)
    const [newHabit, setNewHabit] = useState(false)

    const {setUser} = useContext(UserContext)

    const[loading, setLoading]= useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        if(localStorage.getItem("user")){
            const newUserInfo = JSON.parse(localStorage.getItem("user"))
            setUser(newUserInfo)
            const URL = `${habitsLink}`
            axios.get(URL,{ headers: {Authorization: `Bearer ${newUserInfo.token}`}})
                .then(res => {
                    setHabits(res.data)
                    setLoading(false)
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

            {loading?
                <LoadingIcon/>:

                <HabitsPageStyle>
                    <header>
                        <h2>Meus Hábitos</h2>
                        <button onClick={() =>setNewHabit(true)} data-identifier="create-habit-btn">+</button>
                    </header>
                    <HabitProvider>
                        {newHabit? 
                            <CreateHabit cancel={setNewHabit}  renderHabit={sethabitsChange}/>
                        : null}
                    </HabitProvider>

                    {habits.length === 0? 
                    <p data-identifier="no-habit-message">
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </p>:
                    null}
                    {habits.length !== 0?
                    habits.map((h)=> <ListHabit habit={h} renderHabit={sethabitsChange}/>):
                    null
                    }

                </HabitsPageStyle>
            }

            <ProgressProvider>
                <Footer render={habitsChange}/>
            </ProgressProvider>
        </Page>
    )
}


const HabitsPageStyle = styled.main`
    background-color: ${BackgroundGray};

    header{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 25px;

        h2{
            font-family: 'Lexend Deca', sans-serif;
            font-size: 23px;
            font-weight: 400;
            color: ${DarkBlue};
        }
        button{
            padding: 0px;
            width: 40px;
            font-family: 'Lexend Deca', sans-serif;
            font-size: 27px;
            font-weight: 400;
        }

        button{
            color: ${White};
        }
    }

    p{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        font-weight: 400;
        color: ${LetterBlack}
    }
`