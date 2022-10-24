import { ProgressContext } from "../API/dailyProgress"
import { useContext } from "react"
import dayjs from "dayjs"
import styled from "styled-components"
import { DarkBlue } from "../Constants/colors"

export default function HeaderInfo({ week, day }) {
    const { progress } = useContext(ProgressContext)
    console.log(progress)

    return (
        <HeaderInfoStyle>

            <h2>
                {week[day.getDay()]} , {dayjs().format("D/MM")}
            </h2>


            <h4>
                {progress}% dos hábitos concluídos
            </h4>
        </HeaderInfoStyle>
    )
}
const HeaderInfoStyle = styled.header`
    width: 90%;
    max-width: 600px;
    margin-bottom: 10px;

    h2{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 23px;
        font-weight: 400;
        color: ${DarkBlue};
        text-align: left;
        margin-bottom: 8px;
    }
    h4{
        margin-bottom: 10px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;

    }
    

`