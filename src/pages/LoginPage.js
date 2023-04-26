import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import logo from "../assets/transparentlogo.png"


export default function LogInPage(){
    return (
        <PageContainer>
            <LogoContainer>
                <img src={logo} alt="logo" />
                Crafty
            </LogoContainer>
            <FormContainer>
                <input
                type={"email"} 
                placeholder="email"
                required/>
                <input 
                type={"password"}
                placeholder="senha"
                required
                />
                <button type={"submit"}>
                    Entrar
                </button>
                <Link>
                Não tem uma conta? Cadastre-se aqui!
                </Link>
            </FormContainer>
        </PageContainer>
    )
}

const PageContainer = styled.main`
    background-color: #5A9B35;
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
        padding: 2px;
        border: solid 1px #000;
    }
    button{
        background-color: #407AB1;
        color: #FFF;
        border: none;
        font-family: 'Roboto', sans-serif;
        margin-bottom: 10px;
    }
    a{
        text-decoration: none;
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
        color: #407AB1;
    }
`
