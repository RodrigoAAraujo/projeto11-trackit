import { UserContext } from "../API/user"
import { useContext, useState } from "react"
import styled from "styled-components"
import { BorderLightGray, DarkBlue, LightBlue, White } from "../Constants/colors"
import { useNavigate } from "react-router-dom"


export default function Header(){
    const {user} = useContext(UserContext)
    const navigate = useNavigate()
    const [on, setOn] = useState(false)

    function LogOut(){
        localStorage.removeItem("user")
        navigate("/")
    }

    function toggleOn(){
        console.log(on)
        if(!on){
            setOn(true)
        }else{
            setOn(false)
        }
    }

    return(
        <HeaderStyle>
            <h1>TrackIt</h1>

            
            <div>
                <img src={user.image} data-identifier="avatar" onClick={() => toggleOn()}/>
                <MenuUser on={on}>
                    <button onClick={() =>LogOut()}>Log Out</button>
                </MenuUser>
            </div>
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
        cursor: pointer;
    }

`
const MenuUser = styled.div`
    transition: 1s;
    position: absolute;
    top: 70px; 
    right: ${props => props.on? "0px":  "-100px"};

    button{
        border-radius: 0px;
        border: 1px solid ${BorderLightGray};
        background-color: ${White};
        padding: 5px 10px;
        width:100px;

        font-family: 'Lexend Deca', sans-serif;
        font-size: 13px;
        font-weight: 500;

        :hover{
            transition: 0.5s;
            background-color: ${LightBlue} ;
            color: ${White};
        }
    }

`