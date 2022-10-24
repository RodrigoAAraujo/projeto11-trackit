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
import { ProgressContext, ProgressProvider } from "../API/dailyProgress"

//Physical Objects

import Page from "../Assets/styles/Page"
import TodayHabit from "../Components/TodayHabit"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import HeaderInfo from "../Components/HeaderInfo"


export default function TodayPage() {
    const week = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    const day = new Date()

    const [todayHabits, setTodayHabits] = useState([])
    const [habitsChange, sethabitsChange] = useState(false)

    const { setUser } = useContext(UserContext)
    const { progress, setProgress } = useContext(ProgressContext)

    console.log(setProgress)
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem("user")) {
            const newUserInfo = JSON.parse(localStorage.getItem("user"))
            setUser(newUserInfo)
            const URL = `${habitsLink}/today`
            axios.get(URL, { headers: { Authorization: `Bearer ${newUserInfo.token}` } })
                .then(res => {
                    setTodayHabits(res.data)

                    let dones = 0
                    let total = 0
                    res.data.forEach((e) => {
                        console.log(e)
                        if (e.done) {
                            dones++
                        }
                        total++
                    })
                    let value = dones / total * 100

                    setProgress(value)
                })
                .catch(err => {
                    console.log(err)
                })
            sethabitsChange(false)
        } else {
            navigate("/")
        }
    }, [habitsChange])

    return (
        <Page>

            <Header />

            <TodayPageStyle>
                <HeaderInfo week={week} day={day} />

                {todayHabits ?
                    todayHabits.map((h) => <TodayHabit habit={h} render={sethabitsChange} />) :
                    <p>Você não tem nenhum hábito hoje</p>
                }
            </TodayPageStyle>

            <ProgressProvider>
                <Footer render={habitsChange} />
            </ProgressProvider>
        </Page>
    )
}



const TodayPageStyle = styled.main`

    button{
        color: ${White};
    }
`