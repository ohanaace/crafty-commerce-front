import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../App";
import { UserContext } from "../contexts/loginContext";
import loading from "../assets/loading.gif";
import Header from "./Components/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function CheckoutPage() {
  const [purchaseInfos, setPurchaseInfos] = useState(null);
  const { config } = useContext(UserContext);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`${apiUrl}/checkout`, config)
      .then((res) => {
        console.log(res.data);
        setPurchaseInfos(res.data);
      })
      .catch((err) => console.log(err.response.data));
  }, []);

  if (purchaseInfos === null) {
    return (
      <Container>
        <Title>Resumo do pedido</Title>
        <LoadingGif>
          <img src={loading} alt="loading" />
        </LoadingGif>
      </Container>
    );
  }
  function cleanCart() {
    axios.get(`${apiUrl}/deleteCart`, config)
      .then(res => {
        navigate("/home");
      })
      .catch(err => {
        toast.error(err.response.data)
      })

  }
  return (
    <>
      <Header />
      <Container>
        <Title>Resumo do pedido</Title>
        <CheckoutContainer>
          <Infos>
            <h1>Valor Total: {purchaseInfos.subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h1>
            <InfosContainer>
              {purchaseInfos.products.map((item, index) => (
                <SaleItem key={index}>
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>Quantidade: {item.quantity}</p>
                  <p>Preço: {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                </SaleItem>
              ))}
              <ToastContainer />
            </InfosContainer>
          </Infos>
          <section>Forma de Pagamento: {purchaseInfos.payment}</section>
          <Link>
            {" "}
            <CheckoutButton onClick={cleanCart} >Voltar</CheckoutButton>
          </Link>
        </CheckoutContainer>
      </Container>
    </>
  );
}
const Container = styled.div`
  background: linear-gradient(
    to bottom right,
    rgba(157, 233, 148, 1),
    rgba(174, 214, 238, 1)
  );
  margin-top: 100px;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  section {
    margin: auto;
    font-weight:500;
    font-family: "Roboto", sans-serif;
  }
`;

const CheckoutContainer = styled.div`
  width: 100%;
  max-width: 40rem;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  height: 70vh;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
border: 1px solid #e9e9e9;

`;

const Infos = styled.div`
  overflow-y: scroll;
  margin: 10px 0px;
  ::-webkit-scrollbar {
    display: none;
  }
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;

const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #222;
  margin: 2rem auto;
`;

const InfosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 100%;
  height: 25rem;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }
`;

const CheckoutButton = styled.button`
  border: none;
  border-radius: 4.63636px;
  width: 8rem;
  height: 3rem;
  background-color: #52b6ff;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  color: #fff;
  font-weight: 600;
  margin-top: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4095c6;
  }
`;

const SaleItem = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #f5f5dc;
  width: 30%;
  height: 18rem;
  padding: 1.9rem;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25), 0px 4px 8px rgba(0, 0, 0, 0.15);
  margin: 5px;
  margin-bottom: 1rem;
  text-align: center;

  img {
    height: 120px;
    width: 100%;
    object-fit: contain;
    border-radius: 4px;
    margin-bottom: 1rem;
  }

  p {
    font-family: "Roboto", sans-serif;
    margin: 0;
    font-size: 0.9rem;
  }

  p:nth-child(2) {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.3rem;
    margin-top: 0.2rem;
  }

  p:nth-child(4) {
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    font-family: "Roboto", sans-serif;
  }

  @media (max-width: 400px) {
    width: 100%;
    height: auto;
    padding: 8px;

    img {
      height: 80px;
      margin-bottom: 0.5rem;
    }
  }
`;


const LoadingGif = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  margin-top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
  }
`;
