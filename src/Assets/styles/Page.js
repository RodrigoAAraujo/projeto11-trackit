import styled from "styled-components"
import { BackgroundGray } from "../../Constants/colors"

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
    }
`
export default Page
