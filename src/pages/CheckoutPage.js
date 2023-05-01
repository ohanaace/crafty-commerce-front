import styled from "styled-components";
import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../App";
import { UserContext } from "../contexts/loginContext";
import loading from "../assets/loading.gif";


export default function CheckoutPage() {

  const [purchaseInfos, setPurchaseInfos] = useState(null);
  const {config} = useContext(UserContext);

  useEffect(() => {
    axios.get(`${apiUrl}/checkout`, config)
      .then(res => {
        console.log(res.data)
        setPurchaseInfos(res.data)
      })
      .catch(err => console.log(err.response.data))
  }, [])

  if (purchaseInfos === null){
    return (
      <Container>
        <Title>Resumo do pedido</Title>
        <LoadingGif>
          <img src={loading} alt="loading" />
        </LoadingGif>
      </Container>
    )
  }
  
  return (
    <Container>
      <Title>Resumo do pedido</Title>
      <CheckoutContainer>
        <Infos>
          <h1>Valor Total: {purchaseInfos.subtotal}</h1>
          <InfosContainer>
            {purchaseInfos.products.map((item, index) => (
              <SaleItem key={index}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>Quantidade: {item.quantity}</p>
                <p>Preço: R${item.price}</p>
              </SaleItem>
            ))}
          </InfosContainer>
        </Infos>
      </CheckoutContainer>
      <section>Forma de Pagamento: {purchaseInfos.payment}</section>
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

const LoadingGif = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    margin-top: 200px;
    display: flex;
    justify-content: center;
    align-itens: center;
    img{
        width: 50px;
        height: 50px;
    }
`