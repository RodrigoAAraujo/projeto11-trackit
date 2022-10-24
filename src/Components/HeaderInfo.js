import { ProgressContext } from "../API/dailyProgress"
import { useContext } from "react"
import dayjs from "dayjs"
import styled from "styled-components"
import { BigIconGray, DarkBlue, LetterGrayNothing, StrongGreen } from "../Constants/colors"

export default function HeaderInfo({ week, day }) {
    const { progress } = useContext(ProgressContext)

    return (
        <HeaderInfoStyle progress={progress}>
            <h2 data-identifier="today-infos">
                {week[day.getDay()]} , {dayjs().format("D/MM")}
            </h2>
            <h4 data-identifier="today-infos">
               {progress !== null && progress > 0? `${progress}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"}
            </h4>
        </HeaderInfoStyle>
    )
}
const HeaderInfoStyle = styled.header`
    width: 90%;
    max-width: 600px;
    margin-bottom: 10px;

    h4{
        margin-bottom: 10px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
        color: ${props => props.progress > 0? `${StrongGreen}` : `${LetterGrayNothing}` }

    }
    

`