import styled from "styled-components";
import { Link} from "react-router-dom";
// import axios from "axios";
// import { ThreeDots } from "react-loader-spinner";
import logo from "../assets/transparentlogo.png"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiUrl } from "../App";

export default function LogInPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    function submitLogin(e) {
        e.preventDefault()
        const body = { email, password }
        axios.post(`${apiUrl}/`,body)
        .then((res) => {
            toast('Login bem sucedido!');
            navigate('/home');
            localStorage.setItem("token", res.data.token);
        })
    .catch((err) => {
      console.log(err);
      toast.error(err);
    });
    }
    return (
        <PageContainer>
            <LogoContainer>
                <img src={logo} alt="logo" />
                Crafty
            </LogoContainer>
            <ToastContainer />
            <FormContainer onSubmit={submitLogin} >
                <input
                    type={"email"}
                    placeholder="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required />
                <input
                    type={"password"}
                    placeholder="senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <button type={"submit"}>
                    Entrar
                </button>
                <Link to={"/signup"}>
                    Não tem uma conta? Cadastre-se aqui!
                </Link>
            </FormContainer>
        </PageContainer>
    )
}

const PageContainer = styled.main`
    background: rgb(157,233,148);
    background: radial-gradient(circle, rgba(157,233,148,1) 0%, rgba(174,214,238,1) 100%);
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const LogoContainer = styled.div`
width: 40%;
height: 40px;
margin-bottom: 90px;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
font-family: 'cookie', sans-serif;
font-size: 100px;
img{
    width: 150px;
    height: 150px;
}
`
const FormContainer = styled.form`
    padding: 5px;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    button, input{
        width: 80%;
        height: 40px;
        margin: 2px;
        border-radius: 4px;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: 400;
    }
    input{
        padding: 10px;
        border: solid 1px #000;
    }
    button{
        background-color: #52B6FF;
        color: #FFF;
        border: none;
        font-family: 'Roboto', sans-serif;
        margin-bottom: 10px;
    }
    a{
        text-decoration: none;
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
        color: #52B6FF;
    }
`
export { FormContainer};