import { UserContext } from "../API/user"
import { useContext } from "react"
import styled from "styled-components"
import { DarkBlue, White } from "../Constants/colors"
import { useNavigate } from "react-router-dom"


export default function Header(){
    const {user} = useContext(UserContext)
    const navigate = useNavigate()

    function LogOut(){
        localStorage.removeItem("user")
        navigate("/")
    }

    return(
        <HeaderStyle>
            <h1>TrackIt</h1>

            <button onClick={() =>LogOut()}>Log Out</button>
            <img src={user.image}/>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.header`
    position: fixed;
    top: 0; left: 0;
    height: 70px;
    width: 100%;
    background-color: ${DarkBlue};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;

    h1{
        font-family: 'Playball', cursive;
        font-size: 39px;
        font-weight: 400;
        text-align: left;
        color: ${White};
    }

    img{
        border-radius: 50%;
        width: 51px;
        height: 51px;
        object-fit: cover;
    }

`