//Methods
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState, useContext } from "react"

//Logical Objects

import { UserContext } from "../API/user"

//Constants

import { authLink } from "../Constants/urls"
import { White } from "../Constants/colors"

//Physical Objects

import Logo from "../Assets/images/Logo.png"
import FormStyle from "../Assets/styles/Form"
import { ThreeDots } from "react-loader-spinner"



export default function LoginPage(){
    const [email, setEmail]= useState("")
    const [password, setPassword] = useState("")
    const [disable,setDisable] = useState(false)

    const {setUser}= useContext(UserContext)

    const navigate = useNavigate()

    if(localStorage.getItem("user")){
        const URL = `${authLink}/login`

        const data = JSON.parse(localStorage.getItem("user"))

        const body =
        {
            email: data.email,
	        password: data.password
        }

        axios.post(URL, body)
            .then(res => {
                setUser(res.data)
                navigate("/habitos")})
            .catch(err => {console.log(err)})
    }


    function Login(e){
        e.preventDefault()
        const URL = `${authLink}/login`

        const body =
        {
            email: email,
	        password: password
        }

        setDisable(true)

        axios.post(URL, body)
            .then(res => {
                setUser(res.data)
                localStorage.setItem("user", JSON.stringify(res.data))
                navigate("/habitos")})
            .catch(err => {setDisable(false)})
    }

    return (
        <FormStyle>   
            <img src={Logo}/>
            <form onSubmit={(e) => Login(e)}>

                <input type="email" placeholder="email" name="email" required 
                onChange={(e) => setEmail(e.target.value)} value={email} disabled={disable}
                />

                <input type="password" placeholder="senha" name="senha" required 
                onChange={(e) => setPassword(e.target.value)} value={password} disabled={disable}
                />

                <button disabled={disable}>
                    {disable?
                    <ThreeDots color={White}height="20" width="40" />:
                    "Entrar"}
                </button>
            </form>
            <Link to={"/cadastro"}>Não tem uma conta? Cadastre-se!</Link>
        </FormStyle>
    )
}
