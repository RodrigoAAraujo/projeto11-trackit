import { DarkBlue, LightBlue, White } from "../../Constants/colors"
import styled from "styled-components"

const FormStyle = styled.main`
    height: 100vh;
    justify-content: center;
    form{
        display:  flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
        max-width: 500px;

        input, button{
            margin: 6px 0px;
        }
        button{
            font-family: 'Lexend Deca', sans-serif;
            font-size: 20px;
            font-weight: 400;
            text-align: center;
            color: ${White};

            div{
                justify-content: center;
            }
        }
    }
    a{
        color:${LightBlue};
        text-decoration: underline;     

        font-family: 'Lexend Deca', sans-serif;
        font-size: 16px;
        font-weight: 400;
        text-align: center;
        margin: 25px 0px; 

        :hover{
            color: ${DarkBlue};
            transition: 0.5s;
        }
    }
`

export default FormStyle