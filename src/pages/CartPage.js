import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../App";
import { UserContext } from "../contexts/loginContext";
import CartProduct from "./Components/CartProduct";
import { useNavigate, Link } from "react-router-dom";
import Header from "./Components/Header";
import { PageContainer } from "./LoginPage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CartPage() {

  const [paymentMethod, setPaymentMethod] = useState("");
  const [subtotal, setSubtotal] = useState(0);
  const navigate = useNavigate();
  const { config } = useContext(UserContext);

  const [cartProducts, setCartProducts] = useState([])

  useEffect(() => {
    axios.get(`${apiUrl}/cartProducts`, config)
      .then((res) => {
        setCartProducts(res.data);
        let subtotal = 0;
        res.data.forEach(obj => {
          subtotal += obj.price * obj.quantity;
        });
        setSubtotal(subtotal);
      })
      .catch((err) => console.log(err.response.data))
  }, [cartProducts])

  function handleCheckout() {
    console.log("clicou em finalizar");
    console.log(paymentMethod)
    axios.post(`${apiUrl}/checkout`, { payment: paymentMethod, subtotal: subtotal }, config)
      .then(res => {
        console.log(res.data);
        toast(res.data, {autoClose: 1500})
        setTimeout(() => navigate("/checkout") , 2500);
      })
      .catch(err => console.log(err.response.data))

  }


  return (
    <>
      <Header />
      <PageContainer>
        <CartTitle>Meu Carrinho</CartTitle>
        <ProductsContainer>
          <Products>
            <CartProduct cartProducts={cartProducts} />
          </Products>
        </ProductsContainer>
        <ToastContainer />
        <PurchaseSummary>
          <StyledTotal>Subtotal =</StyledTotal>
          <StyledAmount>R$ {subtotal.toFixed(2)}</StyledAmount>
          <StyledSelect value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            <StyledOption value="">Selecione a forma de pagamento</StyledOption>
            <StyledOption value="Cartão de Crédito">Cartão de Crédito</StyledOption>
            <StyledOption value="Cartão de Débito">Cartão de Débito</StyledOption>
            <StyledOption value="Boleto Bancário">Boleto Bancário</StyledOption>
            <StyledOption value="Pix">Pix</StyledOption>
          </StyledSelect>
          <CheckoutButton onClick={handleCheckout}>Finalizar compra</CheckoutButton>
            <Button onClick={() => navigate("/home")} >
              Voltar
            </Button>
        </PurchaseSummary>
      </PageContainer>
    </>
  );
}
const ProductsContainer = styled.div`
flex-grow: 1;
padding: 16px;
display: flex;
flex-direction: column;
justify-content: space-between;
overflow-y: scroll;
::-webkit-scrollbar {
  display: none;
}
`
const Products = styled.div`
overflow-y: scroll;
margin: 10px 0px;
::-webkit-scrollbar {
    display: none;
}
`
const CartTitle = styled.h1`
margin-top: 140px;
font-family: 'Roboto', sans-serif;
font-size: 2rem;
font-weight: 700;
color: #222;
//margin: 2rem auto;
`

const CheckoutButton = styled.button`
border: none;
border-radius: 4.63636px;
width: 10rem;
height: 3rem;
background-color:#52b6ff;
font-family: 'Roboto', sans-serif;
font-size: 1rem;
color:#fff;
font-weight: 600;
position: absolute;
top: 20px;
right: 150px;
@media screen and (max-width: 400px){
  margin: 10px;
  height: 80px;
  width: 80%;
  position: static;
}
`
const Button = styled.button`
border: none;
border-radius: 4.63636px;
width: 10rem;
height: 3rem;
background-color:#52b6ff;
font-family: 'Roboto', sans-serif;
font-size: 1rem;
color:#fff;
font-weight: 600;
position: absolute;
top: 80px;
right: 150px;
@media screen and (max-width: 400px){
  margin: 10px;
  height: 80px;
  width: 80%;
  position: static;
  }
`
const PurchaseSummary = styled.div`
width: 50%;
height: 15vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-bottom: 2rem;
position: relative;
@media screen and (max-width: 400px) {
position: static;
 width: 90%;
 height: 16rem;
 margin-bottom: 0.5rem;
}
`
const StyledTotal = styled.h2`
position:absolute;
top: 30px;
left: 200px;
font-family: 'Roboto', sans-serif;
font-size: 1.5rem;
font-weight: 600;
@media screen and (max-width: 400px){
  position: static;
}
`
const StyledAmount = styled.div`
font-family: 'Roboto', sans-serif;
font-size: 1.5rem;
font-weight: 600;
position:absolute;
top: 30px;
left: 350px;
@media screen and (max-width: 400px){
  margin-bottom: 1rem;
  position: static;
}
`
const StyledSelect = styled.select`
font-family: 'Roboto', sans-serif;
font-style: italic;
width:260px;
height:40px;
border-radius:5px;
border:none;
// background-color:#52b6ff;
font-size: 16px;
color:black;
position:absolute;
top:70px;
left:200px;
@media screen and (max-width: 400px){
  position: static;
  margin-bottom: 0.5rem;
}
`;

const StyledOption = styled.option`
font-family: 'Roboto', sans-serif;
font-size: 16px;
`;