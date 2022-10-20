import styled from "styled-components"
import Logo from "../Assets/images/Logo.png"
import { Link } from "react-router-dom"
import { DarkBlue, LightBlue } from "../Constants/colors"
import axios from "axios"
import { useState } from "react"
import { authLink } from "../Constants/urls"

export default function SignUpPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [image, setImage] = useState("")

    function SignUp(e) {
        e.preventDefault()
        const URL = `${authLink}/sign-up`

        const body =
        {
            email: email,
            name: name,
            image: image,
            password: password
        }

        axios.post(URL, body)
            .then(res => { console.log(res) })
            .catch(err => { console.log(err) })

    }

    return (
        <SignUpStyle>
            <img src={Logo} />
            <form onSubmit={(e) => SignUp(e)}>

                <input type="email" placeholder="email" name="email" required
                    onChange={(e) => setEmail(e.target.value)} value={email}
                />

                <input type="password" placeholder="senha" name="senha" required
                    onChange={(e) => setPassword(e.target.value)} value={password}
                />

                <input type="text" placeholder="nome" name="nome" required
                    onChange={(e) => setName(e.target.value)} value={name}
                />

                <input type="link" placeholder="foto" name="foto" required
                    onChange={(e) => setImage(e.target.value)} value={image}
                />

                <button>Entrar</button>
            </form>
            <Link to={"/"}>Já tem uma conta? Faça Login</Link>
        </SignUpStyle>
    )
}

const SignUpStyle = styled.main`
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