//Methods
import { ProgressProvider } from "../API/dailyProgress"
import styled from "styled-components"

//Constants

import { LetterBlack } from "../Constants/colors"

//LOgical Objects

import 'react-calendar/dist/Calendar.css';

//Physical Objects

import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Page from "../Assets/styles/Page"
import { Calendar } from "react-calendar"

export default function HistoryPage(){
    return (
        <Page>
            <Header/>
            <HistoryPageStyle>
                <h2>
                    Histórico
                </h2>

                <Calendar locale="pt-br"/>

                <p>
                Em breve você poderá ver o histórico dos seus hábitos aqui!
                </p>

            </HistoryPageStyle>
            <ProgressProvider>
                <Footer/>
            </ProgressProvider>
        </Page>
    )
}

const HistoryPageStyle = styled.main`
    h2{
        max-width: 400px;
        margin-bottom: 20px;
    }

    p{
        margin-top: 20px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
        color: ${LetterBlack};
    }
`