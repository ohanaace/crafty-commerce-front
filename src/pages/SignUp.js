import styled from "styled-components";
import { FormContainer } from "./LoginPage";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import { apiUrl } from "../App"
import logo from "../assets/transparentlogo.png"

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    
    const objetoSignUp = {
        name: name,
        email: email,
        password: password,
    };

    function handleSignUp(event) {
        event.preventDefault();
        if (password !== confirmPassword) { return toast.warn("As senhas não são iguais."); }
        axios
        .post(`${apiUrl}/signup`,objetoSignUp)
            .then(() => {
                toast('Registro bem sucedido!');
                navigate('/');
            })
        .catch((err) => {
          console.log(err);
          toast.error(err);
        });
        
    };


    return (
        <>
            <Body>
            <LogoContainer>
                <img src={logo} alt="logo" />
                Crafty
            </LogoContainer>
      <ToastContainer />
                <FormContainer onSubmit={handleSignUp}>
                    
                <input 
                type={"nome"}
                        placeholder="Nome"
                        required
                        onChange={(event) => setName(event.target.value)}
                />
                <input
                type={"email"} 
                placeholder="Email"
                        required
                        onChange={(event) => setEmail(event.target.value)}/>
                <input 
                type={"password"}
                placeholder="Senha"
                        required
                        onChange={(event) => setPassword(event.target.value)}
                />
                <input 
                type={"password"}
                placeholder="Repita a senha"
                        required
                        onChange={(event) => setConfirmPassword(event.target.value)}
                />
                <button type={"submit"}>
                    Registrar
                    </button>
                    <Link to={"/"}>
                    Já tem uma conta? Clique aqui!
                </Link>
        </FormContainer>

            </Body>
            </>
    )
};




    const Body = styled.main`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background: rgb(157,233,148);
background: radial-gradient(circle, rgba(157,233,148,1) 0%, rgba(174,214,238,1) 100%);
height:100vh;
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