import { Link } from "react-router-dom"
import styled from "styled-components"
import { buildStyles, CircularProgressbar} from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';
import { White, LightBlue} from "../Constants/colors"

export default function Footer(){
    const percentage = 50


    return (
        <FooterStyle>
            <Link to="/habitos">Hábitos</Link>
            <div>
                <CircularProgressbar
                    value={50}
                    strokeWidth = {8}
                    text={<Link to="/hoje">Hoje</Link>}
                    background
                    backgroundPadding={7}
                    styles={buildStyles({
                        backgroundColor: {LightBlue},
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