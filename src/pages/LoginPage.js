import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import logo from "../assets/transparentlogo.png"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiUrl } from "../App";
import { useContext } from "react";
import { UserContext } from "../contexts/loginContext";

export default function LogInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useContext(UserContext);
    const navigate = useNavigate();

    function submitLogin(e) {
        e.preventDefault();
        setLoading(true)
        const body = { email, password };
        console.log(body)
        axios.post(`${apiUrl}/login`, body)
            .then((res) => {
                toast('Login bem sucedido!');
                localStorage.setItem("user", JSON.stringify(res.data));
                setAuthUser(res.data);
                navigate('/home');
            })
            .catch((err) => {
                console.log(err);
                toast.error(err.response.data);
                setLoading(false);
                setEmail("");
                setPassword("");
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
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    disabled={loading}
                />
                <input
                    type={"password"}
                    placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    disabled={loading}
                />
                <button type={"submit"}
                    disabled={loading}>
                    {loading ? <ThreeDots type="ThreeDots" color={"#FFF"} height={20} width={20} /> : "Entrar"}
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
        display: flex;
        justify-content: center;
        align-items: center;
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
export { FormContainer };
export { PageContainer };