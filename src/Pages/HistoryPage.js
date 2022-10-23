import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Page from "../Assets/styles/Page"

import { ProgressProvider } from "../API/dailyProgress"
import styled from "styled-components"

import { Calendar } from "react-calendar"
import 'react-calendar/dist/Calendar.css';

import dayjs from "dayjs"
import { useEffect } from "react"

export default function HistoryPage(){
    const completed = ["20 de Outubro de 2022"]
    const uncompleted = ["21 de Outubro de 2022"]

    function checkDay(e){
        console.log(e)
    }

    useEffect(()=>{

    }, [])

    return (
        <Page>
            <Header/>
            <HistoryPageStyle>
                <Calendar onClickDay={(e)=> checkDay(e)} locale="pt-br"/>
            </HistoryPageStyle>
            <ProgressProvider>
                <Footer/>
            </ProgressProvider>
        </Page>
    )
}

const HistoryPageStyle = styled.main`

    button{
        background-color: none;
    }




`