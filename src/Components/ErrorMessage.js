import styled from "styled-components"
import { BackgroundGray, DarkBlue, LetterBlack, White } from "../Constants/colors"

export default function ErrorMessage({message, appear}){

    return(
        <ErrorStyle>
            <div>
                <h1>Error</h1>
                <p>
                    {message!== undefined? `${message}` :"eror"}
                </p>
                <button onClick={() => appear(false)}>
                    Retornar
                </button>
            </div>
        </ErrorStyle>
    )
}

const ErrorStyle = styled.div`  
    position: absolute;
    top:0; left: 0;

    z-index: 3;
    width: 100%;
    height: 100%;
    background-color: ${DarkBlue};

    div{
        width: 80%;
        height: 50%;
        margin: auto;
        margin-top: 12.5%;
        
    
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background-color: ${BackgroundGray};
        padding: 30px;
        border-radius: 10px;
    }

    button{
        max-width: 200px;
        color: ${White};
        font-family: 'Lexend Deca', sans-serif;
        font-size: 23px;
        font-weight: 400;
    }

    h1{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 23px;
        font-weight: 400;
        color: ${DarkBlue};
    }

    p{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        font-weight: 400;
        color: ${LetterBlack};
    }
`