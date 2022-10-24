import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Page from "../Assets/styles/Page"

import { ProgressProvider } from "../API/dailyProgress"
import styled from "styled-components"

import { Calendar } from "react-calendar"
import 'react-calendar/dist/Calendar.css';

import { useEffect, useState } from "react"

export default function HistoryPage(){
    const [loading, setLoading] = useState(false)
    const [history, setHistory] = useState(null)
    

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

`