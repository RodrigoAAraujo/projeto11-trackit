import styled from "styled-components"
import loading from "../Assets/images/Spinner-1.9s-301px.svg"

export default function LoadingIcon(){
    return (
        <LoadingStyle>
            <img src={loading} alt="Loading Icon"/>
        </LoadingStyle>
    )
}

const LoadingStyle = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`