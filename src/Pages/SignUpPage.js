//Methods

import { Link } from "react-router-dom"
import axios from "axios"
import { useState } from "react"

//Constants

import { authLink } from "../Constants/urls"
import { White } from "../Constants/colors"

//Physical Objects

import { ThreeDots } from "react-loader-spinner"
import FormStyle from "../Assets/styles/Form"
import Logo from "../Assets/images/Logo.png"



export default function SignUpPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [image, setImage] = useState("")

    const [disable, setDisable] = useState(false)

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

        setDisable(true)

        axios.post(URL, body)
            .then(res => { console.log(res) })
            .catch(err => { setDisable(false)})
    }

    return (
        <FormStyle>
            <img src={Logo} />
            <form onSubmit={(e) => SignUp(e)}>

                <input type="email" placeholder="email" name="email" required
                    onChange={(e) => setEmail(e.target.value)} value={email} disabled={disable}
                />

                <input type="password" placeholder="senha" name="senha" required
                    onChange={(e) => setPassword(e.target.value)} value={password} disabled={disable}
                />

                <input type="text" placeholder="nome" name="nome" required
                    onChange={(e) => setName(e.target.value)} value={name} disabled={disable}
                />

                <input type="url" placeholder="foto" name="foto" required
                    onChange={(e) => setImage(e.target.value)} value={image} disabled={disable}
                />

                <button disabled={disable}>
                    {disable?
                    <ThreeDots color={White}height="20" width="40" />:
                    "Cadastrar"}
                </button>
            </form>
            <Link to={"/"}>Já tem uma conta? Faça Login</Link>
        </FormStyle>
    )
}
