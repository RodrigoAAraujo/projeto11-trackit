import styled from "styled-components"
import { BackgroundGray, DarkBlue } from "../../Constants/colors"

const Page = styled.body`
    background-color: ${BackgroundGray};
    min-height: 100vh;
    main{
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 900px;
        margin: 70px auto;
        padding: 30px 0px 50px;  
        width: 90%;

        h2{
            font-family: 'Lexend Deca', sans-serif;
            font-size: 23px;
            font-weight: 400;
            color: ${DarkBlue};
            text-align: left;
            width:100%
        }
    }
`
export default Page
