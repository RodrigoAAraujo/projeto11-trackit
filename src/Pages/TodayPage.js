import Header from "../Components/Header"
import Footer from "../Components/Footer"
import styled from "styled-components"
import { BackgroundGray } from "../Constants/colors"
import { habitsLink } from "../Constants/urls"
import { useState, useEffect, useContext} from "react"
import dayjs from "dayjs"
import axios from "axios"
import { UserContext } from "../API/user"
import TodayHabit from "../Components/TodayHabit"
import { useNavigate } from "react-router-dom"


export default function TodayPage(){
    const week = ["domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    const day = new Date()

    const [todayHabits, setTodayHabits] = useState([])
    const [habitsChange, sethabitsChange]= useState(false)

    const [percentage, setPercentage] = useState(0)

    const {user, setUser} = useContext(UserContext)

    const navigate = useNavigate()

    useEffect(() => {
        if(localStorage.getItem("user")){
            const newUserInfo = JSON.parse(localStorage.getItem("user"))
            setUser(newUserInfo)
            const URL = `${habitsLink}/today`
            axios.get(URL,{ headers: {Authorization: `Bearer ${newUserInfo.token}`}})
                .then(res => {
                    setTodayHabits(res.data)
                    
                    res.data.forEach((e) => {
                        let counter = 0
                        if(e.done){
                            counter++  
                            setPercentage(percentage + counter)
                        }
                    })

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
            <TodayPageStyle>
                <header>
                    <h2>
                      {week[day.getDay()]} , {dayjs().format("D/MM")}
                    </h2>
                    <h4>
                        {percentage? `
                         ${percentage/todayHabits.length*100}% dos hábitos concluídos`:
                         "Nenhum hábito concluído ainda"
                        }
                    </h4>

                    {todayHabits?
                     todayHabits.map((h) => <TodayHabit habit={h} render={sethabitsChange}/>) :
                     <p>Você não tem nenhum hábito hoje</p>
                    }
                </header>

            </TodayPageStyle>
            <Footer/>
        </Page>
    )
}

const Page = styled.body`
    background-color: ${BackgroundGray};
    height: 100vh;
    main{
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 900px;
        margin: 70px auto;
        padding: 30px 0px;  
    }
`
const TodayPageStyle = styled.main`
`