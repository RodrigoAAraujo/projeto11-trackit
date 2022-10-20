import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import { useState } from "react"
import { useContext } from "react"

import { DarkBlue, LightBlue } from "../Constants/colors"
import Logo from "../Assets/images/Logo.png"
import { authLink } from "../Constants/urls"
import { UserContext } from "../API/user"

export default function LoginPage(){
    const [email, setEmail]= useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const {user, setUser}= useContext(UserContext)


    function Login(e){
        e.preventDefault()
        const URL = `${authLink}/login`

        const body =
        {
            email: email,
	        password: password
        }

        axios.post(URL, body)
            .then(res => {
                setUser(res.data)
                navigate("/habitos")})
            .catch(err => {console.log(err)})

    }

    return (
        <LoginPageStyle>   
            <img src={Logo}/>
            <form onSubmit={(e) => Login(e)}>

                <input type="email" placeholder="email" name="email" required 
                onChange={(e) => setEmail(e.target.value)} value={email}
                />

                <input type="password" placeholder="senha" name="senha" required 
                onChange={(e) => setPassword(e.target.value)} value={password}
                />

                <button>Entrar</button>
            </form>
            <Link to={"/cadastro"}>Não tem uma conta? Cadastre-se!</Link>
        </LoginPageStyle>
    )
}

const LoginPageStyle = styled.main`
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