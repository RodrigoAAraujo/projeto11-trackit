//Methods

import styled from "styled-components"
import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import dayjs from "dayjs"
import axios from "axios"

//Constants

import { DarkBlue, White } from "../Constants/colors"
import { habitsLink } from "../Constants/urls"


//Logical Objects

import { UserContext } from "../API/user"
import { ProgressProvider } from "../API/dailyProgress"

//Physical Objects

import Page from "../Assets/styles/Page"
import TodayHabit from "../Components/TodayHabit"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import HeaderInfo from "../Components/HeaderInfo"
import LoadingIcon from "../Components/LoadingIcon"
import ErrorMessage from "../Components/ErrorMessage"


export default function TodayPage() {
    const week = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    const day = new Date()

    const [todayHabits, setTodayHabits] = useState([])
    const [habitsChange, sethabitsChange] = useState(false)
    const [error, SetError] = useState(false)
    const [errorText, setErrorText] = useState("")

    const { setUser } = useContext(UserContext)

    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem("user")) {
            const newUserInfo = JSON.parse(localStorage.getItem("user"))
            setUser(newUserInfo)
            const URL = `${habitsLink}/today`
            axios.get(URL, { headers: { Authorization: `Bearer ${newUserInfo.token}` } })
                .then(res => {
                    setTodayHabits(res.data)
                    setLoading(false)
                })
                .catch(err => {
                    setErrorText(err.response.data.message)
                    SetError(true)
                })
            sethabitsChange(false)
        } else {
            navigate("/")
        }
    }, [habitsChange])

    return (
        <Page>
            <ProgressProvider>
                <Header />

                {loading?
                    <LoadingIcon/>:

                    <TodayPageStyle>
                        <HeaderInfo week={week} day={day} />

                        {todayHabits ?
                            todayHabits.map((h) => <TodayHabit habit={h} render={sethabitsChange} />) :
                            <p>Você não tem nenhum hábito hoje</p>
                        }
                    </TodayPageStyle>
                }

                <Footer render={habitsChange} />
            </ProgressProvider>

            {error? <ErrorMessage message={errorText} appear={SetError}/>: null}

        </Page>
    )
}



const TodayPageStyle = styled.main`

    button{
        color: ${White};
    }
`