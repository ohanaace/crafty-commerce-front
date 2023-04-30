import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";
import { apiUrl } from "../App";
import { useState } from "react";

import { UserContext } from "../contexts/loginContext";
import { useContext } from "react";
import { Link } from "react-router-dom"

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState([]);
  const { config } = useContext(UserContext);
  const [payment, setPayment] = useState("");

  useEffect(() => {
    axios
      .get(`${apiUrl}/cartProducts`, config)
      .then((response) => {
        console.log(response.data);
        console.log("useEffect checkoutpage .then");
        setCartItems(response.data.products);
        setPayment(response.data.user.payment); //FORMA DE PAGAMENTO
      })
  }, []);

  const checkoutValue = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <Container>
      <Title>Resumo do pedido</Title>
      <CheckoutContainer>
        <Infos>
          <h1>Valor Total: {checkoutValue}</h1>
          <InfosContainer>
            {cartItems.map((item) => (
              <SaleItem key={item.id}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>Quantidade: {item.quantity}</p>
                <p>Preço: R${item.price}</p>
              </SaleItem>
            ))}
          </InfosContainer>
        </Infos>
      </CheckoutContainer>
      <section>Forma de Pagamento: {payment ? payment : "Não encontrado."}</section>
     <Link to="/home"> <CheckoutButton>
Voltar
      </CheckoutButton>
      </Link>
    </Container>
  );
}
const Container = styled.div`
  background: linear-gradient(
    to bottom right,
    rgba(157, 233, 148, 1),
    rgba(174, 214, 238, 1)
  );
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  section{
  margin-top:0.5rem;
  font-family: "Roboto", sans-serif;    
  }
`;

const CheckoutContainer = styled.div`
  width: 100%;
  max-width: 40rem;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  height: 70vh;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
    margin-bottom:1rem;
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
  margin-top:1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4095c6;
  }
`;

const SaleItem = styled.article`
  width: 150px;
  height: 150px;
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;

  img {
    width: 7rem;
    height: 7rem;
  }

  p {
    font-family: "Roboto", sans-serif;
    margin: 0;
    font-size: 0.9rem;
  }

  p:nth-child(2) {
    font-weight: bold;
    font-size: 0.8rem;
  }

  p:nth-child(4) {
    font-size: 0.7rem;
  }
`;
