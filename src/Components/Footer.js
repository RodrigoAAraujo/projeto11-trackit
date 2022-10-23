//Methods

import { Link } from "react-router-dom"
import styled from "styled-components"
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';
import axios from "axios";
import { useContext, useEffect } from "react";

//Constants

import { White, LightBlue } from "../Constants/colors"
import { habitsLink } from "../Constants/urls";

//Logical Objects

import { ProgressContext } from "../API/dailyProgress";


export default function Footer({ render }) {
    const { progress, setProgress } = useContext(ProgressContext)


    useEffect(() => {
        if (localStorage.getItem("user")) {
            const newUserInfo = JSON.parse(localStorage.getItem("user"))
            const URL = `${habitsLink}/today`
            axios.get(URL, { headers: { Authorization: `Bearer ${newUserInfo.token}` } })
                .then(res => {
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

                })
        }
    }, [render])

    return (

        <FooterStyle>

            <Link to="/habitos">Hábitos</Link>
            <div>
                <CircularProgressbar
                    value={progress}
                    strokeWidth={8}
                    text={<Link to="/hoje">Hoje</Link>}
                    background
                    backgroundPadding={7}
                    styles={buildStyles({
                        backgroundColor: { LightBlue },
                    })}
                />
            </div>
            <Link to="/historico">Histórico</Link>

        </FooterStyle>

    )
}

const FooterStyle = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    left:0; bottom: 0;
    width: 100%;
    height: 70px;
    background-color: ${White};
    padding: 0px 15px;


    a{
        color: ${LightBlue};
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        font-weight: 400;
        text-align: center;
    }
    div{
        width: 91px;
        height: 91px;
        margin-bottom: 45px;

        .CircularProgressbar-path {
            stroke: ${White};
        }
        .CircularProgressbar-trail {
            stroke: ${LightBlue};
        }
        .CircularProgressbar-text a { 
            fill: ${White};
        }
        .CircularProgressbar-background {
            fill: ${LightBlue};
        }
    }
`